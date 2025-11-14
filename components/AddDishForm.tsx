'use client';

import { useState, type ChangeEvent, type FormEvent } from 'react';
import { uploadImageToCloudinary } from '@/lib/cloudinaryUpload';

type DishPayload = {
  categoria: string;
  nombre: string;
  descripcion: string;
  precio: number;
  fotoUrl: string;
  activo: boolean;
  createdAt: string;
};

const webhookUrl = process.env.VITE_NEW_DISH_WEBHOOK_URL;

export default function AddDishForm() {
  const [categoria, setCategoria] = useState('Tapas');
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [precio, setPrecio] = useState('');
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const [resultPayload, setResultPayload] = useState<DishPayload | null>(null);
  const [photoUrl, setPhotoUrl] = useState<string | null>(null);

  function handleFileChange(e: ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) {
      return;
    }
    setImageFile(file);
    setImagePreview(URL.createObjectURL(file));
    setStatusMessage(null);
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!nombre.trim() || !descripcion.trim() || !precio || !imageFile) {
      setStatusMessage('Por favor, rellena todos los campos y selecciona una imagen.');
      return;
    }

    const parsedPrice = parseFloat(precio);
    if (Number.isNaN(parsedPrice)) {
      setStatusMessage('Introduce un precio válido.');
      return;
    }

    setSubmitting(true);
    setStatusMessage('Subiendo imagen...');
    setResultPayload(null);
    setPhotoUrl(null);

    try {
      const fotoUrl = await uploadImageToCloudinary(imageFile);

      const dishPayload: DishPayload = {
        categoria,
        nombre: nombre.trim(),
        descripcion: descripcion.trim(),
        precio: parsedPrice,
        fotoUrl,
        activo: true,
        createdAt: new Date().toISOString(),
      };

      console.log('[Nuevo plato]', dishPayload);

      const trimmedWebhook = (webhookUrl ?? '').trim();
      if (trimmedWebhook) {
        const res = await fetch(trimmedWebhook, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(dishPayload),
        });

        if (!res.ok) {
          throw new Error(`Error en webhook: ${res.status} ${res.statusText}`);
        }
      }

      setStatusMessage(
        'Plato guardado correctamente. Ya puedes copiar la URL o revisar el webhook.'
      );
      setResultPayload(dishPayload);
      setPhotoUrl(fotoUrl);
      setNombre('');
      setDescripcion('');
      setPrecio('');
      setImageFile(null);
      setImagePreview(null);
    } catch (error) {
      console.error('Error creando plato', error);
      setStatusMessage(
        'Ha habido un error subiendo la imagen o guardando el plato. Revisa la consola.'
      );
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm sm:p-6"
      >
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-gray-700">Categoría</label>
          <select
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
            className="mt-1 rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
          >
            <option value="Tapas">Tapas</option>
            <option value="Raciones">Raciones</option>
            <option value="Postres">Postres</option>
            <option value="Bebidas">Bebidas</option>
          </select>
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-gray-700">Nombre</label>
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            className="mt-1 rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
            required
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-gray-700">Descripción</label>
          <textarea
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
            className="mt-1 min-h-[80px] rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
            required
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-gray-700">Precio (€)</label>
          <input
            type="number"
            step="0.01"
            value={precio}
            onChange={(e) => setPrecio(e.target.value)}
            className="mt-1 rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
            required
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-gray-700">Imagen</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="mt-1 text-sm"
            required
          />
          {imagePreview && (
            <div className="mt-2">
              <img
                src={imagePreview}
                alt="Previsualización del plato"
                className="h-48 w-48 rounded-md border border-gray-200 object-cover"
              />
            </div>
          )}
        </div>

        {statusMessage && (
          <p className="text-sm text-gray-700">{statusMessage}</p>
        )}

        <button
          type="submit"
          disabled={submitting}
          className="inline-flex items-center justify-center rounded-md bg-primary-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-primary-700 disabled:cursor-not-allowed disabled:bg-gray-300"
        >
          {submitting ? 'Procesando...' : 'Subir y guardar plato'}
        </button>
      </form>

      {(photoUrl || resultPayload) && (
        <div className="mt-6 space-y-3 rounded-lg border border-dashed border-gray-300 bg-gray-50 p-4">
          {photoUrl && (
            <div className="text-xs">
              <div className="font-semibold text-gray-800">URL de la imagen</div>
              <div className="break-all text-gray-700">{photoUrl}</div>
            </div>
          )}
          {resultPayload && (
            <div>
              <div className="text-xs font-semibold text-gray-800">
                JSON generado
              </div>
              <pre className="mt-1 max-h-72 overflow-auto rounded-md bg-gray-900 p-3 text-[11px] text-gray-100">
                {JSON.stringify(resultPayload, null, 2)}
              </pre>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

'use client';

import { useEffect, useState, type ChangeEvent, type FormEvent } from 'react';
import { uploadImageToCloudinary } from '@/lib/cloudinaryUpload';
import { Edit3, RefreshCw, Save, XCircle } from 'lucide-react';

type DishRow = {
  id: string;
  categoria: string;
  nombre: string;
  descripcion: string;
  precio: number;
  fotoUrl: string;
  activo: boolean;
  orden: number;
};

type EditableDish = {
  id: string;
  categoria: string;
  nombre: string;
  descripcion: string;
  precio: string;
  fotoUrl: string;
  activo: boolean;
  orden: number;
};

export default function EditDishesSection() {
  const [dishes, setDishes] = useState<DishRow[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [selectedDish, setSelectedDish] = useState<EditableDish | null>(null);
  const [saving, setSaving] = useState(false);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const [categoryFilter, setCategoryFilter] = useState<string>('Todas');
  const [uploadingImage, setUploadingImage] = useState(false);

  useEffect(() => {
    void loadDishes();
  }, []);

  async function loadDishes() {
    try {
      setLoading(true);
      setError(null);
      setStatusMessage(null);
      const res = await fetch('/api/platos/list', { cache: 'no-store' });
      if (!res.ok) {
        const data = await res.json().catch(() => null);
        throw new Error(data?.error || 'No se pudieron cargar los platos');
      }
      const data = (await res.json()) as { items?: DishRow[] };
      setDishes(data.items ?? []);
    } catch (err) {
      console.error('Error cargando platos', err);
      setError('No se pudieron cargar los platos. Revisa el webhook o Apps Script.');
    } finally {
      setLoading(false);
    }
  }

  function handleSelectDish(dish: DishRow) {
    setSelectedDish({
      id: dish.id,
      categoria: dish.categoria,
      nombre: dish.nombre,
      descripcion: dish.descripcion,
      precio: String(dish.precio ?? ''),
      fotoUrl: dish.fotoUrl,
      activo: Boolean(dish.activo),
      orden: dish.orden ?? 0,
    });
    setStatusMessage(null);
  }

  function handleEditChange(
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    if (!selectedDish) return;
    const { name, value, type, checked } = e.target as HTMLInputElement;
    setSelectedDish({
      ...selectedDish,
      [name]: type === 'checkbox' ? checked : value,
    });
  }

  async function handleUploadNewImage(e: ChangeEvent<HTMLInputElement>) {
    if (!selectedDish) return;
    const file = e.target.files?.[0];
    if (!file) return;
    try {
      setUploadingImage(true);
      setStatusMessage('Subiendo nueva imagen...');
      const fotoUrl = await uploadImageToCloudinary(file);
      setSelectedDish({ ...selectedDish, fotoUrl });
      setStatusMessage('Imagen actualizada. No olvides guardar los cambios del plato.');
    } catch (error) {
      console.error('Error subiendo nueva imagen', error);
      setStatusMessage('Error subiendo la nueva imagen. Revisa la consola.');
    } finally {
      setUploadingImage(false);
    }
  }

  async function handleSave(e: FormEvent) {
    e.preventDefault();
    if (!selectedDish) return;

    if (!selectedDish.nombre.trim() || !selectedDish.descripcion.trim() || !selectedDish.precio) {
      setStatusMessage('Nombre, descripción y precio son obligatorios.');
      return;
    }

    const parsedPrice = parseFloat(selectedDish.precio.replace(',', '.'));
    if (Number.isNaN(parsedPrice)) {
      setStatusMessage('Introduce un precio válido.');
      return;
    }

    try {
      setSaving(true);
      setStatusMessage('Guardando cambios en Google Sheets...');

      const payload = {
        id: selectedDish.id,
        categoria: selectedDish.categoria,
        nombre: selectedDish.nombre.trim(),
        descripcion: selectedDish.descripcion.trim(),
        precio: parsedPrice,
        fotoUrl: selectedDish.fotoUrl,
        activo: selectedDish.activo,
        orden: selectedDish.orden,
      };

      const res = await fetch('/api/platos/update', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => null);
        throw new Error(data?.error || 'No se pudo actualizar el plato');
      }

      setStatusMessage('Plato actualizado correctamente.');

      // Actualizar lista en memoria
      setDishes((prev) =>
        prev.map((d) => (d.id === payload.id ? { ...d, ...payload } : d))
      );
    } catch (error) {
      console.error('Error guardando plato', error);
      setStatusMessage('Hubo un error guardando los cambios. Revisa la consola.');
    } finally {
      setSaving(false);
    }
  }

  const filteredDishes = dishes.filter((dish) =>
    categoryFilter === 'Todas' ? true : dish.categoria === categoryFilter
  );

  return (
    <section className="mt-10 space-y-6">
      <div className="flex items-center justify-between gap-3">
        <h2 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
          <Edit3 className="w-5 h-5" />
          Gestionar platos existentes
        </h2>
        <button
          type="button"
          onClick={() => void loadDishes()}
          disabled={loading}
          className="inline-flex items-center gap-2 rounded-md border border-gray-300 bg-white px-3 py-1.5 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 disabled:opacity-50"
        >
          <RefreshCw className="w-4 h-4" />
          {loading ? 'Actualizando...' : 'Recargar'}
        </button>
      </div>

      {error && (
        <div className="flex items-start gap-2 rounded-md border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">
          <XCircle className="mt-0.5 h-4 w-4 flex-shrink-0" />
          <span>{error}</span>
        </div>
      )}

      <div className="grid gap-6 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1.4fr)]">
        {/* Lista de platos */}
        <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
          <div className="mb-3 flex items-center justify-between gap-3">
            <p className="text-sm font-medium text-gray-700">Platos en Google Sheets</p>
            <select
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
              className="rounded-md border border-gray-300 px-2 py-1 text-xs shadow-sm focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
            >
              <option value="Todas">Todas las categorías</option>
              <option value="Tapas">Tapas</option>
              <option value="Raciones">Raciones</option>
              <option value="Postres">Postres</option>
              <option value="Bebidas">Bebidas</option>
            </select>
          </div>

          <div className="max-h-96 overflow-auto rounded border border-gray-100">
            <table className="min-w-full divide-y divide-gray-200 text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-3 py-2 text-left text-xs font-semibold text-gray-500">ID</th>
                  <th className="px-3 py-2 text-left text-xs font-semibold text-gray-500">Categoría</th>
                  <th className="px-3 py-2 text-left text-xs font-semibold text-gray-500">Nombre</th>
                  <th className="px-3 py-2 text-right text-xs font-semibold text-gray-500">Precio</th>
                  <th className="px-3 py-2 text-center text-xs font-semibold text-gray-500">Activo</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 bg-white">
                {filteredDishes.length === 0 && !loading && (
                  <tr>
                    <td colSpan={5} className="px-3 py-4 text-center text-xs text-gray-500">
                      No hay platos para esta categoría.
                    </td>
                  </tr>
                )}
                {filteredDishes.map((dish) => (
                  <tr
                    key={dish.id}
                    className={`cursor-pointer hover:bg-primary-50/60 ${
                      selectedDish?.id === dish.id ? 'bg-primary-50' : ''
                    }`}
                    onClick={() => handleSelectDish(dish)}
                  >
                    <td className="whitespace-nowrap px-3 py-2 text-xs font-mono text-gray-500">
                      {dish.id}
                    </td>
                    <td className="whitespace-nowrap px-3 py-2 text-xs text-gray-700">
                      {dish.categoria}
                    </td>
                    <td className="px-3 py-2 text-xs text-gray-900">{dish.nombre}</td>
                    <td className="whitespace-nowrap px-3 py-2 text-right text-xs text-gray-800">
                      €{dish.precio}
                    </td>
                    <td className="px-3 py-2 text-center text-xs">
                      {dish.activo ? (
                        <span className="inline-flex rounded-full bg-green-100 px-2 py-0.5 text-[10px] font-semibold text-green-700">
                          Activo
                        </span>
                      ) : (
                        <span className="inline-flex rounded-full bg-gray-100 px-2 py-0.5 text-[10px] font-semibold text-gray-600">
                          Inactivo
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Formulario de edición */}
        <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
          {selectedDish ? (
            <form onSubmit={handleSave} className="space-y-4">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-sm font-semibold text-gray-900">Editar plato</p>
                  <p className="text-xs text-gray-500">ID: {selectedDish.id}</p>
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <div className="flex flex-col gap-1">
                  <label className="text-xs font-medium text-gray-700">Categoría</label>
                  <select
                    name="categoria"
                    value={selectedDish.categoria}
                    onChange={handleEditChange}
                    className="rounded-md border border-gray-300 px-3 py-1.5 text-xs shadow-sm focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
                  >
                    <option value="Tapas">Tapas</option>
                    <option value="Raciones">Raciones</option>
                    <option value="Postres">Postres</option>
                    <option value="Bebidas">Bebidas</option>
                  </select>
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-xs font-medium text-gray-700">Precio (€)</label>
                  <input
                    type="text"
                    name="precio"
                    value={selectedDish.precio}
                    onChange={handleEditChange}
                    className="rounded-md border border-gray-300 px-3 py-1.5 text-xs shadow-sm focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-xs font-medium text-gray-700">Nombre</label>
                <input
                  type="text"
                  name="nombre"
                  value={selectedDish.nombre}
                  onChange={handleEditChange}
                  className="rounded-md border border-gray-300 px-3 py-1.5 text-xs shadow-sm focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-xs font-medium text-gray-700">Descripción</label>
                <textarea
                  name="descripcion"
                  value={selectedDish.descripcion}
                  onChange={handleEditChange}
                  rows={3}
                  className="rounded-md border border-gray-300 px-3 py-1.5 text-xs shadow-sm focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-xs font-medium text-gray-700">Foto (URL)</label>
                <input
                  type="text"
                  name="fotoUrl"
                  value={selectedDish.fotoUrl}
                  onChange={handleEditChange}
                  className="rounded-md border border-gray-300 px-3 py-1.5 text-xs shadow-sm focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500 text-[11px]"
                />
                <div className="mt-2 flex items-center gap-3">
                  {selectedDish.fotoUrl && (
                    <img
                      src={selectedDish.fotoUrl}
                      alt={selectedDish.nombre}
                      className="h-20 w-20 rounded-md border border-gray-200 object-cover"
                    />
                  )}
                  <div className="flex flex-col gap-1 text-xs text-gray-600">
                    <label className="inline-flex cursor-pointer items-center gap-2 text-[11px] font-medium text-primary-700">
                      <span className="rounded-md border border-primary-200 bg-primary-50 px-2 py-1 text-[11px] font-semibold">
                        Subir nueva foto
                      </span>
                      <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={handleUploadNewImage}
                        disabled={uploadingImage}
                      />
                    </label>
                    <span className="text-[11px] text-gray-500">
                      Se subirá a Cloudinary y se actualizará la URL.
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between gap-3">
                <label className="inline-flex items-center gap-2 text-xs text-gray-700">
                  <input
                    type="checkbox"
                    name="activo"
                    checked={selectedDish.activo}
                    onChange={handleEditChange}
                    className="h-3.5 w-3.5 rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                  />
                  <span>Plato activo en el menú</span>
                </label>
                <div className="text-[11px] text-gray-500">
                  Orden actual: {selectedDish.orden}
                </div>
              </div>

              {statusMessage && (
                <p className="text-xs text-gray-700">{statusMessage}</p>
              )}

              <button
                type="submit"
                disabled={saving}
                className="inline-flex items-center justify-center rounded-md bg-primary-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-primary-700 disabled:cursor-not-allowed disabled:bg-gray-300"
              >
                {saving ? (
                  'Guardando...'
                ) : (
                  <span className="inline-flex items-center gap-2">
                    <Save className="h-4 w-4" />
                    Guardar cambios
                  </span>
                )}
              </button>
            </form>
          ) : (
            <div className="flex h-full items-center justify-center text-sm text-gray-500">
              Selecciona un plato de la lista para editarlo.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

'use client';

import { useEffect, useState, type ChangeEvent, type FormEvent } from 'react';
import { uploadImageToCloudinary } from '@/lib/cloudinaryUpload';
import { Edit3, RefreshCw, Save, XCircle, Search, X } from 'lucide-react';

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
  const [categories, setCategories] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [uploadingImage, setUploadingImage] = useState(false);
  const [showModal, setShowModal] = useState(false);

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
      const items = data.items ?? [];
      setDishes(items);

      // Construir categorías dinámicas a partir de los platos
      const uniqueCategories = Array.from(
        new Set(
          items
            .map((d) => d.categoria)
            .filter((cat): cat is string => Boolean(cat && cat.trim()))
        )
      ).sort((a, b) => a.localeCompare(b, 'es', { sensitivity: 'base' }));

      setCategories(uniqueCategories);

      // Si el filtro actual ya no existe (por ejemplo, se ha eliminado una categoría), volver a "Todas"
      setCategoryFilter((prev) =>
        prev === 'Todas' || uniqueCategories.includes(prev) ? prev : 'Todas'
      );
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
    setShowModal(true);
  }

  function handleCloseModal() {
    setSelectedDish(null);
    setStatusMessage(null);
    setShowModal(false);
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

  async function toggleDishActive(dish: DishRow, nextActive: boolean) {
    const previous = dish.activo;

    // Actualización optimista en la tabla
    setDishes((current) =>
      current.map((d) => (d.id === dish.id ? { ...d, activo: nextActive } : d))
    );

    try {
      const payload = {
        id: dish.id,
        categoria: dish.categoria,
        nombre: dish.nombre,
        descripcion: dish.descripcion,
        precio: dish.precio,
        fotoUrl: dish.fotoUrl,
        activo: nextActive,
        orden: dish.orden,
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

      // Si el modal está abierto para este plato, sincronizar estado
      setSelectedDish((prev) =>
        prev && prev.id === dish.id ? { ...prev, activo: nextActive } : prev
      );
    } catch (error) {
      console.error('Error actualizando estado del plato', error);
      setStatusMessage(
        'Hubo un error cambiando el estado del plato. Revisa la consola.'
      );

      // Revertir la actualización optimista
      setDishes((current) =>
        current.map((d) => (d.id === dish.id ? { ...d, activo: previous } : d))
      );
    }
  }

  const filteredDishes = dishes.filter((dish) => {
    const categoryMatch =
      categoryFilter === 'Todas' ? true : dish.categoria === categoryFilter;
    const searchMatch = dish.nombre
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return categoryMatch && searchMatch;
  });

  const sortedDishes =
    categoryFilter === 'Todas'
      ? [...filteredDishes].sort((a, b) => {
          const catCmp = a.categoria.localeCompare(b.categoria, 'es', {
            sensitivity: 'base',
          });
          if (catCmp !== 0) return catCmp;
          return a.nombre.localeCompare(b.nombre, 'es', { sensitivity: 'base' });
        })
      : filteredDishes;

  const categoryOptions = Array.from(
    new Set(
      [
        ...categories,
        selectedDish?.categoria,
      ].filter((cat): cat is string => Boolean(cat && cat.trim()))
    )
  ).sort((a, b) => a.localeCompare(b, 'es', { sensitivity: 'base' }));

  return (
    <section className="mt-10 space-y-4 md:space-y-6">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <h2 className="flex items-center gap-2 text-2xl font-semibold text-gray-900 md:text-3xl">
          <Edit3 className="h-6 w-6" />
          Gestionar platos existentes
        </h2>
        <button
          type="button"
          onClick={() => void loadDishes()}
          disabled={loading}
          className="inline-flex items-center gap-2 self-start rounded-full border border-gray-300 bg-white px-4 py-1.5 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 disabled:opacity-50"
        >
          <RefreshCw className="h-4 w-4" />
          {loading ? 'Actualizando...' : 'Recargar'}
        </button>
      </div>

      {error && (
        <div className="flex items-start gap-2 rounded-md border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">
          <XCircle className="mt-0.5 h-4 w-4 flex-shrink-0" />
          <span>{error}</span>
        </div>
      )}
      <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm md:p-5">
        <div className="mb-4 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-base font-semibold text-gray-900 md:text-lg">
              Platos en Google Sheets
            </p>
            <p className="text-xs text-gray-500 md:text-sm">
              Toca un plato para editarlo. Los cambios se guardan directamente en la hoja.
            </p>
          </div>
          <div className="flex flex-col items-stretch gap-2 sm:flex-row sm:items-center">
            <div className="relative w-full sm:w-56">
              <Search className="pointer-events-none absolute left-2.5 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Buscar plato..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full rounded-full border border-gray-300 bg-gray-50 py-1.5 pl-8 pr-3 text-xs text-gray-800 shadow-sm outline-none ring-0 transition focus:border-primary-500 focus:bg-white focus:ring-1 focus:ring-primary-500 md:text-sm"
              />
            </div>
            <div className="flex flex-wrap gap-1.5">
              {['Todas', ...categories].map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setCategoryFilter(cat)}
                  className={`rounded-full px-3 py-1 text-xs font-medium transition md:text-sm ${
                    categoryFilter === cat
                      ? 'bg-primary-600 text-white shadow-sm'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="max-h-[28rem] overflow-auto rounded-xl border border-gray-100">
          <table className="min-w-full divide-y divide-gray-200 text-sm md:text-base">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-3 py-2 text-left text-[11px] font-semibold uppercase tracking-wide text-gray-500 md:text-xs">
                  Categoría
                </th>
                <th className="px-3 py-2 text-left text-[11px] font-semibold uppercase tracking-wide text-gray-500 md:text-xs">
                  Nombre
                </th>
                <th className="px-3 py-2 text-right text-[11px] font-semibold uppercase tracking-wide text-gray-500 md:text-xs">
                  Precio
                </th>
                <th className="px-3 py-2 text-right text-[11px] font-semibold uppercase tracking-wide text-gray-500 md:text-xs">
                  Estado
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 bg-white">
              {sortedDishes.length === 0 && !loading && (
                <tr>
                  <td
                    colSpan={4}
                    className="px-3 py-4 text-center text-xs text-gray-500 md:text-sm"
                  >
                    No hay platos que coincidan con los filtros.
                  </td>
                </tr>
              )}
              {sortedDishes.map((dish) => (
                <tr
                  key={dish.id}
                  className="cursor-pointer hover:bg-primary-50/60"
                  onClick={() => handleSelectDish(dish)}
                >
                  <td className="whitespace-nowrap px-3 py-3 text-xs font-medium text-gray-700 md:text-sm">
                    {dish.categoria}
                  </td>
                  <td className="px-3 py-3 text-xs font-semibold text-gray-900 md:text-base">
                    {dish.nombre}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3 text-right text-xs text-gray-800 md:text-sm">
                    €{dish.precio}
                  </td>
                  <td className="px-3 py-3 text-right text-xs md:text-sm">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        void toggleDishActive(dish, !dish.activo);
                      }}
                      className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[11px] font-semibold md:text-xs ${
                        dish.activo
                          ? 'bg-green-100 text-green-700'
                          : 'bg-red-100 text-red-700'
                      }`}
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-current" />
                      {dish.activo ? 'Activo' : 'Inactivo'}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {showModal && selectedDish && (
        <div className="fixed inset-0 z-40 flex items-center justify-center px-4 py-8">
          <div
            className="absolute inset-0 bg-black/40"
            onClick={handleCloseModal}
          />
          <div className="relative z-10 w-full max-w-lg rounded-2xl bg-white p-5 shadow-2xl md:p-6">
            <button
              type="button"
              onClick={handleCloseModal}
              className="absolute right-3 top-3 rounded-full p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-700"
              aria-label="Cerrar edición"
            >
              <X className="h-4 w-4" />
            </button>

            <form onSubmit={handleSave} className="space-y-4 pt-2">
              <div className="flex flex-col gap-1">
                <p className="text-lg font-semibold text-gray-900 md:text-xl">
                  Editar plato
                </p>
                <p className="text-xs text-gray-500">ID: {selectedDish.id}</p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <div className="flex flex-col gap-1">
                  <label className="text-xs font-medium text-gray-700">Categoría</label>
                  <select
                    name="categoria"
                    value={selectedDish.categoria}
                    onChange={handleEditChange}
                    className="rounded-lg border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
                  >
                    {categoryOptions.map((cat) => (
                      <option key={cat} value={cat}>
                        {cat}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-xs font-medium text-gray-700">Precio (€)</label>
                  <input
                    type="text"
                    name="precio"
                    value={selectedDish.precio}
                    onChange={handleEditChange}
                    className="rounded-lg border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
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
                  className="rounded-lg border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-xs font-medium text-gray-700">Descripción</label>
                <textarea
                  name="descripcion"
                  value={selectedDish.descripcion}
                  onChange={handleEditChange}
                  rows={4}
                  className="rounded-lg border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
                />
              </div>

              <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:gap-4">
                {selectedDish.fotoUrl && (
                  <img
                    src={selectedDish.fotoUrl}
                    alt={selectedDish.nombre}
                    className="h-24 w-24 rounded-md border border-gray-200 object-cover sm:h-28 sm:w-28"
                  />
                )}
                <div className="flex flex-1 flex-col gap-1 text-xs text-gray-600">
                  <span className="text-xs font-medium text-gray-700">Foto del plato</span>
                  <label className="inline-flex cursor-pointer items-center gap-2 text-xs font-medium text-primary-700">
                    <span className="rounded-md border border-primary-200 bg-primary-50 px-3 py-1.5 text-xs font-semibold">
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
                    Se subirá a Cloudinary y se actualizará automáticamente en el menú.
                  </span>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-medium text-gray-700">Estado</span>
                  <button
                    type="button"
                    onClick={() =>
                      setSelectedDish((prev) =>
                        prev ? { ...prev, activo: !prev.activo } : prev
                      )
                    }
                    className={`inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-semibold md:text-sm ${
                      selectedDish.activo
                        ? 'bg-green-100 text-green-700'
                        : 'bg-red-100 text-red-700'
                    }`}
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-current" />
                    {selectedDish.activo ? 'Activo' : 'Inactivo'}
                  </button>
                </div>
                <div className="text-[11px] text-gray-500">
                  Orden actual: {selectedDish.orden}
                </div>
              </div>

              {statusMessage && (
                <p className="text-xs text-gray-700 md:text-sm">{statusMessage}</p>
              )}

              <div className="flex justify-end">
                <button
                  type="submit"
                  disabled={saving}
                  className="inline-flex items-center justify-center rounded-full bg-primary-600 px-5 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-primary-700 disabled:cursor-not-allowed disabled:bg-gray-300"
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
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}

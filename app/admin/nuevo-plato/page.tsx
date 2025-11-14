import AddDishForm from '@/components/AddDishForm';
import EditDishesSection from '@/components/EditDishesSection';

export default function NewDishPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-8">
      <section className="max-w-2xl">
        <h1 className="mb-4 text-2xl font-bold">Añadir nuevo plato</h1>
        <p className="mb-4 text-sm text-gray-600">
          Sube una foto desde tu móvil y rellena los datos. Al enviar, se generará la URL y se
          mandará al webhook (o se mostrará el JSON para copiar).
        </p>
        <AddDishForm />
      </section>

      <EditDishesSection />
    </main>
  );
}

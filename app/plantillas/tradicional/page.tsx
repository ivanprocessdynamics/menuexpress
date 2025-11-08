import { Metadata } from 'next';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Plantilla Tradicional - Menu Express',
  description: 'Plantilla de carta digital para restaurantes tradicionales y braserías',
};

export default function TradicionalPage() {
  // Redirigir a la página principal con el ancla de contacto
  redirect('/#contacto');
}

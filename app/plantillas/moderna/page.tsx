import { Metadata } from 'next';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Plantilla Moderna - Web Dynamics',
  description: 'Plantilla de carta digital para pizzerías y locales de comida rápida',
};

export default function ModernaPage() {
  // Redirigir a la página principal con el ancla de contacto
  redirect('/#contacto');
}

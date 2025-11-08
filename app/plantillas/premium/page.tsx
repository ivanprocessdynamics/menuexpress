import { Metadata } from 'next';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Plantilla Premium - Menu Express',
  description: 'Plantilla de carta digital para sushi, alta cocina y restaurantes de fusión',
};

export default function PremiumPage() {
  // Redirigir a la página principal con el ancla de contacto
  redirect('/#contacto');
}

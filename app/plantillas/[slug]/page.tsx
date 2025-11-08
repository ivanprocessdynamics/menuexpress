import { notFound } from 'next/navigation';
import { templates } from '@/data/templates';
import TemplateDetailClient from '@/components/TemplateDetailClient';
import type { Metadata } from 'next';

interface TemplatePageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return templates.map((template) => ({
    slug: template.slug,
  }));
}

export async function generateMetadata({ params }: TemplatePageProps): Promise<Metadata> {
  const template = templates.find((t) => t.slug === params.slug);

  if (!template) {
    return {
      title: 'Plantilla no encontrada',
    };
  }

  return {
    title: `${template.name} - Plantilla para Restaurante | Web Dynamics`,
    description: template.description,
    openGraph: {
      title: template.name,
      description: template.description,
      images: [template.image],
    },
  };
}

export default function TemplatePage({ params }: TemplatePageProps) {
  const template = templates.find((t) => t.slug === params.slug);

  if (!template) {
    notFound();
  }

  return <TemplateDetailClient template={template} />;
}

import { notFound } from 'next/navigation';
import { templates } from '@/data/templates';
import TemplateDetailClient from '@/components/TemplateDetailClient';
import type { Metadata } from 'next';

interface TemplatePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return templates.map((template) => ({
    slug: template.slug,
  }));
}

export async function generateMetadata({ params }: TemplatePageProps): Promise<Metadata> {
  const { slug } = await params;
  const template = templates.find((t) => t.slug === slug);

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

export default async function TemplatePage({ params }: TemplatePageProps) {
  const { slug } = await params;
  const template = templates.find((t) => t.slug === slug);

  if (!template) {
    notFound();
  }

  return <TemplateDetailClient template={template} />;
}

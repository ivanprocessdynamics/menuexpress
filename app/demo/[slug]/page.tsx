import { notFound } from 'next/navigation';
import { templates } from '@/data/templates';
import DemoSiteClient from '@/components/DemoSiteClient';
import type { Metadata } from 'next';

interface DemoPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return templates.map((template) => ({
    slug: template.slug,
  }));
}

export async function generateMetadata({ params }: DemoPageProps): Promise<Metadata> {
  const { slug } = await params;
  const template = templates.find((t) => t.slug === slug);

  if (!template) {
    return {
      title: 'Demo no encontrada',
    };
  }

  return {
    title: `Demo ${template.name} - Restaurante | Menu Express`,
    description: `Vista previa demo de sitio web para ${template.name}`,
    robots: {
      index: false,
      follow: false,
    },
  };
}

export default async function DemoPage({ params }: DemoPageProps) {
  const { slug } = await params;
  const template = templates.find((t) => t.slug === slug);

  if (!template) {
    notFound();
  }

  return <DemoSiteClient template={template} />;
}

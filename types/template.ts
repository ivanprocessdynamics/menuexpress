export interface Template {
  id: string;
  slug: string;
  name: string;
  category: string;
  description: string;
  image: string;
  badge?: 'popular' | 'nuevo';
  features: string[];
  colorScheme: {
    primary: string;
    secondary: string;
    accent: string;
  };
  price?: string;
  demoUrl?: string;
}

export interface TemplateCategory {
  id: string;
  name: string;
  slug: string;
}

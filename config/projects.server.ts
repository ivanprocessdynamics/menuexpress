import 'server-only';

import type { ProjectClientConfig } from '@/types/projects';

export type ProjectDefinition = {
  id: string;
  name: string;
  sheetWebhookEnv: string;
  cloudNameEnv?: string;
  uploadPresetEnv?: string;
};

const projectDefinitions: ProjectDefinition[] = [
  {
    id: 'demo-restaurante',
    name: 'Restaurante Demo',
    sheetWebhookEnv: 'WEBHOOK_DEMO',
    cloudNameEnv: 'CLOUDINARY_CLOUD_NAME_DEMO',
    uploadPresetEnv: 'CLOUDINARY_UPLOAD_PRESET_DEMO',
  },
];

const parsedAdminEmails = (process.env.ADMIN_EMAILS ?? '')
  .split(',')
  .map((email) => email.trim().toLowerCase())
  .filter(Boolean);

export const adminEmails =
  parsedAdminEmails.length > 0
    ? parsedAdminEmails
    : ['cezarvalentinivan@gmail.com', 'plorenzopizzaro@gmail.com'];

export const ownerProjectAccess: Record<string, string> = {
  'propietario@ejemplo.com': 'demo-restaurante',
  'ivan@processdynamics.tech': 'demo-restaurante',
};

type Nullable<T> = T | null;

type EnvLookup = (name?: string, fallbackEnv?: string) => string | undefined;

const readEnv: EnvLookup = (name, fallbackEnv) => {
  if (name && process.env[name]) {
    return process.env[name];
  }
  if (fallbackEnv && process.env[fallbackEnv]) {
    return process.env[fallbackEnv];
  }
  return undefined;
};

export type ResolvedProjectConfig = {
  id: string;
  name: string;
  sheetWebhook: string;
  cloudName: string;
  uploadPreset: string;
};

export function getProjectConfig(projectId: string): Nullable<ResolvedProjectConfig> {
  const definition = projectDefinitions.find((p) => p.id === projectId);
  if (!definition) {
    return null;
  }

  const sheetWebhook = readEnv(definition.sheetWebhookEnv) ?? '';
  const cloudName =
    readEnv(definition.cloudNameEnv, 'VITE_CLOUDINARY_CLOUD_NAME') ?? '';
  const uploadPreset =
    readEnv(definition.uploadPresetEnv, 'VITE_CLOUDINARY_UPLOAD_PRESET') ?? '';

  if (!sheetWebhook) {
    console.warn(
      `[projects] Falta la variable ${definition.sheetWebhookEnv} para el proyecto ${definition.id}`
    );
  }

  return {
    id: definition.id,
    name: definition.name,
    sheetWebhook,
    cloudName,
    uploadPreset,
  };
}

export function getClientProjectConfig(
  projectId: string
): Nullable<ProjectClientConfig> {
  const resolved = getProjectConfig(projectId);
  if (!resolved) return null;
  return {
    id: resolved.id,
    name: resolved.name,
    cloudName: resolved.cloudName,
    uploadPreset: resolved.uploadPreset,
    hasWebhook: Boolean(resolved.sheetWebhook),
  };
}

export function getClientProjects(projectIds: string[]): ProjectClientConfig[] {
  return projectIds
    .map((id) => getClientProjectConfig(id))
    .filter((p): p is ProjectClientConfig => Boolean(p));
}

export function getAllProjectConfigs(): ResolvedProjectConfig[] {
  return projectDefinitions
    .map((project) => getProjectConfig(project.id))
    .filter((p): p is ResolvedProjectConfig => Boolean(p));
}

export function getProjectIdsForEmail(email: string): string[] {
  const normalized = email.toLowerCase();
  if (adminEmails.includes(normalized)) {
    return projectDefinitions.map((p) => p.id);
  }
  const projectId = ownerProjectAccess[normalized];
  return projectId ? [projectId] : [];
}

export function isAdminEmail(email: string): boolean {
  return adminEmails.includes(email.toLowerCase());
}

export function getProjectSecret(projectId: string): Nullable<ResolvedProjectConfig> {
  return getProjectConfig(projectId);
}

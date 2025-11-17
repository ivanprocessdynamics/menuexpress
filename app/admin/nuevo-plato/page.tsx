import Link from 'next/link';
import { redirect } from 'next/navigation';
import AddDishForm from '@/components/AddDishForm';
import EditDishesSection from '@/components/EditDishesSection';
import { auth } from '@/auth';
import {
  getClientProjects,
  getProjectConfig,
  getProjectIdsForEmail,
  isAdminEmail,
} from '@/config/projects.server';

type SearchParamsInput =
  | Promise<Record<string, string | string[] | undefined>>
  | Record<string, string | string[] | undefined>
  | undefined;

const CALLBACK_URL = '/admin/nuevo-plato';

export default async function NewDishPage({ searchParams }: { searchParams?: SearchParamsInput }) {
  const resolvedSearchParams = searchParams ? await Promise.resolve(searchParams) : {};
  const rawProjectId = resolvedSearchParams.projectId;
  const selectedProjectId = Array.isArray(rawProjectId) ? rawProjectId[0] : rawProjectId;
  const session = await auth();
  const signInUrl = `/api/auth/signin?callbackUrl=${encodeURIComponent(CALLBACK_URL)}`;
  const signOutUrl = `/api/auth/signout?callbackUrl=${encodeURIComponent(CALLBACK_URL)}`;

  if (!session?.user?.email) {
    return <AuthRequiredView signInUrl={signInUrl} />;
  }

  const email = session.user.email.toLowerCase();
  const accessibleProjectIds = getProjectIdsForEmail(email);

  if (accessibleProjectIds.length === 0) {
    return <NoProjectsView email={session.user.email} signOutUrl={signOutUrl} />;
  }

  const isAdmin = isAdminEmail(email);

  if (!selectedProjectId) {
    if (accessibleProjectIds.length === 1) {
      redirect(`${CALLBACK_URL}?projectId=${accessibleProjectIds[0]}`);
    }

    const projects = getClientProjects(accessibleProjectIds);
    return (
      <ProjectSelectionView
        projects={projects}
        userName={session.user.name ?? session.user.email}
        signOutUrl={signOutUrl}
      />
    );
  }

  if (!accessibleProjectIds.includes(selectedProjectId)) {
    return (
      <UnauthorizedProjectView
        requestedId={selectedProjectId}
        signOutUrl={signOutUrl}
        homeUrl={CALLBACK_URL}
      />
    );
  }

  const project = getProjectConfig(selectedProjectId);

  if (!project) {
    return <MissingProjectConfigView projectId={selectedProjectId} signOutUrl={signOutUrl} />;
  }

  const hasWebhook = Boolean(project.sheetWebhook);

  return (
    <main className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-8">
      <header className="flex flex-col gap-4 rounded-xl border border-gray-200 bg-white p-4 shadow-sm md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm font-medium text-gray-500">Conectado como</p>
          <p className="text-lg font-semibold text-gray-900">{session.user.name ?? session.user.email}</p>
          <p className="text-sm text-gray-500">
            {isAdmin ? 'Administrador · puedes gestionar todos los proyectos' : 'Propietario de restaurante'}
          </p>
        </div>
        <div className="flex flex-col gap-2 text-sm text-gray-600 md:text-right">
          <div>
            <span className="font-semibold text-gray-900">Proyecto seleccionado:</span> {project.name}
          </div>
          <div className="flex flex-wrap items-center gap-3">
            {isAdmin && (
              <Link
                href={CALLBACK_URL}
                className="rounded-full border border-gray-300 px-3 py-1 text-xs font-medium text-gray-700 hover:bg-gray-100"
              >
                Cambiar de proyecto
              </Link>
            )}
            <a
              href={signOutUrl}
              className="rounded-full bg-gray-900 px-4 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-800"
            >
              Cerrar sesión
            </a>
          </div>
        </div>
      </header>

      <section className="max-w-2xl">
        <h1 className="mb-4 text-2xl font-bold">Añadir nuevo plato</h1>
        <p className="mb-4 text-sm text-gray-600">
          Sube una foto desde tu móvil y rellena los datos. Al enviar, se generará la URL y se mandará al
          webhook del proyecto (o se mostrará el JSON para copiarlo manualmente).
        </p>
        <AddDishForm
          projectId={project.id}
          projectName={project.name}
          cloudName={project.cloudName}
          uploadPreset={project.uploadPreset}
          hasWebhook={hasWebhook}
        />
      </section>

      <EditDishesSection
        projectId={project.id}
        projectName={project.name}
        cloudName={project.cloudName}
        uploadPreset={project.uploadPreset}
        hasWebhook={hasWebhook}
      />
    </main>
  );
}

function AuthRequiredView({ signInUrl }: { signInUrl: string }) {
  return (
    <main className="mx-auto flex min-h-[60vh] max-w-2xl flex-col items-center justify-center gap-4 px-4 text-center">
      <h1 className="text-2xl font-semibold text-gray-900">Acceso restringido</h1>
      <p className="text-gray-600">
        Inicia sesión con Google para gestionar los menús de tus restaurantes.
      </p>
      <a
        href={signInUrl}
        className="rounded-full bg-primary-600 px-6 py-2 text-sm font-semibold text-white shadow hover:bg-primary-700"
      >
        Iniciar sesión con Google
      </a>
    </main>
  );
}

function NoProjectsView({ email, signOutUrl }: { email: string; signOutUrl: string }) {
  return (
    <main className="mx-auto flex min-h-[60vh] max-w-2xl flex-col items-center justify-center gap-4 px-4 text-center">
      <h1 className="text-2xl font-semibold text-gray-900">No tienes proyectos asignados</h1>
      <p className="text-gray-600">
        El correo <span className="font-semibold">{email}</span> no tiene acceso a ningún menú todavía. Contacta
        con soporte para que te den permisos.
      </p>
      <a
        href={signOutUrl}
        className="rounded-full bg-gray-900 px-5 py-2 text-sm font-semibold text-white shadow hover:bg-gray-800"
      >
        Cerrar sesión
      </a>
    </main>
  );
}

function ProjectSelectionView({
  projects,
  userName,
  signOutUrl,
}: {
  projects: ReturnType<typeof getClientProjects>;
  userName: string;
  signOutUrl: string;
}) {
  return (
    <main className="mx-auto flex min-h-[60vh] max-w-4xl flex-col gap-6 px-4 py-8">
      <div className="flex flex-col gap-2 text-center">
        <h1 className="text-2xl font-semibold text-gray-900">Hola, {userName}</h1>
        <p className="text-gray-600">Selecciona el proyecto que quieres gestionar.</p>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {projects.map((project) => (
          <Link
            key={project.id}
            href={`${CALLBACK_URL}?projectId=${project.id}`}
            className="rounded-2xl border border-gray-200 bg-white p-5 shadow hover:border-primary-300 hover:shadow-lg"
          >
            <div className="mb-3 flex items-center justify-between">
              <h2 className="text-lg font-semibold text-gray-900">{project.name}</h2>
              <span className="rounded-full bg-primary-50 px-3 py-1 text-xs font-semibold text-primary-700">
                {project.hasWebhook ? 'Webhook listo' : 'Pendiente' }
              </span>
            </div>
            <p className="text-sm text-gray-600">Haz clic para abrir el panel de edición.</p>
          </Link>
        ))}
      </div>
      <div className="text-center">
        <a
          href={signOutUrl}
          className="inline-flex items-center justify-center rounded-full bg-gray-200 px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-300"
        >
          Cerrar sesión
        </a>
      </div>
    </main>
  );
}

function UnauthorizedProjectView({
  requestedId,
  signOutUrl,
  homeUrl,
}: {
  requestedId: string;
  signOutUrl: string;
  homeUrl: string;
}) {
  return (
    <main className="mx-auto flex min-h-[60vh] max-w-2xl flex-col items-center justify-center gap-4 px-4 text-center">
      <h1 className="text-2xl font-semibold text-gray-900">Proyecto no autorizado</h1>
      <p className="text-gray-600">
        No tienes permisos para acceder al proyecto <strong>{requestedId}</strong>.
      </p>
      <div className="flex flex-wrap items-center justify-center gap-3">
        <Link
          href={homeUrl}
          className="rounded-full bg-primary-600 px-5 py-2 text-sm font-semibold text-white hover:bg-primary-700"
        >
          Volver a mis proyectos
        </Link>
        <a
          href={signOutUrl}
          className="rounded-full bg-gray-200 px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-300"
        >
          Cerrar sesión
        </a>
      </div>
    </main>
  );
}

function MissingProjectConfigView({
  projectId,
  signOutUrl,
}: {
  projectId: string;
  signOutUrl: string;
}) {
  return (
    <main className="mx-auto flex min-h-[60vh] max-w-2xl flex-col items-center justify-center gap-4 px-4 text-center">
      <h1 className="text-2xl font-semibold text-gray-900">Configuración incompleta</h1>
      <p className="text-gray-600">
        No se encontró la configuración del proyecto <strong>{projectId}</strong>. Revisa las variables de
        entorno en Vercel/Local.
      </p>
      <a
        href={signOutUrl}
        className="rounded-full bg-gray-200 px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-300"
      >
        Cerrar sesión
      </a>
    </main>
  );
}

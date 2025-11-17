import { NextRequest, NextResponse } from 'next/server';
import { getProjectSecret } from '@/config/projects.server';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const projectId = body?.projectId;
    const dish = body?.dish;

    if (!projectId || !dish) {
      return NextResponse.json(
        { ok: false, error: 'Faltan projectId o dish en la petición.' },
        { status: 400 }
      );
    }

    const project = getProjectSecret(projectId);

    if (!project?.sheetWebhook) {
      return NextResponse.json(
        {
          ok: false,
          error: `No hay webhook configurado para el proyecto ${projectId}.`,
        },
        { status: 400 }
      );
    }

    const res = await fetch(project.sheetWebhook, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ action: 'update', dish }),
    });

    const text = await res.text().catch(() => '');

    if (!res.ok) {
      return NextResponse.json(
        {
          ok: false,
          error: 'Error al actualizar plato en Google Sheets',
          status: res.status,
          statusText: res.statusText,
          body: text || null,
        },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true, upstreamBody: text || null });
  } catch (error) {
    console.error('[API platos/update] Error', error);
    return NextResponse.json(
      { ok: false, error: String(error) },
      { status: 500 }
    );
  }
}

import { NextRequest, NextResponse } from 'next/server';
import { getProjectSecret } from '@/config/projects.server';

export async function GET(request: NextRequest) {
  try {
    const projectId = request.nextUrl.searchParams.get('projectId');

    if (!projectId) {
      return NextResponse.json(
        { ok: false, error: 'Falta el parámetro projectId.' },
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

    const webhookUrl = project.sheetWebhook;

    const url = webhookUrl.includes('?')
      ? `${webhookUrl}&mode=list`
      : `${webhookUrl}?mode=list`;

    const res = await fetch(url, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
      },
      cache: 'no-store',
    });

    const text = await res.text();

    if (!res.ok) {
      return NextResponse.json(
        {
          ok: false,
          error: 'Error al obtener platos desde Google Sheets',
          status: res.status,
          statusText: res.statusText,
          body: text || null,
        },
        { status: 502 }
      );
    }

    let data: unknown;
    try {
      data = text ? JSON.parse(text) : null;
    } catch (error) {
      return NextResponse.json(
        {
          ok: false,
          error: 'Respuesta no válida del webhook (no es JSON)',
          raw: text,
        },
        { status: 502 }
      );
    }

    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.error('[API platos/list] Error', error);
    return NextResponse.json(
      { ok: false, error: String(error) },
      { status: 500 }
    );
  }
}

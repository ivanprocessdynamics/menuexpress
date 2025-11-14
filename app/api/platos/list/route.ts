import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const webhookUrl = process.env.VITE_NEW_DISH_WEBHOOK_URL;

    if (!webhookUrl || !webhookUrl.trim()) {
      return NextResponse.json(
        { ok: false, error: 'Webhook de Google Sheets no configurado (VITE_NEW_DISH_WEBHOOK_URL)' },
        { status: 400 }
      );
    }

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

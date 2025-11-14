import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const webhookUrl = process.env.VITE_NEW_DISH_WEBHOOK_URL;

    if (!webhookUrl || !webhookUrl.trim()) {
      return NextResponse.json(
        { ok: false, error: 'Webhook de Google Sheets no configurado (VITE_NEW_DISH_WEBHOOK_URL)' },
        { status: 400 }
      );
    }

    const dish = await req.json();

    const res = await fetch(webhookUrl, {
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

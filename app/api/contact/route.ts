import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Envío directo utilizando la API de Web3Forms
    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        access_key: process.env.WEB3FORMS_ACCESS_KEY || '5b3d6f1a-8c2e-4a9b-9c7f-0e1d2c3b4a5e',
        subject: `Nuevo mensaje de contacto en Portafolio - ${name}`,
        from_name: name,
        email: email,
        message: message,
        to_email: 'victorbergamino1@gmail.com',
      }),
    });

    const result = await res.json();

    return NextResponse.json({ success: true, result });
  } catch (error) {
    console.error('Contact API Error:', error);
    return NextResponse.json(
      { success: false, error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}

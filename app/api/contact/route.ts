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

    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        access_key: 'a942f179-dcc1-480f-9efa-f5ad4e85208a',
        subject: `Nuevo mensaje de contacto en Portafolio - ${name}`,
        from_name: name,
        email: email,
        message: message,
        to_email: 'victorbergamino1@gmail.com',
      }),
    });

    const result = await res.json();

    return NextResponse.json(result);
  } catch (error) {
    console.error('Contact API Error:', error);
    return NextResponse.json(
      { success: false, error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}

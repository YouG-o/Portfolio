
import { NextResponse } from 'next/server';
import fetch from 'node-fetch';
import https from 'https';

const API_URL = process.env.API_URL;

const agent = process.env.NODE_ENV === 'development' ? new https.Agent({ rejectUnauthorized: false }) : undefined;

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const response = await fetch(`${API_URL}/api/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
      agent,
    });

    if (!response.ok) {
      throw new Error('Failed to send contact form');
    }

    const responseData = await response.json();
    return NextResponse.json(responseData);
  } catch (error) {
    console.error('Error sending contact form:', error);
    return NextResponse.json({ error: 'Failed to send contact form' }, { status: 500 });
  }
}

import { NextResponse } from 'next/server';
import fetch from 'node-fetch';
import https from 'https';

const API_URL = process.env.API_URL;

const agent = process.env.NODE_ENV === 'development' ? new https.Agent({ rejectUnauthorized: false }) : undefined;

export async function GET() {
  try {
    const response = await fetch(`${API_URL}/api/projects`, { agent });
    if (!response.ok) {
      throw new Error(`Failed to fetch projects: ${response.statusText}`);
    }
    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching projects:', error);
    return NextResponse.json({ error: 'Failed to fetch projects' }, { status: 500 });
  }
}
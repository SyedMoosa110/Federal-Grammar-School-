import { NextResponse } from 'next/server';
import { INITIAL_NOTICES, Notice } from '@/lib/school-data';

let serverNotices: Notice[] = [...INITIAL_NOTICES];

export async function GET() {
  return NextResponse.json({
    success: true,
    count: serverNotices.length,
    data: serverNotices
  });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { title, category, content } = body;

    if (!title || !category || !content) {
      return NextResponse.json(
        { success: false, message: 'Title, category, and content are required.' },
        { status: 400 }
      );
    }

    const now = new Date();
    const dateStr = now.toLocaleDateString('en-PK', { year: 'numeric', month: 'long', day: 'numeric' });

    const newNotice: Notice = {
      id: 'not-' + Date.now().toString().slice(-5),
      title,
      category,
      date: body.date || dateStr,
      content,
      priority: body.priority || 'Normal',
      isActive: body.isActive !== undefined ? body.isActive : true
    };

    serverNotices = [newNotice, ...serverNotices];

    return NextResponse.json({
      success: true,
      message: 'Notice published successfully.',
      data: newNotice
    }, { status: 201 });
  } catch {
    return NextResponse.json(
      { success: false, message: 'Failed to publish notice.' },
      { status: 500 }
    );
  }
}

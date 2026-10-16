import { NextResponse } from 'next/server';
import { INITIAL_GALLERY, GalleryItem } from '@/lib/school-data';

let serverGallery: GalleryItem[] = [...INITIAL_GALLERY];

export async function GET() {
  return NextResponse.json({
    success: true,
    count: serverGallery.length,
    data: serverGallery
  });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { title, category, imageUrl, description } = body;

    if (!title || !category || !imageUrl) {
      return NextResponse.json(
        { success: false, message: 'Title, category, and image URL are required.' },
        { status: 400 }
      );
    }

    const newPhoto: GalleryItem = {
      id: 'gal-' + Date.now().toString().slice(-5),
      title,
      category,
      imageUrl,
      date: body.date || 'Recent Event 2026',
      description: description || ''
    };

    serverGallery = [newPhoto, ...serverGallery];

    return NextResponse.json({
      success: true,
      message: 'Photo uploaded to school gallery successfully.',
      data: newPhoto
    }, { status: 201 });
  } catch {
    return NextResponse.json(
      { success: false, message: 'Failed to upload photo.' },
      { status: 500 }
    );
  }
}

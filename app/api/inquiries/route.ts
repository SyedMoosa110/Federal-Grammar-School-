import { NextResponse } from 'next/server';
import { INITIAL_INQUIRIES, Inquiry } from '@/lib/school-data';

// In-memory fallback
let serverInquiries: Inquiry[] = [...INITIAL_INQUIRIES];

export async function GET() {
  return NextResponse.json({
    success: true,
    count: serverInquiries.length,
    data: serverInquiries
  });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { studentName, fatherName, contactNumber, selectedClass } = body;

    if (!studentName || !fatherName || !contactNumber || !selectedClass) {
      return NextResponse.json(
        { success: false, message: 'Please provide all mandatory fields: Student Name, Father Name, Phone Number, and Class.' },
        { status: 400 }
      );
    }

    const now = new Date();
    const dateStr = now.toLocaleDateString('en-PK', { year: 'numeric', month: 'short', day: 'numeric' }) +
      ' ' + now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });

    const newInquiry: Inquiry = {
      id: 'inq-' + Date.now().toString().slice(-5),
      studentName,
      fatherName,
      contactNumber,
      email: body.email || '',
      selectedClass,
      previousSchool: body.previousSchool || '',
      gender: body.gender || 'Male',
      address: body.address || '',
      message: body.message || '',
      status: 'Pending',
      submittedAt: dateStr,
      notes: 'Submitted via Online Website Portal'
    };

    serverInquiries = [newInquiry, ...serverInquiries];

    return NextResponse.json({
      success: true,
      message: 'Admission inquiry submitted successfully. The school administration will contact you shortly.',
      data: newInquiry
    }, { status: 201 });
  } catch {
    return NextResponse.json(
      { success: false, message: 'Failed to process inquiry submission.' },
      { status: 500 }
    );
  }
}

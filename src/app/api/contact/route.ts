import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(request: Request) {
    const { name, email, subject, message } = await request.json();

    // Validate the request data
    if (!name || !email || !subject || !message) {
        return NextResponse.json({ error: 'Semua field harus diisi' }, { status: 400 });
    }

    try {
        const contact = await prisma.contact.create({
            data: {
                name,
                email,
                subject,
                message
            }
        });
        return NextResponse.json(contact, { status: 200 });
    } catch (error) {
        console.error('Error creating contact:', error);
        return NextResponse.json({ error: 'Terjadi kesalahan pada server' }, { status: 500 });
    } finally {
        await prisma.$disconnect();
    }
}

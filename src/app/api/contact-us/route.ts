// Backend code (e.g., in a file like /pages/api/contact-us.ts)
import { NextRequest, NextResponse } from "next/server";
import { ContactForm } from "@/lib/db/schema";
import { db } from "@/lib/db";

export async function POST(req: NextRequest , res: NextResponse){
  try {
    const body = await req.json();
    const { name, email, message } = body
    const insertedData = await db
      .insert(ContactForm)
      .values({
        name,
        email,
        message,
      });
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error saving data:', error);
    return NextResponse.json({ error: 'Failed to save data' }, { status: 500 });
  }
}

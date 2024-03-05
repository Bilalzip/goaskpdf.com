import { db } from "@/lib/db";
import { messages } from "@/lib/db/schema";
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
  try {
    const { chatId } = await req.json();
    if(!chatId){
      throw new Error('Invalid ChatId')
    }
   await db
      .delete(messages)
      .where(eq(messages.chatId, chatId));
    return NextResponse.json({ success: true, message: "Messages deleted successfully" });
  } catch (error) {
    return NextResponse.json(error);
  }
};

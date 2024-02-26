import { loadS3IntoPinecone } from "@/lib/Pineconedb";
import { getS3Url } from "@/lib/UploadFile";
import { db } from "@/lib/db";
import { chats } from "@/lib/db/schema";
import { auth } from "@clerk/nextjs";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest , res: NextResponse){
    const { userId } = await auth();
    if (!userId) {
      return NextResponse.json({ error: "unauthorized" }, { status: 401 });
    }
  try {
    const body = await req.json();
    const { file_key, file_name } = body;
    console.log(file_key, file_name);
   const res = await loadS3IntoPinecone(file_key);
   const chat_id = await db
   .insert(chats)
   .values({
     fileKey: file_key,
     pdfName: file_name,
     pdfUrl: getS3Url(file_key),
     userId,
   })
   .returning({
     insertedId: chats.id,
   });

   return NextResponse.json({  chat_id: chat_id[0].insertedId,});
  
  } catch (error) {
    console.log(error)
    return NextResponse.json({ error});
  }
  
}
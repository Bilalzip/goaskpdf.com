import React from 'react'
import FileUpload from './FileUpload'
import { auth } from '@clerk/nextjs';
import { Upload } from 'lucide-react';
import { Button } from './ui/button';
import Link from 'next/link';
import { db } from '@/lib/db';
import { chats } from '@/lib/db/schema';
import { eq } from 'drizzle-orm';
import { checkSubscription } from '@/lib/Subscription';
import TextAnimation from './TextAnimation';

const Homecomp = async () => {
    const {userId}:any  = await auth();
    const Isauth = !!userId;
    const limit = await db.select().from(chats).where(eq(chats.userId, userId));
    let filecount = 0;
    for (let i = 0; i <limit.length; i++) {

     if ( limit[i].pdfName  !== undefined){
      filecount++;
     }
    }
    const isPro = await checkSubscription();
    return ( 
    <div className='flex  mx-auto h-screen justify-center items-center'>
      <div>
        <div className='flex flex-col items-center justify-center'>
        <TextAnimation text = 'Chat With Pdf'/>
          <div className="upload mt-4">
            {Isauth ? (<FileUpload filecount = {filecount} isPro = {isPro} />) :
            (
         <div className=''>
          <Link className='flex flex-row items-center justify-center gap-2' href={'/sign-in'}>
          <Button  className='text-white'>
                  Upload Pdf
                </Button> <Upload/>
          </Link>
         </div>
          
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Homecomp

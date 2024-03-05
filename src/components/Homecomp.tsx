import React from 'react'
import FileUpload from './FileUpload'
import { auth } from '@clerk/nextjs';
import { LogIn } from 'lucide-react';
import { Button } from './ui/button';
import Link from 'next/link';
import { db } from '@/lib/db';
import { chats } from '@/lib/db/schema';
import { eq } from 'drizzle-orm';
import { checkSubscription } from '@/lib/Subscription';

const Homecomp = async () => {
    const {userId}:any  = await auth();
    const Isauth = !!userId;
    const limit = await db.select().from(chats).where(eq(chats.userId, userId));
    console.log(limit)

    // logic for restricting file upload 

    let filecount = 0;
    for (let i = 0; i <limit.length; i++) {

     if ( limit[i].pdfName  !== undefined){
      filecount++;
     }
    }

    const isPro = await checkSubscription();

    console.log(filecount)
    return ( 
    <div className='flex  mx-auto h-screen justify-center items-center'>
      <div>
        <div className='flex flex-col items-center justify-center'>
        <h2 className="text-black scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 ">
      Talk to your Pdf
    </h2>
          <div className="upload mt-4">
            {Isauth ? (<FileUpload filecount = {filecount} isPro = {isPro} />) :
            
            (
         <div className=''>
          <Link className='flex flex-row items-center justify-center gap-2' href={'/sign-in'}>
          <Button  className='text-white'>
                  Login to get Started
                </Button> <LogIn/>
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

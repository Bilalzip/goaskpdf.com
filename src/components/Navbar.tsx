import React from 'react'
import { Button } from './ui/button'
import { UserButton, auth } from '@clerk/nextjs'
import { User } from '@clerk/nextjs/server';
import { db } from '@/lib/db';
import { chats } from '@/lib/db/schema';
import { eq } from 'drizzle-orm';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const Navbar = async () => {
    const {userId} = await auth();
    const Isauth = !!userId;
    let firstChat;
    if (userId) {
      firstChat = await db.select().from(chats).where(eq(chats.userId, userId));
      if (firstChat) {
        firstChat = firstChat[0];
      }
    }
  return (
    <div className='rounded-md flex justify-between items-center flex-col md:flex-row p-4 m-1 bg-gray-800 text-white font-semibold '>
      <div className="logo text-2xl">GoAskPdf.com</div>
      <div className="menus ">
    <ul className=' font-serif flex flex-col md:flex-row justify-center items-center gap-2 '>
    {Isauth && firstChat && (
              <>
                <Link href={`/chat/${firstChat.id}`}>
                  <Button>
                    Go to Chats <ArrowRight className="ml-2" />
                  </Button>
                </Link>
              </>
            )}
    </ul>
      </div>
    </div>
  )
}

export default Navbar

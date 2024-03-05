import React, { useState } from 'react'
import { Button } from './ui/button'
import { UserButton, auth } from '@clerk/nextjs'
import { User } from '@clerk/nextjs/server';
import { db } from '@/lib/db';
import { chats } from '@/lib/db/schema';
import { eq } from 'drizzle-orm';
import Link from 'next/link';
import { ArrowRight, Cross, Menu } from 'lucide-react';
import axios from 'axios';
import UpgradeButton from './UpgradeButton';
import { checkSubscription } from '@/lib/Subscription';

const Navbar = async () => {
  const isPro = await checkSubscription();
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
    <div className='rounded-md flex md:justify-between md:items-center md:flex-row flex-col p-4 m-1 bg-gray-800 text-white font-semibold justify-start items-start'>
      <div className="logo text-2xl">GoAskPdf.com</div>
      <div className="menus ">
    <ul className='font-serif flex flex-col md:flex-row justify-center items-center gap-4 md:gap-3 mt-2 '>
           <UpgradeButton isPro = {isPro}/>
    {Isauth && firstChat && (
               <>
               <Link href={`/chat/${firstChat.id}`}>
                   <li className="relative inline-flex items-center justify-center px-4 py-2 overflow-hidden font-bold text-white rounded-md shadow-2xl group">
                       <span className="absolute inset-0 w-full h-full transition duration-300 ease-out opacity-0 bg-gradient-to-br from-pink-600 via-purple-700 to-blue-400 group-hover:opacity-100"></span>
                       <span className="absolute top-0 left-0 w-full bg-gradient-to-b from-white to-transparent opacity-5 h-1/3"></span>
                       <span className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-white to-transparent opacity-5"></span>
                       <span className="absolute bottom-0 left-0 w-4 h-full bg-gradient-to-r from-white to-transparent opacity-5"></span>
                       <span className="absolute bottom-0 right-0 w-4 h-full bg-gradient-to-l from-white to-transparent opacity-5"></span>
                       <span className="absolute inset-0 w-full h-full border border-white rounded-md opacity-10"></span>
                       <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-5"></span>
                       <span className="relative flex flex-row">Chats <ArrowRight className="ml-2" /></span>
                   </li>
               </Link>
           </>
            )}
    </ul>
      </div>
    </div>
  )
}

export default Navbar




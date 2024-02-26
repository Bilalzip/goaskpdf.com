"use client"
import { DrizzleChat } from '@/lib/db/schema';
import React, { useState } from 'react'
import { Button } from './ui/button';
import Link from 'next/link';
import { Menu, MessageCircle, PlusCircle, ToggleLeftIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import axios from 'axios';
type Props = {
    chats: DrizzleChat[];
    chatId: number;
    isPro: boolean;
  };
const ChatSideBar = ({ chats, chatId }: Props) => {
  const [width , setWidth] = useState(false)
  const HandleWidth = () =>{
    setWidth(!width)
  }
  return (
    <div className={` ${width ? "w-fit ease-out duration-1000 " : "w-fit"} rounded-r-sm text-gray-200 bg-gray-900`}>
      <button onClick={HandleWidth} className='flex justify-center items-center'> 
      <Menu className='ml-4 m-2' size={'30'}/>
      </button>
      <div className="flex h-screen flex-col p-4">
        {chats.map((chat) => (
          <Link key={chat.id} href={`/chat/${chat.id}`}>
            <div
              className={cn("rounded-lg p-3 text-slate-300 flex items-center", {
                "bg-blue-600 text-white": chat.id === chatId,
                "hover:text-white": chat.id !== chatId,
              })}
            >
            {
              width ? (<MessageCircle/>) : (
                <div className='flex flex-row gap-2'>
                  <MessageCircle/> 
                <p>
                    {chat.pdfName}
                </p>
                </div>
                
              )
            }
            </div>
          </Link>
        ))}
      </div>
  </div>
  )
}

export default ChatSideBar

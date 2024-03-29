"use client";
import React from "react";
import { Input } from "./ui/input";
import { useChat } from "ai/react";
import { Button } from "./ui/button";
import { Send ,Eraser, Divide } from "lucide-react";
import MessageList from "./MessageList";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Message } from "ai";

type Props = { chatId: number };

const ChatComponent = ({ chatId }: Props) => {
  const { data, isLoading } = useQuery({
    queryKey: ["chat", chatId],
    queryFn: async () => {
      const response = await axios.post<Message[]>("/api/get-messages", {
        chatId,
      });
      return response.data;
    },
  });

  const { input, handleInputChange, handleSubmit, messages } = useChat({
    api: "/api/chat",
    body: {
      chatId,
    },
    initialMessages: data || [],
  });
  React.useEffect(() => {
    const messageContainer = document.getElementById("message-container");
    if (messageContainer) {
      messageContainer.scrollTo({
        top: messageContainer.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [messages]);  

  const HandleClear = async (chatId:number)=>{
    try {
      const res = await axios.post('/api/wipe-message', {chatId:chatId});
    } catch (error) {
    }
  }
  return (
    <div className="h-screen flex flex-col justify-between w-full md:p-8">
    <div className="md:sticky top-2 inset-x-0 p-2 bg-white h-fit">
      <h3 className="text-xl font-bold">Chat</h3>
    </div>
 
    <MessageList messages={messages} isLoading={isLoading} />
   
   <form onSubmit={handleSubmit} className="bg-white md:ml-[35%] sticky top-10 bottom-0">
  <div className={`flex flex-row gap-2 md:gap-4`}>
    {messages.length > 2 ? (
      <div onClick={() => HandleClear(chatId)} className="bg-blue-600 rounded-md flex items-center w-fit">
        <Eraser className="h-3 w-10 md:h-10 md:w-12 md:p-1 p-0" />
      </div>
    ) : (
      <></>
    )}
    <Input
      value={input}
      onChange={handleInputChange}
      placeholder="Ask any question..."
      className="col-span-2 w-fit"
    />
    <Button className="bg-blue-600 w-fit">
      <Send className="h-2 w-2 md:h-4 md:w-4" />
    </Button>
  </div>
</form>
  </div>
  );
};

export default ChatComponent;

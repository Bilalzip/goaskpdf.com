"use client";
import React from "react";
import { Input } from "./ui/input";
import { useChat } from "ai/react";
import { Button } from "./ui/button";
import { Send } from "lucide-react";
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
  return (
    <div className="h-screen flex flex-col justify-between w-fit">
    <div className="md:sticky top-2 inset-x-0 p-2 bg-white h-fit">
      <h3 className="text-xl font-bold">Chat</h3>
    </div>
    <MessageList messages={messages} isLoading={isLoading} />
   
    <form onSubmit={handleSubmit} className="bg-white sticky top-0 bottom-0 flex justify-center items-center">
      <div className="flex items-center">
        <Input
          value={input}
          onChange={handleInputChange}
          placeholder="Ask any question..."
          className=" w-60 md:w-96"
        />
        <Button className="bg-blue-600 ml-2">
          <Send className="h-4 w-4" />
        </Button>
      </div>
    </form>
  </div>
  );
};

export default ChatComponent;

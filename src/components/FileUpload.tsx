"use client"
import React, { useCallback, useState } from 'react'
import {useDropzone} from 'react-dropzone'
import {Inbox , Loader2} from "lucide-react"
import { auth } from '@clerk/nextjs'
import toast from 'react-hot-toast'
import { uploadToS3 } from '@/lib/UploadFile'
import { useMutation } from "@tanstack/react-query";
import axios from 'axios'
import { useRouter } from 'next/navigation'

const FileUpload = () => {

  const [loading , setloading] = useState<any>(false)

 const router = useRouter();
  // for performing api request using react query 

  const {mutate } = useMutation({
    mutationFn : async ({
      file_key,
      file_name,
    }: {
      file_key: string;
      file_name: string;
    }) => {


      try {
        const response = await axios.post('/api/create-chat' , {
          file_key,
          file_name,
        })
        setloading(false)
        response.data.chat_id
        router.push(`/chat/${response.data.chat_id}`)
      } catch (error) {
        toast.error("An error has occurred")
        console.log(error)
      }
           
    }
  });
   
   // Uploading the files to s3
    const {getRootProps, getInputProps, isDragActive} = useDropzone({
      accept: { "application/pdf": [".pdf"] },
      maxFiles: 1,

      onDrop: async (acceptedFiles)=>{
             const file = acceptedFiles[0];
             console.log(file)
             setloading(true);
             if (file.size > 10*1024*1024){
              toast.error("Please upload a smaller file")
              return;
             }
               
             try {
              
        const data = await uploadToS3(file);
        console.log("meow", data);
        if (!data?.file_key || !data.file_name) {
          toast.error("Something went wrong");
          return;
        }
        mutate(data, {
          onSuccess: () => {
           
          },
          onError: (err) => {
            console.log(err)
            toast.error("Error creating chat");
            console.error(err);
          },
        });
             } catch (error:any) {
              toast.error(" Couldn't upload" , error);
             }
      }
    })



  return (
    <>
     { !loading ? <div {...getRootProps({
        className:
          "border-dashed border-2 rounded-xl cursor-pointer bg-gray-50 py-8 flex justify-center items-center flex-col",
      })}>
   <input {...getInputProps({})} />
    <div className='flex justify-center items-center flex-col'>
    <Inbox className="w-36 h-10 text-blue-500 md:w-80 md:h-52" />
    <p className="mt-2 text-sm text-slate-400">Drop PDF Here</p>
  </div>
  </div> : (
    <div className='flex flex-col justify-center items-center p-8 md:p-2' >
      <Loader2 className="h-10 w-10 text-blue-500 animate-spin" />
      <p className='text-xl text-black font-mono mt-2'>Get ready for an adventure! We are teleporting you straight to the Chats page! 🚀✨</p>
    </div>
  )}
    </>
  
  )
}

export default FileUpload

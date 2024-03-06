"use client"
import Navbar from '@/components/Navbar';
import axios from 'axios';
import { Loader2 } from 'lucide-react';
import React, { useState } from 'react';

const ContactPage: React.FC = () => {
    const [loading , setloading] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setloading(true)

    try {
      // Send form data to backend
      const response = await axios.post('/api/contact-us', formData);
      console.log('Response:', response.data);
      setloading(false);
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
        setloading(false);
        setFormData({ name: '', email: '', message: '' });
      console.error('Error submitting form:', error);
    }
  };

  return (
    <>
    <div className="bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] min-h-screen flex items-center justify-center md:m-0 m-10">
      <div className="bg-gray-700 p-8 rounded-lg shadow-lg w-full md:w-1/2 lg:w-1/3">
        <h2 className="text-white text-2xl mb-4">Contact Us</h2>
        <form  onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-white">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="bg-gray-700 text-white border-2 border-gray-600 rounded px-4 py-2 w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-white">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="bg-gray-700 text-white border-2 border-gray-600 rounded px-4 py-2 w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-white">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="bg-gray-700 text-white border-2 border-gray-600 rounded px-4 py-2 w-full h-32 resize-none"
              required
            ></textarea>
          </div>
         { !loading ? <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Submit</button> : <div className='flex items-center justify-center'> <Loader2 className="h-10 w-10 text-blue-500 animate-spin" /></div> }
        </form>
      </div>
    </div> </>
  );
};

export default ContactPage;

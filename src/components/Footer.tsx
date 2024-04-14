import Image from 'next/image';
import React from 'react';
import Logo from '../logo.png'
const Footer = () => {
  return (
    <footer className="bg-[#FDFBDE] text-white py-8 rounded-sm m-2">
      <div className="flex justify-center items-center">
      <Image
        src={Logo} alt={'Logo'}  width={250} height={250}    />
      </div>
    </footer>
  );
};
export default Footer;
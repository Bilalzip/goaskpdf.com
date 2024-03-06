import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 m-1 rounded-sm">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between">
        <div className="mb-4 lg:mb-0">
          <h2 className="text-2xl font-bold">Goaskpdf</h2>
          <p className="text-sm">Your go-to platform to chat with pdf</p>
        </div>
        <nav>
          <ul className="flex md:space-x-4 flex-col items-start md:flex-row">
            <li><a href="/privacy-policy" className="text-sm">Privacy Policy</a></li>
            <li><a href="/terms-of-service" className="text-sm">Terms of Service</a></li>
            <li><a href="/contact-us" className="text-sm">Contact us</a></li>
            <li><a href="/refunds" className="text-sm">Refunds and Cancellation</a></li>
            {/* Add more links as needed */}
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;

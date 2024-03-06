import Navbar from '@/components/Navbar';
import React from 'react';

const page: React.FC = () => {
  return (

    <>
     <Navbar/>
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center py-10">
      <div className="max-w-3xl px-6 py-8 bg-white shadow-md rounded-lg">
        <h1 className="text-3xl font-bold mb-4">Refund and Cancellation Policy</h1>
        <p className="mb-4">
          At Goaskpdf, we want to ensure your satisfaction with our service. If you are not entirely satisfied with your purchase, we&apos;re here to help.
        </p>
        <h2 className="text-2xl font-bold mb-4">Refund Policy</h2>
        <p className="mb-4">
          You have 30 calendar days to request a refund from the date you made the purchase.
        </p>
        <p className="mb-4">
          To be eligible for a refund, your request must meet the following criteria:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>The service must have been purchased directly through the Goaskpdf website.</li>
          <li>The service must not have been used.</li>
        </ul>
        <p className="mb-4">
          Once we receive your refund request and verify its eligibility, we will initiate a refund to your original payment method. You will receive the credit within a certain amount of days, depending on your card issuer&apos;s policies.
        </p>
        <p className="mb-4">
          Please note that refunds for purchases made through third-party platforms (e.g., Stripe) must be processed through those platforms according to their refund policies.
        </p>
        <h2 className="text-2xl font-bold mb-4">Cancellation Policy</h2>
        <p className="mb-4">
          You may cancel your subscription at any time. Cancelling your subscription will stop any future recurring charges.
        </p>
        <p className="mb-4">
          To cancel your subscription, please log in to your account on the Goaskpdf website and navigate to the subscription management section. Follow the instructions provided to cancel your subscription.
        </p>
        <p className="mb-4">
          If you have any questions or concerns regarding our Refund and Cancellation Policy, please contact us at support@goaskpdf.com.
        </p>
      </div>
    </div>    </>
  );
};

export default page;

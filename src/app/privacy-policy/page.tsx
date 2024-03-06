import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'

const page = () => {
  return (
    <>
    <Navbar/>
    <div className="container mx-auto mt-8 px-4">
      <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
      <p>Last updated: March 06, 2024</p>
      <p>
        This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.
      </p>
      <p>
        We use Your Personal data to provide and improve the Service. By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy. This Privacy Policy has been created with the help of the <a href="https://www.freeprivacypolicy.com/free-privacy-policy-generator/" target="_blank">Free Privacy Policy Generator</a>.
      </p>

      <h2 className="text-2xl font-bold mb-4">Interpretation and Definitions</h2>
      <h3 className="text-xl font-bold mb-2">Interpretation</h3>
      <p>
        The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
      </p>

      <h3 className="text-xl font-bold mb-2">Definitions</h3>
      <p>For the purposes of this Privacy Policy:</p>
      <ul className="list-disc pl-6 mb-4">
        <li>
          <strong>Account</strong> means a unique account created for You to access our Service or parts of our Service.
        </li>
        <li>
          <strong>Affiliate</strong> means an entity that controls, is controlled by or is under common control with a party, where "control" means ownership of 50% or more of the shares, equity interest or other securities entitled to vote for election of directors or other managing authority.
        </li>
        {/* ... (Other definitions) ... */}
      </ul>

      {/* More sections with relevant content... */}

      <h2 className="text-2xl font-bold mb-4">Changes to this Privacy Policy</h2>
      <p>
        We may update Our Privacy Policy from time to time. We will notify You of any changes by posting the new Privacy Policy on this page.
      </p>
      <p>
        We will let You know via email and/or a prominent notice on Our Service, prior to the change becoming effective and update the "Last updated" date at the top of this Privacy Policy.
      </p>
      <p>
        You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
      </p>

      <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
      <p>If you have any questions about this Privacy Policy, You can contact us:</p>
      <ul className="list-disc pl-6 mb-4">
        <li>By email: info@goaskpdf.com</li>
      </ul>
    </div>
    <Footer/>
    </>
  )
}

export default page

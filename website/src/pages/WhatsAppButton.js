import React from 'react';
import Link from 'next/link'; // Import the Link component

const WhatsAppButton = () => {
  const phoneNumber = '9711871168'; // Replace with your actual phone number

  const handleWhatsAppButtonClick = (e) => {
    e.preventDefault(); // Prevent the default behavior of the link
    const whatsappLink = `https://wa.me/${phoneNumber}`;
    window.open(whatsappLink, '_blank');
  };

  return (
    <>
      <div
        className="float"
        onClick={handleWhatsAppButtonClick}
        role="button"
        tabIndex="0"
      >
        <i className="my-float fa fa-whatsapp"></i>
      </div>

      <style jsx>{`
           .float {
            position: fixed;
            width: 60px;
            height: 60px;
            bottom: 25px;
            right: 25px;
            background-color: #25d366 !important; /* Add !important here */
            color: white!important; /* Add !important here */
            border-radius: 50px;
            text-align: center;
            font-size: 30px;
            z-index: 100;
            cursor:pointer;
          }

        .my-float {
          margin-top: 16px;
        }
      `}</style>
    </>
  );
};

export default WhatsAppButton;

import React from 'react';

// Function to handle "Call Now" button click
const handleCallNowClick = (phoneNumber) => {
  const telLink = `tel:${phoneNumber}`;
  window.location.href = telLink;
};

const WhatsAppButton = () => {
  const phoneNumber = '9711871168';

  const handleWhatsAppButtonClick = (e) => {
    e.preventDefault();
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

      {/* "Call Now" bar for mobile screens */}
      <div className="call-now-bar" onClick={() => handleCallNowClick(phoneNumber)}>
        <span>Call Now</span>
      </div>

      <style jsx>{`
        .float {
          position: fixed;
          width: 60px;
          height: 60px;
          bottom: 25px;
          right: 25px;
          background-color: #25d366 !important;
          color: white!important;
          border-radius: 50px;
          text-align: center;
          font-size: 30px;
          z-index: 100;
          cursor: pointer;
        }

        .call-now-bar {
          display: none;
          position: fixed;
          bottom: 0;
          left: 0;
          width: 100%;
          background-color: #ff6600;
          z-index: 100;

          color: white;
          text-align: center;
          padding: 10px;
          cursor: pointer;
        }

        @media (max-width: 768px) {
          .float {
            /* Adjust the styles as needed for mobile screens */
            position: fixed;
            bottom: 45px;
            right: 15px;
            display: block;
          }

          .call-now-bar {
            display: block;
          }
        }

        .my-float {
          margin-top: 16px;
        }
      `}</style>
    </>
  );
};

export default WhatsAppButton;

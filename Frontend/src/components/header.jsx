import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import QRCodePopup from "./qrCodePopup.jsx";

const Header = () => {
  const [showQRCode, setShowQRCode] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  useEffect(() => {
    console.log('Header component mounted'); // Debug log

    let timeoutId;

    const handleFirstSuccessfulRun = (event) => {
      console.log('First successful run event received'); // Debug log
      setShowSuccessMessage(true);
      // Clear any existing timeout
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      // Set new timeout
      timeoutId = setTimeout(() => {
        console.log('Hiding success message'); // Debug log
        setShowSuccessMessage(false);
      }, 4000);
    };

    // Add event listener
    window.addEventListener('firstSuccessfulRun', handleFirstSuccessfulRun);
    console.log('Event listener added'); // Debug log

    return () => {
      console.log('Header component unmounting'); // Debug log
      window.removeEventListener('firstSuccessfulRun', handleFirstSuccessfulRun);
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, []);

  // Debug log for state changes
  useEffect(() => {
    console.log('showSuccessMessage changed:', showSuccessMessage);
  }, [showSuccessMessage]);

  return (
    <>
      <header className="w-full flex justify-between items-center px-4 py-3 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.3)] bg-[#1e1e1e] h-16">
        <NavLink to="/">
          <div className="text-3xl font-bold">
            <img src="/logo.png" alt="" height='105px' width='130px' className="hover:opacity-80 transition-all duration-300 hover:scale-105 ml-2" />
          </div>
        </NavLink>
        <nav className="flex items-center space-x-6">
          {showSuccessMessage && (
            <div>
            <span
              className="text-[#e8984a] font-medium relative z-50 animate-[fadeIn_1s_ease-in-out_forwards] 
                        [text-shadow:0_0_3px_#ec625d,0_0_6px_#ec625d,0_0_9px_#ec625d] 
                        animate-[glow_1.5s_infinite_alternate_ease-in-out]"
            >
              Code chal gya! Ab Chai Pilado!👉
              <span className="absolute inset-0 text-[#e8984a] animate-pulse"></span>
            </span>
          
            <style>
              {`
                @keyframes fadeIn {
                  from { opacity: 0; }
                  to { opacity: 1; }
                }
          
                @keyframes glow {
                  0% {
                    text-shadow: 0 0 3px #ec625d, 0 0 6px #ec625d, 0 0 9px #ec625d;
                  }
                  50% {
                    text-shadow: 0 0 4px #ec625d, 0 0 8px #ec625d, 0 0 12px #ec625d;
                  }
                  100% {
                    text-shadow: 0 0 3px #ec625d, 0 0 6px #ec625d, 0 0 9px #ec625d;
                  }
                }
              `}
            </style>
          </div>
          
          
          )}
          <button 
            onClick={() => setShowQRCode(true)}
            className="relative text-[#e8984a] hover:text-[#ec625d] hover:cursor-pointer transition-all duration-300 font-medium active:scale-95 active:opacity-80 group"
          >
            <span className="relative z-10">Chai Pilao</span>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#ec625d] transition-all duration-300 group-hover:w-full"></span>
          </button>
          <NavLink 
            to="/AboutUs" 
            className="relative text-[#e8984a] hover:text-[#ec625d] transition-all duration-300 font-medium active:scale-95 active:opacity-80 group mr-2"
          >
            <span className="relative z-10">About Us</span>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#ec625d] transition-all duration-300 group-hover:w-full"></span>
          </NavLink>
        </nav>
      </header>

      {showQRCode && <QRCodePopup onClose={() => setShowQRCode(false)} />}
    </>
  );
};

export default Header;
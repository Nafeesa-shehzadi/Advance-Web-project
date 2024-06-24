import React from 'react';
import { useNavigate } from 'react-router-dom';

const WelcomePage = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/register');
  };

  const loginButtonClick = () => {
    navigate('/login');
  };
  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/salon.jpg')" }}
    >
      <div className="max-w-md w-full bg-white bg-opacity-80 p-8 rounded-lg shadow-md">
      
        <h1 className="text-3xl text-[#FF007F] text-left font-alexBrush">Glamour</h1>
        <h1 className="text-3xl font-bold text-center mb-6 font-alexBrush">Welcome to Event Planning</h1>
        <div className="space-y-4">
          <button
            onClick={handleButtonClick}
            className="w-full py-2 px-4 bg-[#da5e9c] text-white rounded-md hover:bg-[#a74275] transition duration-300"
          >
            Register
          </button>
          <button 
          onClick={loginButtonClick}
          className="w-full py-2 px-4 bg-[#d786ae] text-white rounded-md hover:bg-[#b47092] transition duration-300">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;

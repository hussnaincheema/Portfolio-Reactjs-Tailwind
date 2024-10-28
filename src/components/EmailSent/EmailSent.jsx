import React from "react";

const EmailSent = ({ setIsModalOpen }) => {
  return (
    <div className="text-center my-20">
      <p className="text-4xl font-stylish text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500 tracking-wide font-extrabold text-shadow mb-5">
        Thank you for your message!
      </p>
      <p className="text-white text-xl mt-2">
        Got your message! I'll get back to you as soon as I can.
      </p>
      <button
        onClick={() => setIsModalOpen(false)}
        className="bg-orange-400 hover:bg-gray-800 mt-6 text-white py-2 px-6 rounded-md font-bold text-lg"
      >
        OK
      </button>
    </div>
  );
};

export default EmailSent;

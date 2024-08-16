import React from "react";

const ContactUs: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#1b1b1b] flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl w-full bg-gray-800 rounded-lg shadow-lg">
        <h2 className="text-2xl font-extrabold text-white text-center py-4">
          Contact Us
        </h2>
        <p className="text-gray-400 text-center mb-4">
          Find us on the map below:
        </p>

        <div className="overflow-hidden rounded-lg">
          <iframe
            className="w-full h-[600px] border-0"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.5272234430104!2d55.33875867623742!3d25.252844077675103!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5d5b915408ff%3A0x4842994e98b909a2!2sROYALTY-GT%20CAR%20RENTAL!5e0!3m2!1sen!2sae!4v1723851656014!5m2!1sen!2sae"
            loading="lazy"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

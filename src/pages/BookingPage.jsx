// src/pages/BookingPage.jsx
import React, { useState } from "react";
import BookingForm from "../components/BookingForm";

const BookingPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const selfBooking = false;

  return (
    <>
      {!selfBooking ? (
        <>
          <h3 className="text-center text-2xl font-semibold text-gray-700 mt-20">
            Coming Soon
          </h3>
        </>
      ) : (
        <div className="flex flex-col justify-center items-center h-[550px] bg-gray-50 px-4">
          <h1 className="text-3xl font-bold text-indigo-600 mb-4">
            Welcome to Our Services
          </h1>
          <p className="text-gray-600 text-center max-w-lg">
            Need a service? Click the button below to book your appointment
            easily!
          </p>

          {/* Button to open modal */}
          <button
            onClick={() => setIsOpen(true)}
            className="mt-6 px-6 py-3 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 transition"
          >
            Book a Service
          </button>

          {/* Booking Form Modal */}
          {isOpen && (
            <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 backdrop-blur-sm">
              <div className="bg-white rounded-lg shadow-xl w-full max-w-xl pt-[150px] pb-[100px] px-10 relative z-10">
                <button
                  onClick={() => setIsOpen(false)}
                  className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-xl"
                >
                  ✖
                </button>
                <h2 className="text-2xl font-bold text-indigo-600 text-center">
                  Book a Service
                </h2>
                <p className="text-center text-gray-600 mt-2 mb-4">
                  Fill in the details to proceed.
                </p>
                <BookingForm onClose={() => setIsOpen(false)} />
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default BookingPage;

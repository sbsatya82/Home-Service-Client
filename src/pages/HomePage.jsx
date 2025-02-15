import React, { Fragment } from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {

  const navigate = useNavigate();
  const moveToServicePage = ()=>{
    navigate('services')
  }

  return (
    <Fragment>
      <div className="bg-[#06A3DA] h-[550px] flex items-center justify-between p-4 relative">
        <div className="text-white w-1/2">
          <h1 className="text-4xl md:text-7xl font-bold mb-6 ml-8">
            Repair And <br />
            Maintenance <br />
            Services
          </h1>
          {/* Book Now Button */}
          <button onClick={moveToServicePage} className="bg-orange-500 text-white text-xl font-semibold py-2 px-8 ml-8 rounded-lg hover:bg-orange-600 transition-all duration-500">
            Explore Services
          </button>
        </div>
        <img
          src="slider-img.png"
          alt="Repair and Maintenance"
          className="w-1/4 object-cover absolute bottom-0 right-40"
        />
      </div>
      {/* Contact to Book Section */}
      <div className="w-full mt-6 p-8 bg-gray-100 flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-8">

        {/* Call to Book Section */}
        <div className="w-full lg:w-full p-6 bg-white shadow-lg rounded-lg flex flex-col items-center">
          <h2 className="text-2xl font-bold mb-4">Call & Book</h2>
          <p className="mb-4">Prefer to speak with us directly? Call us now!</p>
          <p className="text-3xl font-bold text-red-500">+1 234 567 890</p>
          <button className="mt-4 bg-green-500 text-white py-2 px-6 rounded hover:bg-green-600">
            Call Now
          </button>
        </div>
      </div>

      <div className="w-full mt-3 flex flex-col lg:flex-row space-y-6 lg:space-y-0">
        {/* Left Content Section */}
        <div className="w-full mt-3 flex flex-col lg:flex-row space-y-6 lg:space-y-0">
  {/* Left Content Section */}
  <div className="w-full lg:w-full p-8 flex flex-col justify-center items-start space-y-4">
    <h2 className="text-3xl font-bold">About Us</h2>
    <p className="text-lg">
      Welcome to Home, where we are dedicated to providing top-notch services tailored to your needs. 
      With years of experience and a passion for excellence, we take pride in delivering high-quality solutions that ensure customer satisfaction.
    </p>
    <p className="text-lg">
      Our team of skilled professionals works diligently to offer reliable, efficient, and innovative services. 
      Whether it's [mention your core services], we are committed to exceeding expectations and building long-term relationships with our clients.
    </p>
    <p className="text-lg">
      At [Your Company Name], we believe in transparency, trust, and continuous improvement. 
      Join us on this journey, and let’s create something remarkable together.
    </p>
  </div>
</div>


        {/* Right Image Section */}
        <div className="w-full lg:w-1/2 p-4  flex justify-center items-center">
          <img
            src="about-img.jpg"
            alt="about"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </Fragment>
  );
};

export default HomePage;

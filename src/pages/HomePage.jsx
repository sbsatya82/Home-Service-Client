import React, { Fragment } from "react";

const HomePage = () => {
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
          <button className="bg-orange-500 text-white text-xl font-semibold py-2 px-8 ml-8 rounded-lg hover:bg-orange-600 transition-all duration-500">
            Book Now
          </button>
        </div>
        <img
          src="slider-img.png"
          alt="Repair and Maintenance"
          className="w-1/4 object-cover absolute bottom-0 right-40"
        />
      </div>

      {/* Card Section with spacing */}
      <div className="h-[150px] flex space-x-4 gap-2 mt-5 justify-center">
        <div className="bg-gray-200 hover:bg-orange-500 hover:text-white  shadow-lg h-full w-[30%]  p-4 flex items-center justify-center hover:cursor-pointer  transition-all duration-500">
          <p className="text-center text-lg font-semibold">Card 1 Text</p>
        </div>
        <div className="bg-orange-500 hover:cursor-pointer  shadow-lg h-full w-[30%]  p-4 flex items-center justify-center">
          <p className="text-center text-lg font-semibold text-white">
            Card 2 Text
          </p>
        </div>
        <div className="bg-gray-200 hover:bg-orange-500 hover:text-white hover:cursor-pointer shadow-lg h-full w-[30%]  p-4 flex items-center justify-center transition-all duration-500">
          <p className="text-center text-lg font-semibold">Card 3 Text</p>
        </div>
      </div>
      <div className="w-full mt-3 flex flex-col lg:flex-row space-y-6 lg:space-y-0">
        {/* Left Content Section */}
        <div className="w-full lg:w-1/2 p-8 flex flex-col justify-center items-start space-y-4">
          <h2 className="text-3xl font-bold ">About Us</h2>
          <p className=" text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
            dolores iure facilis perferendis voluptates numquam ex nam vel vitae
            sequi explicabo, ea dolor minus atque odio laudantium voluptatibus
            tempore unde!
          </p>
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

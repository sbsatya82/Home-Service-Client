import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook

const ServiceList = () => {
  const [services, setServices] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate hook

  // Fetch services from API
  useEffect(() => {
    const fetchServices = async () => {
      try {
        const { data } = await axios.get('http://localhost:8000/api/services');
        setServices(data);
      } catch (error) {
        console.error('Error fetching services:', error);
      }
    };

    fetchServices();
  }, []);

  // Handle search filter
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // Filter services based on search query
  const filteredServices = services.filter((service) =>
    service.NAME.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Handle service click to navigate to the service details page
  const handleServiceClick = (id) => {
    navigate(`/service/${id}`); // Navigate to the service details page
  };

  return (
    <div className="p-4">
      {/* Search Box */}
      <div className="mb-4 flex justify-center">
        <input
          type="text"
          placeholder="Search Services"
          value={searchQuery}
          onChange={handleSearchChange}
          className="p-2 border rounded-md shadow-md w-[300px] focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      {/* Service List */}
      <ul className="flex gap-6 justify-center flex-wrap">
        {filteredServices.map((service) => (
          <li
            key={service.id}
            className="p-6 bg-white hover:bg-orange-400 hover:text-white border rounded-lg shadow-lg transform transition duration-300 w-[250px] text-center hover:cursor-pointer"
            onClick={() => handleServiceClick(service.id)}
          >
            <h3 className="text-xl font-semibold text-gray-800">{service.NAME}</h3>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceList;

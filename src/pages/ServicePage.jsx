import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ServicePage = () => {
  const { id } = useParams();
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchServiceDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/services/${id}`);
        console.log(response.data);
        
        setService(response.data);
      } catch (err) {
        setError('Failed to load service details.');
        console.error('Error fetching service details:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchServiceDetails();
  }, [id]);

  if (loading) {
    return <div className="text-center text-xl font-semibold mt-10">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500 font-semibold mt-10">{error}</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
      <h1 className="text-3xl font-bold text-blue-600 mb-4">{service.NAME}</h1>
      <p className="text-lg text-gray-700 mb-2">{service.description}</p>
      <p className="text-xl font-semibold text-gray-800 mb-6">Price: ₹{service.price}</p>
      <div className="flex space-x-4">
        <button 
          className="bg-green-500 text-white py-2 px-6 rounded-lg hover:bg-green-600 transition"
          onClick={() => window.location.href = `tel:${service.contactNumber}`}
        >
          Call
        </button>
        <button 
          className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 transition"
          onClick={() => window.location.href = `/booking`}
        >
          Book Online
        </button>
      </div>
    </div>
  );
}

export default ServicePage;

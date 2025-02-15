// src/pages/ServicesPage.jsx
import React from 'react';
import ServiceList from '../components/ServiceList';

const ServicesPage = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold text-center">Our Services</h1>
      <ServiceList />
    </div>
  );
};

export default ServicesPage;

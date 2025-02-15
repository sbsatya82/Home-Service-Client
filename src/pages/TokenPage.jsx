// src/pages/TokenPage.jsx
import React from 'react';
import TokenStatus from '../components/TokenStatus';

const TokenPage = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold">Track Your Token</h1>
      <TokenStatus />
    </div>
  );
};

export default TokenPage;

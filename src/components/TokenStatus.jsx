// src/components/TokenStatus.jsx
import React, { useState } from 'react';

const TokenStatus = () => {
  const [tokenNumber, setTokenNumber] = useState('');
  const [status, setStatus] = useState(null);

  const handleTokenSubmit = (e) => {
    e.preventDefault();

    // Simulate fetching the status from an API
    console.log('Fetching status for token:', tokenNumber);

    // Simulated response
    const simulatedResponse = {
      1001: 'In Progress',
      1002: 'Completed',
      1003: 'Pending',
    };

    const fetchedStatus = simulatedResponse[tokenNumber] || 'Token not found';
    setStatus(fetchedStatus);
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Track Your Token</h2>
      <form onSubmit={handleTokenSubmit} className="mb-4">
        <label className="block mb-2">Enter Token Number</label>
        <input
          type="text"
          name="tokenNumber"
          className="border p-2 w-full"
          value={tokenNumber}
          onChange={(e) => setTokenNumber(e.target.value)}
          placeholder="Enter your token number"
          required
        />
        <button type="submit" className="bg-blue-500 text-white p-2 mt-2">
          Check Status
        </button>
      </form>
      {status && (
        <div className="p-4 bg-gray-100 border mt-4">
          <h3 className="text-lg font-bold">Token Status</h3>
          <p>{status}</p>
        </div>
      )}
    </div>
  );
};

export default TokenStatus;

// src/components/BookingForm.jsx
import React, { useState } from "react";
import axios from "axios";

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    service: "",
    date: "",
    timeSlot: "",
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    try {
      await axios.post("http://localhost:8000/api/bookService", formData);
      setMessage({ type: "success", text: "Booking confirmed!" });
      setFormData({ name: "", phone: "", address: "", service: "", date: "", timeSlot: "" });
    } catch (error) {
      setMessage({ type: "error", text: "Error booking service. Try again." });
    } finally {
      setLoading(false);
    }
  };

  const today = new Date().toISOString().split("T")[0]; // Get today's date in YYYY-MM-DD format

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {message && (
        <div className={`p-3 text-center rounded ${message.type === "success" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>
          {message.text}
        </div>
      )}

      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Full Name"
        className="w-full p-3 border rounded-md focus:ring-2 focus:ring-indigo-400"
        required
      />

      <input
        type="tel"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        placeholder="Phone Number"
        className="w-full p-3 border rounded-md focus:ring-2 focus:ring-indigo-400"
        required
      />

      <textarea
        name="address"
        value={formData.address}
        onChange={handleChange}
        placeholder="Full Address"
        className="w-full p-3 border rounded-md focus:ring-2 focus:ring-indigo-400"
        rows="3"
        required
      ></textarea>

      <select
        name="service"
        value={formData.service}
        onChange={handleChange}
        className="w-full p-3 border rounded-md focus:ring-2 focus:ring-indigo-400"
        required
      >
        <option value="">Choose a Service</option>
        <option value="Cleaning">Cleaning</option>
        <option value="Repair">Repair</option>
        <option value="Consultation">Consultation</option>
      </select>

      <input
        type="date"
        name="date"
        value={formData.date}
        onChange={handleChange}
        className="w-full p-3 border rounded-md focus:ring-2 focus:ring-indigo-400"
        min={today} // Set minimum date to today
        required
      />

      <select
        name="timeSlot"
        value={formData.timeSlot}
        onChange={handleChange}
        className="w-full p-3 border rounded-md focus:ring-2 focus:ring-indigo-400"
        required
      >
        <option value="">Choose Time Slot</option>
        <option value="8 AM - 12 PM">8 AM - 12 PM</option>
        <option value="12 PM - 4 PM">12 PM - 4 PM</option>
        <option value="4 PM - 8 PM">4 PM - 8 PM</option>
      </select>

      <button
        type="submit"
        disabled={loading}
        className="w-full p-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition disabled:opacity-50"
      >
        {loading ? "Processing..." : "Confirm Booking"}
      </button>
    </form>
  );
};

export default BookingForm;

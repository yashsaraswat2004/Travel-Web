import { useState } from "react";

const TravelForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    destination: "",
    departureDate: "",
    travelers: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="w-full max-w-[25rem] h-[30rem] mt-[5rem] mr-[5rem] px-8 bg-white rounded-lg">
      <h1 className="text-3xl font-bold text-center mb-6 text-black">
        Book This Tour
      </h1>
      <form className="flex flex-col space-y-5">
        <div className="relative">
          <i className="fas fa-user absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-600"></i>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full py-2 pl-5 pr-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200"
          />
        </div>

        <div className="relative">
          <i className="fas fa-envelope absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-600"></i>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full py-2 pl-5 pr-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200"
          />
        </div>

        <div className="relative">
          <i className="fas fa-phone absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-600"></i>
          <input
            type="tel"
            name="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full py-2 pl-5 pr-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200"
          />
        </div>

        <div className="relative">
          <i className="fas fa-plane-departure absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-600"></i>
          <input
            type="date"
            name="departureDate"
            placeholder="Departure Date"
            onChange={handleChange}
            required
            className="w-full py-2 pl-5 pr-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200"
          />
        </div>

        <div className="relative">
          <i className="fas fa-users absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-600"></i>
          <input
            type="number"
            name="travelers"
            placeholder="Number of Travelers"
            value={formData.travelers}
            onChange={handleChange}
            min="1"
            required
            className="w-full py-2 pl-5 pr-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200"
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 bg-orange-500 text-white font-bold rounded-md hover:bg-white hover:text-orange-500 hover:border hover:border-black transition-colors"
        >
          Book Now
        </button>
      </form>
    </div>
  );
};

export default TravelForm;

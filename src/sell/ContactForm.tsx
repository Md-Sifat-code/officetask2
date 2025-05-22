import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    mailAddress: "",
    phone: "",
    propertyType: "",
    bedrooms: "",
    address: ""
  });

  const handleChange = (e: any) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(formData); // Replace with actual submit logic
  };

  return (
    <div className="bg-white text-gray-700 rounded-xl p-6 sm:p-8 md:p-10 max-w-3xl mx-auto border border-gray-200 shadow-md">
      <h2 className="text-center text-2xl md:text-3xl font-semibold text-[#FF9E9E] mb-2">
        We will get you the Best Price.
      </h2>
      <p className="text-center text-[#358597] mb-6 text-base md:text-lg">
        Please leave your details below, and one of our advisors will get in contact ASAP
      </p>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm mb-1">First Name</label>
            <input
              type="text"
              name="firstName"
              className="w-full border border-gray-300 rounded-md px-3 py-2 bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#F59788]"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="block text-sm mb-1">Last Name</label>
            <input
              type="text"
              name="lastName"
              className="w-full border border-gray-300 rounded-md px-3 py-2 bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#F59788]"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-sm mb-1">Mail Address</label>
          <input
            type="email"
            name="mailAddress"
            className="w-full border border-gray-300 rounded-md px-3 py-2 bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#F59788]"
            value={formData.mailAddress}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label className="block text-sm mb-1">Phone Number</label>
          <input
            type="tel"
            name="phone"
            className="w-full border border-gray-300 rounded-md px-3 py-2 bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#F59788]"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm mb-1">Property Type</label>
            <select
              name="propertyType"
              className="w-full border border-gray-300 rounded-md px-3 py-2 bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#F59788]"
              value={formData.propertyType}
              onChange={handleChange}
              required
            >
              <option value="" disabled>Select Property Type</option>
              <option value="apartment">Apartment</option>
              <option value="villa">Villa</option>
              <option value="townhouse">Townhouse</option>
            </select>
          </div>

          <div>
            <label className="block text-sm mb-1">Bedrooms</label>
            <select
              name="bedrooms"
              className="w-full border border-gray-300 rounded-md px-3 py-2 bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#F59788]"
              value={formData.bedrooms}
              onChange={handleChange}
              required
            >
              <option value="" disabled>Select Bedrooms</option>
              <option value="1">1 Bedroom</option>
              <option value="2">2 Bedrooms</option>
              <option value="3">3 Bedrooms</option>
              <option value="4+">4+ Bedrooms</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm mb-1">Property Address</label>
          <input
            type="text"
            name="address"
            className="w-full border border-gray-300 rounded-md px-3 py-2 bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#F59788]"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <button
            type="submit"
            className="w-full bg-[#F59788] hover:bg-[#f3786b] transition-colors text-white py-2 mt-4 rounded-md font-semibold"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;

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

  const handleChange = (e:any) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();
    // handle form submission logic here
    console.log(formData);
  };

  return (
    <div className="bg-white text-gray-400 rounded-xl p-6 md:p-10 max-w-3xl mx-auto border border-gray-100]">
      <h2 className="text-center text-2xl md:text-3xl font-semibold text-[#FF9E9E] mb-2">
        We will get you the Best Price.
      </h2>
      <p className="text-center text-[#358597] mb-6 text-base md:text-lg">
        Please leave your details below, and one of our advisors will get in contact ASAP
      </p>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm">First Name</label>
            <input
              type="text"
              name="firstName"
              className="w-full border-b border-gray-400 bg-transparent text-white focus:outline-none"
              value={formData.firstName}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block text-sm">Last Name</label>
            <input
              type="text"
              name="lastName"
              className="w-full border-b border-gray-400 bg-transparent text-white focus:outline-none"
              value={formData.lastName}
              onChange={handleChange}
            />
          </div>
        </div>

        <div>
          <label className="block text-sm mb-1">Mail Address</label>
          <input
            type="email"
            name="mailAddress"
            className="w-full border-b border-gray-400 bg-transparent text-white focus:outline-none"
            value={formData.mailAddress}
            onChange={handleChange}
          />
        </div>

        <div>
          <label className="block text-sm mb-1">Phone Number</label>
          <input
            type="tel"
            name="phone"
            className="w-full border-b border-gray-400 bg-transparent text-white focus:outline-none"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>

        <div>
          <label className="block text-sm mb-1">Property Type</label>
          <select
            name="propertyType"
            className="w-full border-b border-gray-400 bg-transparent text-gray-400 focus:outline-none"
            value={formData.propertyType}
            onChange={handleChange}
          >
            {/* <option value="" disabled>Select Property Type</option> */}
            <option value="apartment">Apartment</option>
            <option value="villa">Villa</option>
            <option value="townhouse">Townhouse</option>
          </select>
        </div>

        <div>
          <label className="block text-sm mb-1">Number Bed Rooms</label>
          <select
            name="bedrooms"
            className="w-full border-b border-gray-400 bg-transparent text-gray-400 focus:outline-none"
            value={formData.bedrooms}
            onChange={handleChange}
          >
            {/* <option value="" disabled>Select Bedrooms</option> */}
            <option value="1">1 Bedroom</option>
            <option value="2">2 Bedrooms</option>
            <option value="3">3 Bedrooms</option>
            <option value="4+">4+ Bedrooms</option>
          </select>
        </div>

        <div>
          <label className="block text-sm mb-1">Property Address</label>
          <input
            type="text"
            name="address"
            className="w-full border-b border-gray-400 bg-transparent text-white focus:outline-none"
            value={formData.address}
            onChange={handleChange}
          />
        </div>

        <div>
          <button
            type="submit"
            className="w-full bg-[#F59788] text-white py-2 mt-4 rounded-md font-semibold"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;

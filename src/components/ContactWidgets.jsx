import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { styles } from "../styles";

const ContactWidgets = () => {
  const [showForm, setShowForm] = useState(false);

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hi Adam, I am interested in NatioID.");
    window.open(`https://wa.me/?text=${message}`, "_blank");
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const message = e.target.message.value;
    window.location.href = `mailto:abdulazeezadam09@gmail.com?subject=NatioID Inquiry from ${name}&body=${message}%0A%0AFrom:%20${email}`;
    setShowForm(false);
  };

  return (
    <>
      <div className="fixed bottom-5 right-5 z-50">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="bg-green-500 text-white p-4 rounded-full shadow-lg"
          onClick={handleWhatsAppClick}
        >
          <FaWhatsapp size={30} />
        </motion.button>
      </div>

      <div className="fixed bottom-5 left-5 z-50">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="bg-blue-500 text-white py-2 px-4 rounded-full shadow-lg"
          onClick={() => setShowForm(!showForm)}
        >
          Email Us
        </motion.button>
      </div>

      {showForm && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed bottom-20 left-5 z-50 bg-white p-5 rounded-lg shadow-lg"
        >
          <form onSubmit={handleFormSubmit}>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700"
            >
              Send
            </button>
          </form>
        </motion.div>
      )}
    </>
  );
};

export default ContactWidgets;

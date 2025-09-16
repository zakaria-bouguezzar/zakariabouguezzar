import React from "react";
import { FaUser, FaEnvelope, FaCommentDots } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="py-16 px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-2 text-gray-800">Contact</h2>
        <span className="block w-20 h-1 bg-blue-500 mx-auto mt-3 rounded"></span>
        <br />
        <p className="text-gray-600 mb-12">
          N'hésitez pas à me contacter.
        </p>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          {/* Nom et prénom */}
          <div>
            <label className="flex items-center gap-2 text-gray-700 font-medium mb-2">
              <FaUser className="text-blue-500" /> Nom et prénom <span className="text-blue-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Nom et Prénom *"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Message */}
          <div className="md:row-span-2">
            <label className="flex items-center gap-2 text-gray-700 font-medium mb-2">
              <FaCommentDots className="text-blue-500" /> Message <span className="text-blue-500">*</span>
            </label>
            <textarea
              placeholder="Saisissez votre message *"
              required
              rows="6"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          {/* Email */}
          <div>
            <label className="flex items-center gap-2 text-gray-700 font-medium mb-2">
              <FaEnvelope className="text-blue-500" /> Email <span className="text-blue-500">*</span>
            </label>
            <input
              type="email"
              placeholder="Saisissez votre email *"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Bouton */}
          <div className="col-span-1 md:col-span-2 text-center">
            <button
              type="submit"
              className="bg-blue-500 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-blue-600 transition"
            >
              ENVOYER
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;

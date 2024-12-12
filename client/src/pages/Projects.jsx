import { useState } from 'react';
import CallToAction from '../components/CallToAction';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Here you can integrate an API call to handle form submissions
    console.log('Form Data Submitted:', formData);

    // Reset form and show success message
    setFormData({ name: '', email: '', message: '' });
    setSuccessMessage('Thank you! Your message has been submitted.');

    // Clear the success message after 3 seconds
    setTimeout(() => {
      setSuccessMessage('');
    }, 3000);
  };

  return (
    <div className="min-h-screen max-w-3xl mx-auto flex justify-center items-center flex-col gap-6 p-6">
      {/* Page Header */}
      <h1 className="text-4xl font-bold text-teal-600 dark:text-purple-400 my-7">
        Contact Me
      </h1>
      <p className="text-md text-gray-500 dark:text-gray-300 text-center">
        "Have questions, ideas, or just want to say hello? Let's connect and create something amazing together!"
      </p>

      {/* Call to Action (Moved here) */}
      <CallToAction />

      {/* Contact Form */}
      <form
        className="w-full max-w-lg bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 p-8 rounded-xl shadow-lg mt-8"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-200 text-center mb-6">
          Send Me a Message
        </h2>

        {/* Name Input */}
        <div className="mb-6">
          <label htmlFor="name" className="block text-sm text-gray-500 dark:text-gray-400 mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            className="w-full px-4 py-3 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-teal-600"
            required
          />
        </div>

        {/* Email Input */}
        <div className="mb-6">
          <label htmlFor="email" className="block text-sm text-gray-500 dark:text-gray-400 mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className="w-full px-4 py-3 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-teal-600"
            required
          />
        </div>

        {/* Message Input */}
        <div className="mb-6">
          <label htmlFor="message" className="block text-sm text-gray-500 dark:text-gray-400 mb-2">
            Message
          </label>
          <textarea
            id="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            placeholder="Enter your message"
            className="w-full px-4 py-3 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-teal-600"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-teal-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-teal-700 transition duration-300 shadow-lg"
        >
          Send Message
        </button>
      </form>

      {/* Success Message */}
      {successMessage && (
        <div className="mt-4 text-center text-green-600 font-semibold">
          {successMessage}
        </div>
      )}

      {/* Direct Contact Info */}
      <div className="text-center mt-6">
        <p className="text-md text-gray-600 dark:text-gray-300">
          Or reach out to me directly:
        </p>
        <p className="font-medium text-teal-600 dark:text-purple-400">
          Email: chakrabartysumedha774@gmail.com
        </p>
      </div>
    </div>
  );
}

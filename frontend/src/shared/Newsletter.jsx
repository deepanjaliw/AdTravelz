import React, { useState } from "react";
import { toast } from "react-toastify";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("🎉 Subscribed successfully!");
    setEmail("");
  };

  return (
    <div>
      <h5 className="text-white font-semibold mb-2 text-sm">Newsletter</h5>
      <p className="text-gray-400 text-xs mb-3">Get travel deals & updates in your inbox.</p>
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <input
          type="email"
          placeholder="Your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="px-3 py-2 text-sm bg-gray-800 border border-gray-600 text-white rounded-lg focus:outline-none focus:border-BaseColor placeholder-gray-500"
        />
        <button type="submit" className="btn text-sm py-2">
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default Newsletter;

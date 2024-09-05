import React, { useState } from "react";

function UserForm({ initialData = {}, handleSubmit, isSubmitting }) {
  // Initialize form fields
  const [name, setName] = useState(initialData.name || "");
  const [email, setEmail] = useState(initialData.email || "");
  const [phone, setPhone] = useState(initialData.phone || "");

  // Handle form submit
  const onSubmit = (e) => {
    e.preventDefault();
    const user = { name, email, phone };
    handleSubmit(user);
  };

  return (
    <form
      onSubmit={onSubmit}
      className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md"
    >
      <div className="mb-4">
        <label className="block text-gray-700">Name</label>
        <input
          className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-400"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Email</label>
        <input
          className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-400"
          value={email}
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Phone</label>
        <input
          type="text"
          className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-400"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Phone"
          required
        />
      </div>

      {/* Submit button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className={`w-full p-2 rounded-lg text-white ${
          isSubmitting ? "bg-gray-400" : "bg-blue-500 hover:bg-blue-600"
        } transition-all`}
      >
        {isSubmitting
          ? "Submitting..."
          : initialData.name
          ? "Update User"
          : "Add User"}
      </button>
    </form>
  );
}

export default UserForm;

"use client";

import { useState } from "react";
import { addNewName } from "../lib/serverActions";

export default function AddNameModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [isPresent, setIsPresent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (name) {
      await addNewName(name, isPresent);
      setName("");
      setIsPresent(false);
      setIsOpen(false);
    }
  };

  // Function to handle closing modal on background click
  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <button
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
        onClick={() => setIsOpen(true)}
      >
        Add New Name
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50"
          onClick={handleClose}
        >
          <div
            className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-lg font-bold mb-4">Add New Name</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block mb-2">
                  Name:
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full border px-3 py-2 rounded"
                  placeholder="Enter name"
                  required
                />
              </div>
              <div className="mb-4 flex items-center gap-3">
                <label htmlFor="present">Is Present:</label>
                <input
                  type="checkbox"
                  id="present"
                  className="w-4 h-4"
                  checked={isPresent}
                  onChange={(e) => setIsPresent(e.target.checked)}
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-2 mr-2 bg-gray-300 rounded"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-500 text-white rounded"
                >
                  Add
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

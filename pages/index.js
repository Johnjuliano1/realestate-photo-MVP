// pages/index.js
import { useState } from 'react';

export default function Home() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6">Real Estate Photo Editor (MVP)</h1>

      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        className="mb-4"
      />

      {selectedImage && (
        <div className="mt-4">
          <p className="mb-2 text-gray-700">Preview:</p>
          <img
            src={selectedImage}
            alt="Preview"
            className="rounded-xl shadow-md max-w-md"
          />
        </div>
      )}
    </div>
  );
}
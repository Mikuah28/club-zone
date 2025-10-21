"use client";

export default function Card({ image, title, category, description, schedule, participants }) {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden w-72">
      <img src={image} alt={title} className="w-full h-40 object-cover" />

      <div className="p-4 space-y-2">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-semibold">{title}</h2>
          <span className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded-md">
            {category}
          </span>
        </div>

        <p className="text-sm text-gray-600">{description}</p>

        <div className="flex justify-between items-center text-sm text-gray-500 mt-3">
          <p>{schedule}</p>
          <p>
            {participants} <span className="text-gray-400">Peserta</span>
          </p>
        </div>
      </div>
    </div>
  );
}

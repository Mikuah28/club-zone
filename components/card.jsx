"use client";
import { CalendarDays, Clock, MapPin, Users } from "lucide-react";
import Link from "next/link";

export default function Card({ slug, image, title, category, description, schedule, participants }) {
  return (
    <Link href={`/eskul/${slug}`}>
      <div className="max-w-sm mx-auto bg-white rounded-2xl shadow-md overflow-hidden border border-gray-200 transition hover:shadow-lg hover:-translate-y-1 duration-200">
        {/* Gambar */}
        <div className="relative">
          <img
            src={image}
            alt={title}
            className="w-full h-44 object-cover"
          />
          <span className="absolute top-3 right-3 bg-green-100 text-green-600 text-[10px] font-semibold px-2 py-1 rounded-full">
            {category}
          </span>
        </div>

        {/* Isi Card */}
        <div className="p-5 space-y-3">
          <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
          <p className="text-gray-600 text-sm leading-snug">
            {description}
          </p>

          {/* Detail Jadwal */}
          <div className="pt-2 border-t border-gray-100 space-y-2 text-xs text-gray-700">
            <div className="flex items-center gap-2">
              <Clock size={14} className="text-green-600" />
              <span>{schedule}</span>
            </div>
            <div className="flex items-center gap-2">
              <Users size={14} className="text-green-600" />
              <span>{participants} Peserta</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

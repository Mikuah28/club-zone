"use client";
import { CalendarDays, Clock, MapPin, Users } from "lucide-react"

export default function Card({ image, title, category, description, schedule, participants }) {
  return (
        <div className="max-w-xs bg-white rounded-xl shadow-md overflow-hidden border border-gray-200">
          {/* Gambar */}
          <div className="relative">
            <img
              src="/basket.jpg"
              alt="Basket"
              className="w-full h-36 object-cover"
            />
          </div>

          {/* Isi Card */}
          <div className="p-4 space-y-2">
            <span className="  left-2 bg-green-200 text-green-600 text-[10px] font-semibold px-2  rounded-full">
              Olahraga
            </span>
            <h3 className="text-base font-semibold text-gray-800 leading-tight mt-1">
              Basket
              
            </h3>
            
            
            <p className="text-gray-500 text-xs">
              Melatih kerja sama tim, ketangkasan, dan semangat sportivitas melalui permainan bola basket.
            </p>

            <div className="space-y-1.5 text-xs text-gray-600">
              <div className="flex items-center gap-1.5">
                <Clock size={13} />
                <span>Selasa & Jumat, 15.00–17.00</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Users size={13} />
                <span>37 Peserta</span>
              </div>
            </div>
          </div>
        </div>
  );
}

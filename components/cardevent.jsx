import { CalendarDays, Clock, MapPin, Users } from "lucide-react"

export default function EventCard() {
  return (
    <div className="max-w-xs bg-white rounded-xl shadow-md overflow-hidden border border-gray-200">
      {/* Gambar */}
      <div className="relative">
        <img
          src="/basket.jpg"
          alt="Turnamen Basket"
          className="w-full h-36 object-cover"
        />
      </div>

      {/* Isi Card */}
      <div className="p-4 space-y-2">
        <span className="  left-2 bg-green-200 text-green-600 text-[10px] font-semibold px-2  rounded-full">
          Mendatang
        </span>
        <h3 className="text-base font-semibold text-gray-800 leading-tight mt-1">
          Turnamen Basket Antar Kelas
          
        </h3>
        
        
        <p className="text-gray-500 text-xs">
          Pertandingan basket antar kelas untuk memperebutkan piala bergilir
        </p>

        <div className="space-y-1.5 text-xs text-gray-600">
          <div className="flex items-center gap-1.5">
            <CalendarDays size={13} />
            <span>25 Agustus 2025</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Clock size={13} />
            <span>14.00–18.00</span>
          </div>
          <div className="flex items-center gap-1.5">
            <MapPin size={13} />
            <span>Lapangan Taruna Bhakti</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Users size={13} />
            <span>37 Peserta</span>
          </div>
        </div>

        <button className="w-20 bg-orange-500 hover:bg-orange-600 text-white text-sm py-1.5 rounded-lg mt-2 transition">
          Daftar
        </button>
      </div>
    </div>
  )
}

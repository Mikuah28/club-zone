import { Facebook, Instagram, Mail, Phone, MapPin } from "lucide-react";

export default function footer(){
    return(
    <footer className="bg-[#0f172a] text-gray-300 py-10" id="kontak">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-6">
        {/* Logo & Deskripsi */}
        <div>
          <h2 className="text-2xl font-bold">
            Club<span className="text-orange-500">Zone</span>
          </h2>
          <p className="mt-3 text-sm">
            Platform manajemen ekstrakurikuler sekolah terintegrasi dengan
            sistem absensi digital.
          </p>
          <div className="flex gap-3 mt-4">
            <a href="#" className="hover:text-orange-500">
              <Facebook size={20} />
            </a>
            <a href="#" className="hover:text-orange-500">
              <Instagram size={20} />
            </a>
          </div>
        </div>

        {/* Tautan Cepat */}
        <div>
          <h3 className="font-semibold mb-3">Tautan cepat</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-orange-500">Beranda</a></li>
            <li><a href="#" className="hover:text-orange-500">Fitur</a></li>
            <li><a href="#" className="hover:text-orange-500">Ekstrakurikuler</a></li>
            <li><a href="#" className="hover:text-orange-500">Testimoni</a></li>
            <li><a href="#" className="hover:text-orange-500">Kontak</a></li>
          </ul>
        </div>

        {/* Dukungan */}
        <div>
          <h3 className="font-semibold mb-3">Dukungan</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-orange-500">Pusat Bantuan</a></li>
            <li><a href="#" className="hover:text-orange-500">Kebijakan Privasi</a></li>
            <li><a href="#" className="hover:text-orange-500">Syarat & Ketentuan</a></li>
          </ul>
        </div>

        {/* Hubungi Kami */}
        <div>
          <h3 className="font-semibold mb-3">Hubungi Kami</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <Mail size={16} /> ClubZone22@gmail.com
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} /> (021) 1234-5678
            </li>
            <li className="flex items-start gap-2">
              <MapPin size={40} />
              Jl. Pekapuran, RT.02/RW.06, Curug, Kec. Cimanggis, Kota Depok,
              Jawa Barat 16953
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-10 text-center text-xs text-gray-500">
        © 2025 ClubZone. All rights reserved.
      </div>
    </footer>
    )
}
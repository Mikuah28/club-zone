"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { Calendar, MapPin, Users, User } from "lucide-react";
import Sidebar from "./sidebar";


export default function DetailEskul({ eskul }) {
  const router = useRouter();

  // Ambil currentUser dari localStorage (safe for Next.js)
  const currentUser =
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("currentUser"))
      : null;

  // Cek apakah user sudah daftar eskul ini
  const sudahDaftar =
    currentUser?.extracurricular === eskul.title;

  // Fungsi daftar eskul
  // const handleDaftar = () => {
  //   const user = JSON.parse(localStorage.getItem("currentUser"));

  //   if (!user) {
  //     alert("Silakan login terlebih dahulu.");
  //     router.push("/login");
  //     return;
  //   }

  //   user.extracurricular = eskul.title;
  //   localStorage.setItem("currentUser", JSON.stringify(user));

  //   alert(`Kamu berhasil mendaftar eskul ${eskul.title}!`);
  //   router.push("/main");
  // };

  // Fungsi absen (keluar dari eskul)
  const handleAbsen = () => {
    const user = JSON.parse(localStorage.getItem("currentUser"));
    user.extracurricular = eskul.title;

    localStorage.setItem("currentUser", JSON.stringify(user));
    alert(`Kamu telah absen dari eskul ${eskul.title}.`);
    router.push("/main");
  };

  return (
    <div className="flex min-h-screen right-0 bg-gray-50">
      {/* Sidebar */}
      <Sidebar />

      {/* Konten Utama */}
      <main className="flex-1 overflow-y-auto ml-20">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-sm p-6">

          {/* Tombol Back */}
          <button
            onClick={() => router.back()}
            className="text-green-600 flex items-center gap-2 mb-6 hover:text-green-700 transition"
          >
            <span className="text-2xl">«</span> Kembali
          </button>

          {/* Gambar */}
          <div className="rounded-xl overflow-hidden shadow-md">
            <img
              src={eskul.image}
              width={900}
              height={500}
              alt={eskul.title}
              className="w-full h-64 object-cover"
            />
          </div>

          {/* Judul */}
          <div className="flex justify-between items-center mt-6">
            <h1 className="text-3xl font-bold text-gray-900">
              {eskul.title}
            </h1>
            <span className="bg-green-100 text-green-700 px-4 py-1 rounded-full text-sm font-semibold">
              {eskul.category}
            </span>
          </div>

          {/* Deskripsi */}
          <p className="text-gray-700 mt-4 leading-relaxed">
            {eskul.description}
          </p>

          <hr className="my-6 border-gray-200" />

          {/* Jadwal Latihan */}
          <h2 className="text-xl font-semibold mb-4 text-gray-800">
            Jadwal Latihan
          </h2>

          <div className="space-y-3 text-gray-700">
            <div className="flex items-center gap-3">
              <Calendar className="w-5 h-5 text-green-600" />
              <span>{eskul.schedule}</span>
            </div>

            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-green-600" />
              <span>{eskul.location}</span>
            </div>

            <div className="flex items-center gap-3">
              <Users className="w-5 h-5 text-green-600" />
              <span className="font-semibold">
                {eskul.participants} Peserta
              </span>
            </div>

            <div className="flex items-center gap-3">
              <User className="w-5 h-5 text-green-600" />
              <span>{eskul.coach}</span>
            </div>
          </div>

          {/* Tombol Daftar / Absen */}
          <div className="ml-[75%]">
            {sudahDaftar ? (
              <button
                onClick={handleAbsen}
                className="mt-8 w-50 bg-red-600 hover:bg-red-700 text-white font-medium py-3 rounded-lg transition"
              >
                Absen
              </button>
            ) : (
              <button
                onClick={() => router.push(`/daftarEskul?eskul=${eskul.title}`)}
                className="mt-8 w-50 bg-green-600 hover:bg-green-700 text-white font-medium py-3 rounded-lg transition"
              >
                Daftar
              </button>

            )}
          </div>

        </div>
      </main>
    </div>
  );
}

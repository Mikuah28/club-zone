"use client";
import { useState } from "react";
import Sidebar from "@/components/sidebar";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const [page, setPage] = useState("home");

  const isiCard = [
    {
      image: "/basket.jpg",
      title: "Basket",
      category: "Olahraga",
      description: "Melatih kerja sama tim dan sportivitas melalui permainan bola basket.",
      schedule: "Selasa & Jumat, 15.00–17.00",
      participants: 37,
    },
    {
      image: "/badmin.jpg",
      title: "Badmin",
      category: "Olahraga",
      description: "Melatih kerja sama tim dan sportivitas melalui permainan bulu tangkis.",
      schedule: "Selasa & Jumat, 15.00–17.00",
      participants: 37,
    },
  ];

 return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar onSelect={(id) => setPage(id)} />

      {/* Konten utama */}
      <main className="flex-1 p-8">
        {page === "home" && <h1 className="text-2xl font-bold">🏠 Halaman Home</h1>}
        {page === "event" && <h1 className="text-2xl font-bold">🎉 Halaman Event</h1>}
        {page === "absensi" && <h1 className="text-2xl font-bold">🕒 Halaman Absensi</h1>}
        {page === "profile" && <h1 className="text-2xl font-bold">👤 Halaman Profile</h1>}
      </main>
    </div>
  );
}

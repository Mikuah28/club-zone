"use client";
import { useState } from "react";
import Sidebar from "@/components/sidebar";
import AbsensiPage from "@/components/absensi";
import ProfilePage from "@/components/profile";

export default function Home() {
  const [page, setPage] = useState("home");

  const renderPage = () => {
    switch (page) {
      case "home": return;
      case "event": return ;
      case "absensi": return <AbsensiPage />;
      case "profile": return <ProfilePage />;
      default: return ;
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar onSelect={(id) => setPage(id)} />
      <main className="flex-1 p-8 ml-60">{renderPage()}</main>
    </div>
  );
}

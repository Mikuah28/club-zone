"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function ProfilePage() {
  const [image, setImage] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);
  const router = useRouter();

  // Ambil data setelah client load
  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedImage = localStorage.getItem("profileImage");
      if (savedImage) setImage(savedImage);

      const currentUserData = localStorage.getItem("currentUser");
      if (currentUserData) setCurrentUser(JSON.parse(currentUserData));
    }
  }, []);

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result);
      localStorage.setItem("profileImage", reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("profileImage");
    router.push("/");
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-green-700 mb-6">Profile</h1>

      {/* Profile Header */}
      <div className="bg-white rounded-xl shadow p-6 flex flex-row gap-6">
        <img
          src="https://www.shutterstock.com/image-vector/blank-avatar-photo-place-holder-600nw-1095249842.jpg"
          className="w-36 h-36 object-cover rounded-full border"
          alt="Profile"
        />

        <div className="flex flex-col justify-center">
          <p className="font-bold text-2xl text-black">
            {currentUser?.username || "User"}
          </p>
          <p className="text-gray-500">Siswa XI RPL 3</p>
        </div>
      </div>


      {/* Data Pribadi */}
      <div className="bg-white rounded-xl shadow p-6 mt-6">
        <h1 className="text-black font-bold">Data Pribadi</h1>
        <br />

        <ul className="text-black">
          <li>NISN: {currentUser?.nisn || "12345678"}</li>
          <li>Nama Lengkap: {currentUser?.username || "User"}</li>
          <li>Kelas: XI RPL 3</li>
          <li>Email: {currentUser?.email || "Tidak ada email"}</li>
          <li>No. Telpon: 0812345678</li>
        </ul>
      </div>

      {/* Ekstrakurikuler */}
      <div className="bg-white rounded-xl shadow p-6 mt-6">
        <h1 className="text-black font-bold">Ekstrakurikuler</h1>
        <br />

        <ul className="text-black list-disc ml-4">
          <li>{currentUser?.extracurricular}</li>
        </ul>
      </div>

      {/* Pengaturan */}
      <div className="bg-white rounded-xl shadow p-6 mt-6">
        <h1 className="text-black font-bold">Pengaturan Akun</h1>
        <br />

        <div className="flex flex-row gap-4">
          <label className="py-4 px-6 bg-green-700 text-white rounded-2xl cursor-pointer inline-block">
            Edit Photo Profile
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="hidden"
            />
          </label>

          <button
            className="py-4 px-6 bg-red-700 text-white rounded-2xl"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

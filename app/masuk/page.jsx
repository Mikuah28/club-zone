"use client";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#3F7D58] to-[#72E3A0] flex items-center justify-center">
      <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-xl flex flex-col md:flex-row items-center w-[90%] max-w-4xl p-8">
        
        {/* Bagian Kiri */}
        <div className="flex-1 text-white px-6">
          <h1 className="text-3xl font-bold">
            Club<span className="text-orange-500">Zone</span>
          </h1>
          <p className="mt-2 font-medium">
            Masukan Username & Password <br /> untuk mengakses sistem
          </p>

          {/* Form Login */}
          <form className="mt-6 space-y-4">
            <div>
              <label className="block mb-1">Username</label>
              <input
                type="text"
                placeholder="NIPD"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 text-black bg-white"
              />
            </div>

            <div>
              <label className="block mb-1">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Masukan password"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 text-black bg-white"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-2.5 text-gray-500"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 rounded-lg">
              Masuk
            </button>
          </form>

          <p className="mt-4 text-sm">
            Belum punya akun?{" "}
            <a href="/register" className="text-orange-400 hover:underline">
              Daftar di sini
            </a>
          </p>
        </div>

        {/* Bagian Kanan (gambar ilustrasi) */}
        <div className="flex-1 hidden md:flex justify-center">
          <img
            src="./login.png"
            alt="Login Illustration"
            className="w-72"
          />
        </div>
      </div>
    </div>
  );
}

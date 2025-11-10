"use client";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Eye, EyeOff } from "lucide-react";

export default function LoginForm({ onLoginSuccess }) {
    const [showPassword, setShowPassword] = useState(false);
  const [viewConfirmPassword, setViewConfirmPassword] = useState(false); // diperbaiki
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();

    if (!username || !password) {
      setMessage("Username dan password tidak boleh kosong.");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];

    // Cari pengguna berdasarkan username & password
    const foundUser = users.find(
      (user) => user.username === username && user.password === password
    );

    if (foundUser) {
      // Simpan status login
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem(
        "currentUser",
        JSON.stringify({
          username: foundUser.username,
          email: foundUser.email,
          extracurricular: foundUser.extracurricular || null,
        })
      );

      alert("Login berhasil!");

      setUsername("");
      setPassword("");

      // Redirect
      router.push("/main");

      if (onLoginSuccess) {
        onLoginSuccess(username);
      }
    } else {
      setMessage("username atau password salah.");
    }
  };

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
          <form onSubmit={handleLogin} className="mt-6 space-y-4">
            <div>
              <label className="block mb-1">Username</label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Masukkan username"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 text-black bg-white"
              />
            </div>

            <div>
              <label className="block mb-1">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
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

            <button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 rounded-lg">
              Masuk
            </button>
          </form>

          <p className="mt-4 text-sm">
            Belum punya akun?{" "}
            <Link href="/register" className="text-orange-400 hover:underline">
              Daftar di sini
            </Link>
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

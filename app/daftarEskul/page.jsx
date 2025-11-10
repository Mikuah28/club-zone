"use client";
import { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";

export default function FormPendaftaran() {
  const [formData, setFormData] = useState({
    nama: "",
    kelas: "",
    telepon: "",
    alasan: "",
  });

  const searchParams = useSearchParams();
  const router = useRouter();

  // ✅ Nama eskul dari query
  const eskul = searchParams.get("eskul") || "Eskul";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.nama || !formData.kelas || !formData.telepon) {
      alert("Harap isi semua field wajib!");
      return;
    }

    // ✅ Simpan eskul ke currentUser
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));

    if (currentUser) {
      currentUser.extracurricular = eskul;
      localStorage.setItem("currentUser", JSON.stringify(currentUser));
    }

    alert(`Pendaftaran ${eskul} berhasil!`);
    router.push("/main");
  };

  const handleCancel = () => {
    router.back();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-2xl shadow p-6">
        <h2 className="text-2xl font-bold mb-2 text-gray-800 text-center">
          Form Pendaftaran
        </h2>

        <p className="text-sm mb-6 text-gray-600 text-center">
          Isi data di bawah ini untuk mendaftar ke ekstrakurikuler{" "}
          <span className="text-blue-600 font-semibold">{eskul}</span>
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Nama */}
          <div>
            <label className="block text-gray-700 mb-1">Nama Lengkap</label>
            <input
              type="text"
              name="nama"
              value={formData.nama}
              onChange={handleChange}
              className="w-full border rounded-lg p-2 text-black focus:ring-green-500"
              placeholder="Masukkan nama lengkap"
            />
          </div>

          {/* Kelas */}
          <div>
            <label className="block text-gray-700 mb-1">Kelas</label>
            <select
              name="kelas"
              value={formData.kelas}
              onChange={handleChange}
              className="w-full border rounded-lg p-2 text-black focus:ring-green-500"
            >
              <option value="">Pilih Kelas</option>
              <option value="X">X</option>
              <option value="XI">XI</option>
              <option value="XII">XII</option>
            </select>
          </div>

          {/* Telepon */}
          <div>
            <label className="block text-gray-700 mb-1">Nomor Telepon</label>
            <input
              type="text"
              name="telepon"
              value={formData.telepon}
              onChange={handleChange}
              className="w-full border rounded-lg p-2 text-black focus:ring-green-500"
              placeholder="Contoh: 081234567890"
            />
          </div>

          {/* Alasan */}
          <div>
            <label className="block text-gray-700 mb-1">Alasan Bergabung</label>
            <textarea
              name="alasan"
              value={formData.alasan}
              onChange={handleChange}
              rows="3"
              className="w-full border rounded-lg p-2 text-black focus:ring-green-500"
              placeholder="Mengapa kamu ingin bergabung?"
            ></textarea>
          </div>

          {/* Tombol */}
          <div className="flex justify-end space-x-3 mt-4">
            <button
              type="button"
              onClick={handleCancel}
              className="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-300"
            >
              <b>Batal</b>
            </button>

            <button
              type="submit"
              className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
            >
              <b>Daftar</b>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

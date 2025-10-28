export default function AbsensiPage() {
  // Data dummy (nanti bisa diganti dari database)
  const totalHadir = 12;
  const totalTidakHadir = 3;
  const persentase = Math.round((totalHadir / (totalHadir + totalTidakHadir)) * 100);

  const riwayat = [
    { tanggal: "05-08-2025", kegiatan: "Latihan Basket", status: "Hadir" },
    { tanggal: "02-08-2025", kegiatan: "Latihan Basket", status: "Tidak Hadir" },
    { tanggal: "30-07-2025", kegiatan: "Latihan Basket", status: "Hadir" },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-green-700 mb-6">
        Riwayat Absensi - Basket
      </h1>

      {/* Kartu statistik */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        <div className="bg-white border-l-4 border-green-500 rounded-xl shadow p-4 text-center">
          <h2 className="font-semibold text-orange-500">Total Hadir</h2>
          <p className="text-3xl font-bold text-green-600 mt-2">{totalHadir}</p>
        </div>

        <div className="bg-white border-l-4 border-red-500 rounded-xl shadow p-4 text-center">
          <h2 className="font-semibold text-orange-500">Total Tidak Hadir</h2>
          <p className="text-3xl font-bold text-red-600 mt-2">{totalTidakHadir}</p>
        </div>

        <div className="bg-white border-l-4 border-yellow-400 rounded-xl shadow p-4 text-center">
          <h2 className="font-semibold text-orange-500">Persentase Kehadiran</h2>
          <p className="text-3xl font-bold text-yellow-500 mt-2">{persentase}%</p>
        </div>
      </div>

      {/* Tabel Riwayat */}
      <div className="bg-white rounded-xl shadow p-6">
        <h2 className="font-semibold text-orange-500 mb-4">Riwayat Absensi</h2>
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-green-100 text-center">
              <th className="p-3 text-black">Tanggal</th>
              <th className="p-3 text-black">Kegiatan</th>
              <th className="p-3 text-black">Status</th>
            </tr>
          </thead>
          <tbody>
            {riwayat.map((item, i) => (
              <tr key={i} className="border-t text-center">
                <td className="p-3 text-black">{item.tanggal}</td>
                <td className="p-3 text-black">{item.kegiatan}</td>
                <td className="p-3 font-semibold">
                  {item.status === "Hadir" ? (
                    <span className="text-green-600">Hadir</span>
                  ) : (
                    <span className="text-red-500">Tidak Hadir</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

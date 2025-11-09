import { CalendarX } from "lucide-react";
import Card from "./card";

export default function HomePage() {
    const totalHadir = 12;
    const totalTidakHadir = 3;

    const riwayat = [
        { tanggal: "05-08-2025", kegiatan: "Latihan Basket", status: "Hadir" },
        { tanggal: "02-08-2025", kegiatan: "Latihan Basket", status: "Tidak Hadir" },
        { tanggal: "30-07-2025", kegiatan: "Latihan Basket", status: "Hadir" },
    ];


    return (
        <div className="overflow-x-hidden">
            <h1 className="text-2xl font-bold text-green-700 mb-6">
                Selamat Datang, Wahid!
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                <div className="bg-white border-l-4 border-red-500 rounded-xl shadow p-4 text-center">
                <h2 className="font-semibold text-orange-500">Ekstrakulikuler</h2>
                <p className="text-3xl font-bold text-black mt-2">Basket</p>
                </div>

                <div className="bg-white border-l-4 border-red-500 rounded-xl shadow p-4 text-center">
                <h2 className="font-semibold text-orange-500">Hadir</h2>
                <p className="text-3xl font-bold text-black mt-2">{totalHadir}</p>
                </div>

                <div className="bg-white border-l-4 border-red-500 rounded-xl shadow p-4 text-center">
                <h2 className="font-semibold text-orange-500">Tidak Hadir</h2>
                <p className="text-3xl font-bold text-black mt-2">{totalTidakHadir}</p>
                </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
                <div className="bg-white rounded-xl w-[600px] shadow p-6">
                    <h2 className="font-semibold text-orange-500 mb-4">Kegiatan Mendatang</h2>
                    <div className="flex flex-row items-center justify-center mt-16">
                        <CalendarX size={64} className="text-gray-300" />
                        <div className="w-90">
                            <p className=" text-gray-300 ml-5">kamu tidak ada kegiatan mendatang untuk saat ini</p>
                        </div>
                    </div>
                </div>
                <div className="bg-white rounded-xl ml-5 w-full shadow p-6">
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
            <div className="mt-10">
                <input type="text" className="border border-black rounded-2xl mb-10 h-10 w-80 text-black"/>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" >
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                </div>
            </div>
        </div>
    )
}
import Sidebar from "./sidebar"
import { ChevronsLeft, Users, CalendarClock, MapPinned, User  } from 'lucide-react';


export default function EventPage() {
    return (
        <div className="ml-52">
            <ChevronsLeft color="#3F7D58" size={64} />
            <img src="basket.jpg" alt="" srcset="" className="w-250 h-150 ml-33 rounded-2xl " />
                <div className="text-black">
                    <h1 className="font-bold text-5xl text-black mt-10 ml-33">Basket</h1>
                    <div className="ml-33 mt-7 text-2xl shadow-sm ">
                        <p>Ekstrakurikuler Basket melatih kerja sama tim, ketangkasan, </p>
                        <p>dan semangat sportivitas melalui permainan bola basket. </p>
                        <p>Anggota akan berlatih teknik dasar, strategi permainan, dan </p>
                        <p>berpartisipasi dalam pertandingan antar sekolah.</p>
                    </div>
                    <h2 className="text-3xl font-bold mt-10 ml-33">Jadwal Latihan</h2>
                    <div className="ml-33 flex mt-10 ">
                        <CalendarClock size={30}/>
                        <p className="px-4  ">Sabtu, 16.00 - 18.00</p>
                    </div>
                    <div className="ml-33 flex mt-3 ">
                        <MapPinned size={30}/>
                        <p className="px-4  ">SMK Taruna Bhakti</p>
                    </div>
                    <div className="ml-33 flex mt-3 ">
                        <Users size={30}/>
                        <p className="px-4  ">37 Peserta</p>
                    </div>
                    <div className="ml-33 flex mt-3 ">
                        <User size={30}/>
                        <p className="px-4  ">Yosep Wijaya</p>
                    </div>
                    <div className="flex">
                        <button
                        type="submit"
                        className="ml-230 w-30 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.3) ,
            "
                        >
                        <b>Daftar</b>
                        </button>
                        <button
                        type="submit"
                        className="ml-5 w-30 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.3) ,"
                        >
                        <b>Absensi</b>
                        </button>
                    </div>
                </div>
        </div>
    )
}
export default function ProfilePage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-green-700 mb-6">
       Profile
      </h1>
      <div className="bg-white rounded-x1 shadow p-6 flex flex-row gap-6">
        <img src="././profile.jpg" className="w-36 rounded-full" alt="" />
        <div className="flex flex-col justify-center">
          <p className="font-bold text-2xl text-black">Wahid Pratama</p>
          <p className="text-gray-500"> Siswa XI RPL 3</p>
        </div>
      </div>
      <div className="bg-white rounded-xl shadow p-6">
        <h1 className="text-black font-bold">Data Pribadi</h1><br />
        <ul className="text-black">
          <li>NISN: 12345678</li>
          <li>Nama Lengkap: Wahid Pratama</li>
          <li>Kelas: XI RPL 3</li>
          <li>Email: Wahidpratama@gmail.com</li>
          <li>No.Telpon: 0812345678</li>
        </ul>
      </div>
      <div className="bg-white rounded-xl shadow p-6">
        <h1 className="text-black font-bold">Data Pribadi</h1><br />
        <ul className="text-black list-disc">
          <li>Basket (selasa & Jumat, 15.00-17.00)</li>
          <li>English Club (Rabu, 14.00-16.00)</li>
        </ul>
      </div>
      <div className="bg-white rounded-xl shadow p-6">
        <h1 className="text-black font-bold">Pengaturan Akun</h1><br />
        <div className=" gap-4 flex flex-row">
           <button className="py-4 px-6 bg-green-700 rounded-2xl">Edit Profile</button>
           <button className="py-4 px-6 bg-red-700 rounded-2xl">Logout</button>
        </div>
      </div>
    </div>
  );
}

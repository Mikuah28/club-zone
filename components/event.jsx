import Card from "./cardevent"
import { Search } from "lucide-react";

export default function event() {

    return (
        <div>
            <h1 className="text-2xl text-green-900 font-bold mb-10">Selamat Datang, Wahid</h1>
            <input type="text" className="border border-black rounded-2xl mb-10 h-10 w-80 text-black"/>
            <div className="grid grid-cols-4 gap-6" >
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            </div>
        </div>
    )

}
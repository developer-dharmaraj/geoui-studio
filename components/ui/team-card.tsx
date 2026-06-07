import { Phone } from "lucide-react";
import Image from "next/image";
import { FaLinkedinIn, FaPhoneAlt } from "react-icons/fa";
import { FaLinkedin, FaWhatsapp } from "react-icons/fa6";
import { FiLinkedin } from "react-icons/fi";
import { LuLinkedin } from "react-icons/lu";

export default function TeamCard({ member }: { member: any }) {
    return (
        <div className="rounded-xl p-6 w-full cursor-pointer min-w-[328px] h-full max-w-sm mx-auto flex flex-col items-center transition-all duration-500 border group relative overflow-hidden bg-[#111] border-[#333] hover:shadow-[0_20px_50px_rgba(0,0,0,0.6)] shrink-0 snap-center">
            <div className="flex justify-between items-center w-full mb-8 relative z-10">
                <span className="text-xs font-bold uppercase tracking-widest text-[#555]">{member.role}</span>
            </div>
            <div className="relative w-48 h-48 md:w-56 md:h-56 mb-8 overflow-hidden rounded-full border-[6px] shadow-inner transition-all duration-500 border-[#222]">
                <Image src={member.image} alt={member.name} fill
                    className="object-cover transition-all duration-700 group-hover:scale-110"
                />
            </div>
            <div className="w-full text-left mt-auto flex items-center justify-between relative z-10">
                <div>
                    <p className="text-xs font-bold hidden mb-1 tracking-tight text-blue-400">{member.hashtag}</p>
                    <h3 className="text-md md:text-2xl font-bold tracking-tight capitalize text-white">{member.name}</h3>
                </div>
                <div className="flex gap-2">
                    <a href={`tel:${member.phone}`} className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 shadow-sm bg-[#333] text-white hover:bg-blue-600">
                        <FaPhoneAlt size={18} />
                    </a>
                    <a href={`https://wa.me/${member.whatsapp}`} target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 shadow-sm bg-[#333] text-white hover:bg-green-500">
                        <FaWhatsapp size={18}/>
                    </a>
                    <a href={member.linkedin} target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 shadow-sm bg-[#333] text-white hover:bg-[#0077b5]">
                        <FaLinkedinIn size={18} />
                    </a>
                </div>
            </div>
        </div>
    )
}
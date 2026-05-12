import { Header } from "@/components/Header";
import Link from "next/link";
import { IoMail, IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";


export default function Contato() {
    return (
        <div className="bg-zinc-950 min-h-screen" >
            
            <Header/>

            <div className="contato-page-div" >

                <p className="text-gray-300 text-lg text-center mt-4 " > <IoLogoLinkedin className="inline mr-2" /> <Link href="https://www.linkedin.com/in/rafael-j-rocha/" target="_blank" className="text-indigo-600 hover:underline" >Rafael Rocha</Link></p>
                <p className="text-gray-300 text-lg text-center mt-4 " > <IoLogoGithub className="inline mr-2" /> <Link href="https://github.com/rf4elo" target="_blank" className="text-indigo-600 hover:underline" >rf4elo</Link></p>

            </div>

        </div>
    )
}


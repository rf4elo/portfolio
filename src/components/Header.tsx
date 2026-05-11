
import Image from "next/image";
import Link from "next/link";



export function Header() {
    return (
        <header className="header-component bg-zinc-900 " >
            <h1>RAFAEL</h1>
            <nav>
                <Link href={"/"} >Home</Link>
                <Link href={"/projetos"} >Projetos</Link>
                <Link href={"/sobre"} >Sobre</Link>
                <Link href={"/contato"} >Contato</Link>
            </nav>
        </header>
    )
}

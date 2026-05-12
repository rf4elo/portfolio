
import { Header } from "@/components/Header";
import Link from "next/link";




export default function Projetos() {
    return (
        <div className="bg-zinc-950 min-h-screen ">
            
            <Header/>

            <div className="projetos-page-div" >

                <div className="projetos" >
                    <h1>Primeiro projeto</h1>
                    <p>O meu primeiro projeto é uma calculadora básica feita com javascript. Este projeto foi feito com o intuito de praticar os conceitos de lógica de programação básica e hospedagem com o <Link href={"https://docs.github.com/pt/pages"} target="_blank" className="text-indigo-600 hover:underline" >Github Pages</Link>.</p>
                    <p>Esse projeto está disponível clicando <Link href={"https://rf4elo.github.io/calculadora/"} target="_blank" className="text-indigo-600 hover:underline" >aqui!</Link></p>
                </div>

            </div>

        </div>
    )
}


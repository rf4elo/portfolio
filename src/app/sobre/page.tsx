
import { Header } from "@/components/Header";
import { PageNotFound } from "@/components/PageNotFound";



export default function Sobre() {
    return (
        <div className="bg-zinc-950 min-h-screen" >
            <Header/>

            <div className="sobre-page-div " >

                <div className="min-w-100 w-2/5 text-justify px-7 py-6 " >
                        <h1 className="text-blue-600 text-6xl text-center font-bold mb-5" >SOBRE</h1>
                        <p className="indent-10 mb-5 " >Eu sou <span className="text-blue-600 font-semibold" >Rafael</span>, um desenvolvedor full-stack iniciante que busca sempre aprimorar minhas habilidades e contribuir para projetos significativos.</p>
                    
                        <h2 className="text-blue-600 text-3xl text-center font-bold" >Tecnologias que eu utilizo.</h2>
                        <p className="indent-10 " >No frontend eu utilizo: <span className="text-blue-600 font-semibold" >Next.js</span> com <span className="text-blue-600 font-semibold" >TypeScript</span>, para a construção de interfaces modernas, e <span className="text-blue-600 font-semibold" >Tailwind CSS</span> para a estilização dos componentes.</p>
                        <p className="indent-10 " >Já para o backend, utilizo <span className="text-blue-600 font-semibold" >NestJS</span> para criar APIs robustas e escaláveis.</p>
                </div>

            </div>

        </div>
    )
}


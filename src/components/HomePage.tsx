




export function MainPage() {
    return (
        <main className="main-page-div" >
            <div className="flex flex-col justify-center gap-3 " >
                <h1 className="text-6xl font-bold" >Olá! Eu sou <span className="text-blue-600" >RAFAEL ROCHA.</span></h1>
                <h2 className="text-xl" >Eu sou um Web Developer iniciante que busco desenvolver minhas habilidades no <span className="text-blue-600 font-semibold" >Mundo Dev.</span></h2>    
            <button className="download-btn " >
                Baixar CV
            </button>
            </div>
            <div className="border-blue-600 border-4 rounded-full p-2 " >
                <img className="rounded-full" alt="Rafael José da Rocha" src="https://avatars.githubusercontent.com/u/91016809?s=400&u=fda813bd74d6b7195147f3e2fb476a186e07f346&v=4" />
            </div>
            
        </main>
    )
}

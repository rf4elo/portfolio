import { Header } from "@/components/Header";
import { MainPage } from "@/components/HomePage";




export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white" >
      <Header/>

      <MainPage/>

    </main>
  )
}


import {Navbar} from "@/components/header";
import {Footer} from "@/components/footer"
import {Sections} from "@/components/sections";

export default function Home() {
  return (
    <main>
        <header>
            <Navbar/>
        </header>

        <Sections/>

        <Footer/>
    </main>
  )
}

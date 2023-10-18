import {Navbar} from "@/components/header";
import {Footer} from "@/components/footer"
import {About} from "@/components/about";
import {Sections} from "@/components/sections";
import menuC from "@/img/menuC.jpg";
import '../app/globals.css'

import Image from 'next/image';
import {Product} from "@/components/product";

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

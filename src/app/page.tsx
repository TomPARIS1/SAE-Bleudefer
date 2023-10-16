import {Navbar} from "@/components/header";
import {Footer} from "@/components/footer"
import {Sections} from "@/components/sections";
import menuC from "@/img/menuC.jpg";

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

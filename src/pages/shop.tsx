import '../app/globals.css'
import {Navbar} from "@/components/header";
import {Footer} from "@/components/footer"
import {About} from "@/components/about";
import {Sections} from "@/components/sections";
import menuC from "@/img/menuC.jpg";
import Image from 'next/image';
import {Product} from "@/components/product";

export default function Shop() {
    return (
        <main>
            <header>
                <Navbar/>
            </header>

            <Product/>

            <Footer/>
        </main>
    )
}

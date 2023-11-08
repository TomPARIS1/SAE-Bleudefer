import {Connexion} from "@/components/connexion.tsx";
import menuC from "@/img/menuC.jpg";
import '../app/globals.css'
import Image from 'next/image';
import {Product} from "@/components/product";
import bande from "@/img/bande.jpg";
import {About} from "@/components/about";
import {Navbar} from "@/components/header";
import {Footer} from "@/components/footer";

export default function connexion() {
    return (
        <main>

            <header>
                <Navbar/>
            </header>

            <About/>

            <Footer/>
        </main>
    )
}
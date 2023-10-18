import '../app/globals.css'
import {Navbar} from "@/components/header";
import {Footer} from "@/components/footer"
import {About} from "@/components/about";
import {Sections} from "@/components/sections";
import menuC from "@/img/menuC.jpg";
import Image from 'next/image';
import {Product} from "@/components/product";
import {ProductDesc} from "@/components/productDesc";

export default function ProductDetails() {
    return (
        <main>
            <header>
                <Navbar/>
            </header>

            <ProductDesc/>

            <Footer/>
        </main>
    )
}

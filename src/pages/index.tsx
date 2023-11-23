import {Navbar} from "@/components/header";
import {Footer} from "@/components/footer"
import {About} from "@/components/about";
import {Sections} from "@/components/sections";
import {Nouveautes} from "@/components/nouveautes";
import menuC from "@/img/menuC.jpg";
import '../app/globals.css'
import Image from 'next/image';
import {Product} from "@/components/product";
import bande from "@/img/bande.jpg";
import carousel1 from "@/img/carousel/carousel1.jpg";
import carousel2 from "@/img/carousel/carousel2.jpg";
import carousel3 from "@/img/carousel/carousel3.jpg";
import carousel4 from "@/img/carousel/carousel4.jpg";

import { Carousel } from 'antd';;

const contentStyle: React.CSSProperties = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};

export default function Home() {
  return (
    <main>
        <header>
            <Navbar/>
        </header>

        <div className="relative">
            <Image
                src={bande}
                width={0}
                height={0}
                alt="bande décorative"
                style={{ width: '100%', height: '25rem', objectFit: 'cover' }}
            />
            <h1 className="text-2xl absolute text-white z-10 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 p-4">
                Une promenade poétique entre Terre et Mer inspirée par la beauté de la Bretagne
            </h1>
        </div>

        <Nouveautes/>

        <Sections/>

        <Carousel autoplay className="pt-12">
            <div className="relative">
                <div className="bg-cover h-35rem">
                    <Image
                        src={carousel1}
                        alt="Description de l'image 1"
                        width={0}
                        height={0}
                        style={{ width: '100%', height:'20rem', objectFit: 'cover' }}
                    />
                </div>
            </div>
            <div className="relative">
                <div className="bg-cover h-35rem">
                    <Image
                        src={carousel2}
                        width={0}
                        height={0}
                        alt="Description de l'image 2"
                        style={{ width: '100%', height:'20rem', objectFit: 'cover' }}
                    />
                </div>
            </div>
            <div className="relative">
                <div className="bg-cover h-35rem">
                    <Image
                        src={carousel3}
                        width={0}
                        height={0}
                        alt="Description de l'image 3"
                        style={{ width: '100%', height:'20rem', objectFit: 'cover' }}
                    />
                </div>
            </div>
            <div className="relative">
                <div className="bg-cover h-35rem">
                    <Image
                        src={carousel4}
                        width={0}
                        height={0}
                        alt="Description de l'image 4"
                        style={{ width: '100%', height:'20rem', objectFit: 'cover' }}
                    />
                </div>
            </div>
        </Carousel>


        <Footer/>
    </main>
  )
}

import Image from 'next/image'
import {Navbar} from "@/components/header";
import menuB from "@/img/menuB.jpg";
import menuC from "@/img/menuC.jpg";
import menuD from "@/img/menuD.jpg";
import menuE from "@/img/menuE.jpg";
import {Footer} from "@/components/footer"
import forest from "@/img/forest.jpg";
import ocean from "@/img/ocean.jpg"

export default function Home() {
  return (
    <main>
      <header>
        <Navbar/>
      </header>

        <div className="flex items-center justify-center mt-8">
            <h1 className="text-2xl">"Une promenade poétique entre Terre et Mer inspirée par la beauté de la Bretagne"</h1>
        </div>
        <div className="flex justify-center mt-5">
            <div className="mr-2">
                <Image
                    src={menuB}
                    width={350}
                    height={350}
                    alt="Forest"
                />
            </div>
            <div className="">
                <Image
                    src={menuC}
                    width={350}
                    height={350}
                    alt="Ocean"
                />
            </div>
        </div>
        <div className="flex justify-center mt-2">
            <div className="mr-2">
                <Image
                    src={menuD}
                    width={350}
                    height={350}
                    alt="Forest"
                />
            </div>
            <div className="">
                <Image
                    src={menuE}
                    width={350}
                    height={350}
                    alt="Ocean"
                />
            </div>
        </div>

        <Footer/>
    </main>
  )
}

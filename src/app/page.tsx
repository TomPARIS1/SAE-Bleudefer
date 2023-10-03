import Image from 'next/image'
import {Navbar} from "@/components/header";
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
                    src={forest}
                    width={500}
                    height={500}
                    alt="Forest"
                />
            </div>
            <div className="">
                <Image
                    src={ocean}
                    width={500}
                    height={500}
                    alt="Ocean"
                />
            </div>
        </div>
    </main>
  )
}

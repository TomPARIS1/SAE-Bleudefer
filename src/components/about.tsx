"use client"

import Image from "next/image";
import bande from "@/img/bande.jpg";
import menuB from "@/img/menuB.jpg";
import menuC from "@/img/menuC.jpg";
import menuD from "@/img/menuD.jpg";
import menuE from "@/img/menuE.jpg";
import menuF from "@/img/menuF.jpg";
import Link from 'next/link';
import about from "@/img/about.jpg";

export const About = function () {
    return (
        <>
            <h1 className="text-center text-2xl my-5">A Propos</h1>

            <div className="about flex flex-col justify-items-center px-5">
                <h2> Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo.

                    Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit amet consectetur adipisci[ng] velit, sed quia non numquam [do] eius modi tempora inci[di]dunt, ut labore et dolore magnam aliquam quaerat voluptatem.


                    Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit, qui in ea voluptate velit esse, quam nihil molestiae consequatur, vel illum, qui dolorem eum fugiat, quo voluptas nulla pariatur?


                    Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                    Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum


                    Lorem Ipsum Lorem Ipsum Lorem IpsumLorem Ipsum Lorem Ipsum Lorem Ipsum
                </h2>

                <h1 className="my-5 text-center">bleudefer@gmail.com</h1>

                <Image
                    src={about }
                    width={250}
                    height={250}
                    alt="Ocean"
                    className="border-2 border-sky-200"
                    />
            </div>

        </>
    )
}
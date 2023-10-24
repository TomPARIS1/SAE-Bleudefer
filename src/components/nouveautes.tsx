"use client"

import Image from 'next/image';
import menuC from "@/img/menuC.jpg";
import menuD from "@/img/menuD.jpg";
import menuE from "@/img/menuE.jpg";
import Link from 'next/link';

export const Nouveautes = function () {
    return (
        <>
            <h1 className="text-center text-3xl my-5">LES NOUVEAUTÉS</h1>

            <div className="flex justify-center my-8 gap-12">
                <div className="mr-12">
                    <a href="">
                        <Image
                            src={menuC}
                            width={250}
                            height={250}
                            alt="Ocean"
                            className="border-2 border-gray-200"
                        />
                    </a>
                </div>
                <div className="mr-12">
                    <a href="">
                        <Image
                            src={menuD}
                            width={250}
                            height={250}
                            alt="Ocean"
                            className="border-2 border-gray-200"
                        />
                    </a>
                </div>
                <div>
                    <a href="">
                        <Image
                            src={menuE}
                            width={250}
                            height={250}
                            alt="Ocean"
                            className="border-2 border-gray-200"
                        />
                    </a>
                </div>
            </div>
        </>
    )
}
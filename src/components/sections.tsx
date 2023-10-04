"use client"

import Image from 'next/image';
import menuB from "@/img/menuB.jpg";
import menuC from "@/img/menuC.jpg";
import menuD from "@/img/menuD.jpg";
import menuE from "@/img/menuE.jpg";
import menuF from "@/img/menuF.jpg";

export const Sections = function () {
    return (
        <>
            <div className="flex items-center justify-center mt-8">
                <h1 className="text-2xl">"Une promenade poétique entre Terre et Mer inspirée par la beauté de la Bretagne"</h1>
            </div>
            <div className="flex justify-center mt-5">
                <div className="mr-14">
                    <a href="">
                        <Image
                            src={menuB}
                            width={300}
                            height={300}
                            alt="Forest"
                            className="border-2 border-sky-200"
                        />
                    </a>
                </div>
                <div className="">
                    <a href="">
                        <Image
                            src={menuC}
                            width={300}
                            height={300}
                            alt="Ocean"
                            className="border-2 border-sky-200"
                        />
                    </a>
                </div>
            </div>
            <div className="flex justify-center mt-8">
                <div className="mr-14">
                    <a href="">
                        <Image
                            src={menuD}
                            width={300}
                            height={300}
                            alt="Forest"
                            className="border-2 border-sky-200"
                        />
                    </a>
                </div>
                <div className="">
                    <a href="">
                        <Image
                            src={menuE}
                            width={300}
                            height={300}
                            alt="Ocean"
                            className="border-2 border-sky-200"
                        />
                    </a>
                </div>
            </div>
            <div className="flex justify-center mt-8">
                <a href="">
                    <Image
                        src={menuF}
                        width={0}
                        height={0}
                        alt="menuF"
                        className="border-2 border-sky-200"
                        style={{ width: '41rem', height: '20rem', objectFit: 'none' }}
                    />
                </a>
            </div>
        </>
    )
}
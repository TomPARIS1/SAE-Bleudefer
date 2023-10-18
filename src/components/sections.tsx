"use client"

import Image from 'next/image';
import menuB from "@/img/menuB.jpg";
import menuC from "@/img/menuC.jpg";
import menuD from "@/img/menuD.jpg";
import menuE from "@/img/menuE.jpg";
import menuF from "@/img/menuF.jpg";
import Link from 'next/link';
import bande from "@/img/bande.jpg";

export const Sections = function () {
    return (
        <>

            <h1 className="text-center pt-5 text-3xl">NOS COLLECTIONS</h1>

            <div className="sections">
                <div className="flex justify-center mt-5">
                    <div className="mr-14">
                        <Link href="/shop">
                            <Image
                                src={menuB}
                                width={300}
                                height={300}
                                alt="Forest"
                                className="border-2 border-gray-200"
                            />
                        </Link>
                    </div>
                    <div className="">
                        <Link href="/shop">
                            <Image
                                src={menuC}
                                width={300}
                                height={300}
                                alt="Ocean"
                                className="border-2 border-gray-200"
                            />
                        </Link>
                    </div>
                </div>
                <div className="flex justify-center mt-8">
                    <div className="mr-14">
                        <Link href="/shop">
                            <Image
                                src={menuD}
                                width={300}
                                height={300}
                                alt="Forest"
                                className="border-2 border-gray-200"
                            />
                        </Link>
                    </div>
                    <div className="">
                        <Link href="/shop">
                            <Image
                                src={menuE}
                                width={300}
                                height={300}
                                alt="Ocean"
                                className="border-2 border-gray-200"
                            />
                        </Link>
                    </div>
                </div>
                <div className="flex justify-center mt-8">
                    <Link href="/shop">
                        <Image
                            src={menuF}
                            width={0}
                            height={0}
                            alt="menuF"
                            className="border-2 border-gray-200"
                            style={{ width: '41rem', height: '20rem', objectFit: 'none',  }}
                        />
                    </Link>
                </div>

            </div>
        </>
    )
}
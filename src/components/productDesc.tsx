"use client"

import Image from 'next/image';
import menuC from "@/img/menuC.jpg";
import Link from 'next/link';

export const ProductDesc = function () {
    return (
        <>
            <div className="flex justify-center mt-8">
                <Image
                    src={menuC}
                    width={360}
                    height={360}
                    alt="Ocean"
                    className="border-2 border-gray-200"
                />
                <h1 className="text-3xl ml-8">"Test" exemple de peinture, exemplaire unique</h1>
            </div>
        </>
    )
}
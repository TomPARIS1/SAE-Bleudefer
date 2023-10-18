"use client"

import Image from 'next/image';
import menuC from "@/img/menuC.jpg";
import Link from 'next/link';

export const ProductDesc = function () {
    return (
        <>
            <Image
                src={menuC}
                width={250}
                height={250}
                alt="Ocean"
                className="border-2 border-gray-200"
            />
        </>
    )
}
"use client"

import Image from 'next/image';
import menuB from "@/img/menuB.jpg";
import menuC from "@/img/menuC.jpg";
import menuD from "@/img/menuD.jpg";
import menuE from "@/img/menuE.jpg";
import menuF from "@/img/menuF.jpg";
import { useSearchParams } from 'next/navigation'
import Link from 'next/link';

export const ProductDesc = function () {
    const searchParams = useSearchParams();
    const img = searchParams.get('img');
    const productName = searchParams.get('productName');
    const productPrice = searchParams.get('productPrice');

    return (
        <>
            <div className="flex justify-center mt-8">
                <div>
                    <Image
                        src={img}
                        width={360}
                        height={360}
                        alt="Image Produit"
                        className="border-2 border-gray-200"
                    />
                    <div className="flex mt-5 cursor-pointer">
                        <Image
                            src={img}
                            width={100}
                            height={100}
                            alt="Image Produit"
                            className="border-4 border-yellow-300 mr-5"
                        />
                        <Image
                            src={img}
                            width={100}
                            height={100}
                            alt="Image Produit"
                            className="border-2 border-gray-200"
                        />
                    </div>
                </div>
                <div className="ml-8">
                    <h1 className="text-3xl">{productName}, exemplaire unique <br/> {productPrice}</h1>
                    <p className="text-xl">Quantité: 1</p>
                    <br/>
                    <p className="max-w-xl text-lg">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas metus justo, dapibus eget
                        tempor nec, tristique vitae tortor.
                        Ut ultrices fermentum mollis. Donec euismod dolor ut turpis lobortis, in pretium massa
                        sollicitudin. Orci varius natoque penatibus
                        et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse potenti. Praesent
                        consequat, urna ac convallis interdum, massa urna
                        fermentum mi, eget venenatis urna elit id mi. Integer sollicitudin lorem vitae egestas
                        efficitur. Pellentesque vehicula tincidunt ligula,
                        vitae consectetur magna elementum vitae. Nulla ut bibendum nulla, sit amet luctus massa. Donec
                        condimentum finibus ex sit amet auctor.
                    </p>
                    <button
                        className="px-6 py-2 transition ease-in duration-200 uppercase rounded-full hover:bg-gray-800 hover:text-white border-2 border-gray-900 focus:outline-none mt-5 font-sans">
                        Ajouter au panier
                    </button>
                </div>

            </div>
            <h1 className="text-3xl text-center mt-5">VOUS POURRIEZ ÉGALEMENT AIMER</h1>
            <div className="flex mt-5 justify-center cursor-pointer">
                <Image
                    src={menuB}
                    width={180}
                    height={180}
                    alt="Ocean"
                    className="border-2 border-gray-200 mr-7"
                />
                <Image
                    src={menuD}
                    width={180}
                    height={180}
                    alt="Ocean"
                    className="border-2 border-gray-200 mr-7"
                />
                <Image
                    src={menuE}
                    width={180}
                    height={180}
                    alt="Ocean"
                    className="border-2 border-gray-200 mr-7"
                />
                <Image
                    src={menuF}
                    width={180}
                    height={180}
                    alt="Ocean"
                    className="border-2 border-gray-200 mr-7"
                />
                <Image
                    src={menuC}
                    width={180}
                    height={180}
                    alt="Ocean"
                    className="border-2 border-gray-200"
                />
            </div>

        </>
    )
}
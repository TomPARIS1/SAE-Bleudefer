"use client"

import Image from 'next/image';
import menuC from "@/img/menuC.jpg";
import menuD from "@/img/menuD.jpg";
import menuE from "@/img/menuE.jpg";
import Link from 'next/link';
import {Product} from "@/components/product";

export const Nouveautes = function () {
    return (
        <>
            <h1 className="text-center text-3xl mt-7">LES NOUVEAUTÉS</h1>

            <div className="flex justify-center mt-5 gap-12">
                <Product img={menuC} productName={'"Test", exemple de produit'} productPrice={"99.99€"}/>
                <Product img={menuD} productName={'"Test 2", exemple de produit'} productPrice={"199.99€"}/>
                <Product img={menuE} productName={'"Test 3", exemple de produit'} productPrice={"49.99€"}/>
            </div>
        </>
    )
}
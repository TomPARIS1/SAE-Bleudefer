"use client"

import './footer.css'
import Image from 'next/image'
import instagram from '../img/instagram.png'
import facebook from '../img/facebook.png'

export const Footer = function () {

    function handleSearch() {

    }

    return (
        <div>
            <div className="FooterInstagram flex items-center justify-center mt-8">
                <h1 className="text-xl"> Je suis aussi disponible sur instagram! </h1>
                <a href={"https://www.instagram.com/bleu_de_fer/"}> https://www.instagram.com/bleu_de_fer/ </a>
            </div>

            <hr/>

            <Image src={instagram} width={25} height={25} alt="Logo panier" className="mr-2"/>

            <Image src={facebook} width={25} height={25} alt="Logo panier" className="mr-2"/>

        </div>
    );
}
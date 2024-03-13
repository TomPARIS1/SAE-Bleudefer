"use client"

import './css/footer.css'
import Image from 'next/image'
import instagram from '../img/instagram.png'
import facebook from '../img/facebook.png'
import visa from '../img/visa.png'
import mastercard from '../img/mastercard.png'
import paypal from '../img/paypal.png'
import applepay from '../img/apple.png'

export const Footer = function () {

    function handleSearch() {

    }

    return (
        <div className="containerr px-12 py-12 mt-12 bg-gray-200">
            <div className="under-container">
                <div className="reseau">
                    <Image src={instagram} width={25} height={25} alt="Logo Instagram" className="mr-2" />
                    <Image src={facebook} width={25} height={25} alt="Logo Facebook" className="mr-2" />
                </div>

                <div className="paiement">
                    <Image src={visa} width={25} height={25} alt="Logo Visa" className="mr-2" />
                    <Image src={mastercard} width={35} height={25} alt="Logo Mastercard" className="mr-2" />
                    <Image src={paypal} width={25} height={25} alt="Logo PayPal" className="mr-2" />
                    <Image src={applepay} width={25} height={25} alt="Logo Apple Pay" className="mr-2" />
                </div>
            </div>
            <div className="footerInstagram flex justify-center mt-8">
                <h1 className="copyright"> © 2023, Bleu de fer propulsée par Tom & Steve </h1>
            </div>
        </div>
    );
}
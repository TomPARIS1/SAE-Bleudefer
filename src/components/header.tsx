"use client"

import logo from '../img/LOGO_bleu_de_fer.png'
import search from '../img/search.png'
import user from '../img/user.png'
import panier from '../img/panier.png'
import Image from 'next/image'
import './navbar.css'
import Link from "next/link";

export const Navbar = function () {

    function handleSearch() {

    }

    return (
                    <nav className="p-4 !grid grid-cols-3 gap-4">

                        <div className="logo col-start-2 flex justify-center">
                            <Link href="/">
                                <Image
                                    src={logo}
                                    width={100}
                                    height={100}
                                    alt="Logo Bleu de Fer"
                                />
                            </Link>
                        </div>

                        <div className="params mr-12">
                            <form className="search-box" onSubmit={handleSearch}>
                                <button type="submit">
                                    <Image
                                        src={search}
                                        width={25}
                                        height={25}
                                        alt="Logo recherche"
                                        className="mr-2"
                                    />
                                </button>
                                <button type="submit">
                                    <Image
                                        src={panier}
                                        width={25}
                                        height={25}
                                        alt="Logo panier"
                                        className="mr-2"
                                    />
                                </button>
                                <button type="submit">
                                    <Image
                                        src={user}
                                        width={25}
                                        height={25}
                                        alt="Logo utilisateur"
                                    />
                                </button>
                            </form>
                        </div>

                    </nav>
    );


}




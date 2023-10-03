"use client"

import logo from '../img/LOGO_bleu_de_fer.png'
import search from '../img/search.png'
import user from '../img/user.png'
import panier from '../img/panier.png'
import Image from 'next/image'
import './navbar.css'

export const Navbar = function () {

    function handleSearch() {

    }

    return (
        <div>

            <div className="rectangle-nav">
                <nav className="navbar">
                    <a href="/" className="logo">
                        <Image
                            src={logo}
                            width={100}
                            height={100}
                            alt="Logo Bleu de Fer"
                        />
                    </a>

                    <div className="nav_links text-xl">
                        <a href="/" className="text-black mr-5">ACCUEIL</a>
                        <a href="/News" className="text-black mr-5">BOUTIQUE</a>
                        <a href="/Contact" className="text-black">A PROPOS</a>
                    </div>

                    <form className="search-box" onSubmit={handleSearch}>
                        <div>

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
                        </div>
                    </form>

                </nav>
            </div>

        </div>
    );
}
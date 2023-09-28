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

                    <div className="nav_links">
                        <a href="/" className="text-black">Accueil</a>
                        <a href="/News" className="text-black">Boutique</a>
                        <a href="/Contact" className="text-black">A propos</a>
                    </div>

                    <form className="search-box" onSubmit={handleSearch}>
                        <div>

                            <button type="submit">
                                <Image
                                    src={search}
                                    width={50}
                                    height={50}
                                    alt="Logo recherche"
                                />
                            </button>
                            <button type="submit">
                                <Image
                                    src={panier}
                                    width={50}
                                    height={50}
                                    alt="Logo panier"
                                />
                            </button>
                            <button type="submit">
                                <Image
                                    src={user}
                                    width={50}
                                    height={50}
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
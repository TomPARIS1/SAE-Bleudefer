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
                            alt="Picture of the author"
                            sizes="100px"
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
                                    alt="Picture of the author"
                                />
                            </button>
                            <button type="submit">
                                <Image
                                    src={panier}
                                    alt="Picture of the author"
                                />
                            </button>
                            <button type="submit">
                                <Image
                                    src={user}
                                    alt="Picture of the author"
                                    sizes="width: 10px"
                                />
                            </button>
                        </div>
                    </form>

                </nav>
            </div>

        </div>
    );
}
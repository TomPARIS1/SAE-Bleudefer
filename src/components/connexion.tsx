import Image from 'next/image'
import '../app/globals.css'
import backgroundSVG from "@/img/Ocean.jpg";
import React from "react";
import './navbar.css'
import Link from "next/link";

export const Connexion = function () {


    return (
        <div className="bg-gray-200 min-h-screen flex items-center justify-center">

            <div className="bg-black bg-opacity-50 p-8 rounded-lg z-10">
                <h1 className="text-2xl text-white mb-4">Connexion</h1>

                <form>
                    <div className="mb-4">
                        <label htmlFor="username" className="text-white">Nom d'utilisateur</label>
                        <input
                            type="text"
                            id="username"
                            className="w-full p-2 rounded border border-gray-400"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="password" className="text-white">Mot de passe</label>
                        <input
                            type="password"
                            id="password"
                            className="w-full p-2 rounded border border-gray-400"
                        />
                    </div>

                    <button className="bg-blue-500 text-white p-2 rounded hover:bg-blue-700">
                        Se connecter
                    </button>
                </form>

                <div className="mt-4 text-white">
                    <p>Vous n'avez pas de compte ?</p>
                    <a href="/inscription" className="underline">Créer un compte</a>
                </div>
            </div>

            <div className="animation-container-full-screen absolute inset-0 pointer-events-none z-0">
                <Link href="/connexion">
                    <Image
                        src={backgroundSVG}
                        width={2000}
                        height={2000}
                        alt="Animated Background"
                        className="full-screen-image"
                    />
                </Link>
            </div>
        </div>
    );
};
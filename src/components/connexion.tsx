import logo from '../img/LOGO_bleu_de_fer.png'
import search from '../img/search.png'
import user from '../img/user.png'
import panier from '../img/panier.png'
import Image from 'next/image'
import './navbar.css'
import menuC from "@/img/menuC.jpg";
import Link from "next/link";

export const Connexion = function () {

    return (
        <div className="bg-gray-800 min-h-screen flex items-center justify-center">
            <div className="bg-black bg-opacity-50 p-8 rounded-lg">
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

                    <button className="bg-gray-600 text-white p-2 rounded hover:bg-gray-700">
                        Se connecter
                    </button>
                </form>

                <div className="mt-4 text-white">
                    <p>Vous n'avez pas de compte ?</p>
                    <a href="/inscription" className="underline">Créer un compte</a>
                </div>
            </div>
        </div>
    );
};
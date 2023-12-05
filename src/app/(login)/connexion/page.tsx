
import { NextPageProps } from "../../../types";
import Link from "next/link";
import logo from "src/img/logo-white.png";
import ocean from "src/img/ocean.jpg"
import Image from "next/image";


export default function Connexion() {
    return (
        <div className="bg-gray-200 min-h-screen flex items-center justify-center">

            <div className="bg-black bg-opacity-50 flex-row p-8 rounded-lg z-10">
                <div className="logo col-start-2 flex justify-center invert-1">
                    <Link href="/">
                        <Image
                            src={logo}
                            width={100}
                            height={100}
                            alt="Logo Bleu de Fer"
                        />
                    </Link>
                </div>

                <h1 className="text-2xl text-white mb-4">Connexion</h1>

                <form>
                    <div className="mb-4 ">
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

                    <div className="flex justify-center ">
                        <button className="bg-blue-500 flex justify-center text-white p-2 rounded hover:bg-blue-700">
                            Se connecter
                        </button>
                    </div>
                </form>

                <div className="mt-4 text-white flex-row justify-center ">
                    <div className="ml-2 flex justify-center">
                        <p>Vous avez déjà un compte et souhaiter y accéder?</p>
                    </div>

                    <div className="ml-2 flex justify-center">
                        <Link href="/inscription" className="underline">Créer un compte</Link>
                    </div>
                </div>
            </div>

        </div>
    );
}

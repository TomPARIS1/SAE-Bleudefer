"use client"

import { useState } from "react";
import { useRouter } from "next/navigation";
import {SHA256 } from 'crypto-js';
import { getUser } from "../../../actions/get-user";

export default function Connexion() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const router = useRouter();

    const handleLogin = async (e) => {
        e.preventDefault();

        if (!email || !password) {
            setError("Veuillez saisir une adresse email et un mot de passe.");
            return;
        }

        const user = await getUser(email);
        if (!user) {
            setError("Adresse email incorrecte.");
            return;
        }

        const hashedPassword = SHA256(password).toString();
        if (hashedPassword !== user.password) {
            setError("Mot de passe incorrect.");
            return;
        }

        router.push("/dashboard");
    };

    return (
        <div className="flex items-center justify-center h-screen">
            <form
                onSubmit={handleLogin}
                className="flex flex-col space-y-4 bg-white p-8 rounded-lg shadow-lg"
            >
                <h1 className="text-2xl font-bold text-center">Connexion</h1>
                <input
                    type="text"
                    placeholder="Adresse email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="p-2 border border-gray-300 rounded-lg"
                />
                <input
                    type="password"
                    placeholder="Mot de passe"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="p-2 border border-gray-300 rounded-lg"
                />
                {error && <p className="text-red-500">{error}</p>}
                <button
                    type="submit"
                    className="bg-blue-500 text-white p-2 rounded-lg"
                >
                    Se connecter
                </button>
            </form>
        </div>
    );
}

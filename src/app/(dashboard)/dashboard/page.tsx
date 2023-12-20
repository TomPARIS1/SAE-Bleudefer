"use client";

import { NextPageProps } from "../../../types";
import Link from 'next/link';
import {useEffect, useState} from "react";
import axios from 'axios';

export default function dashboard() {
    const [instagramData, setInstagramData] = useState({});

    useEffect(() => {
        const accessToken = '997ccdcb06fed4661c00a92934168695';

        const fetchInstagramData = async () => {
            try {
                const userInfoResponse = await axios.get(`https://graph.instagram.com/v12.0/me?fields=id,username&access_token=${accessToken}`);
                setInstagramData(userInfoResponse.data);
            } catch (error) {
                console.error('Erreur lors de la récupération des informations du compte Instagram', error);
            }
        };


        fetchInstagramData();
    }, []);

    return (
        <div>
            <h1>Tableau de bord</h1>

            <div>
                <h2>Instagram Analytics</h2>

                <p>ID du compte : {instagramData.id}</p>
                <p>Nom d'utilisateur : {instagramData.username}</p>
            </div>

            <div>
                <h2>Revenus</h2>

            </div>

        </div>
    );
}

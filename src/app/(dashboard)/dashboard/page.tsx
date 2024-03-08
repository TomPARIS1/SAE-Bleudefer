"use client";
import {useEffect, useState} from "react";
import axios from "axios";
import {DashboardMenu} from "../../../components/dashboard-menu";
import {Box} from "@mantine/core";

export default function InstagramDashboard() {
    const [instagramData, setInstagramData] = useState({});
    const [followersCount, setFollowersCount] = useState(null);
    const [postCount, setPostCount] = useState(null);

    useEffect(() => {
        const accessToken = 'IGQWROZAWMyTmxsNlF0N0IwT1NEeTVNVXpGUnJKdlFxQnNyS0xTcE93UHV5Y2xSNGdnRF9SUlcwMC1UMUx0WkxPbVV6MzRwZAGx1aGxfbmlIMXJaTmMyVEx0WUNDcGhPNXpjdTkxcjNzU1JJcG83UURVMFJ3VDNUTVEZD';

        const fetchInstagramData = async () => {
            try {
                const userInfoResponse = await axios.get(
                    `https://graph.instagram.com/v12.0/me?fields=id,username,followers_count,media_count,biography,profile_picture_url&access_token=${accessToken}`
                );
                setInstagramData(userInfoResponse.data);
                setFollowersCount(userInfoResponse.data.followers_count);
                setPostCount(userInfoResponse.data.media_count);
            } catch (error) {
                console.error(
                    "Erreur lors de la récupération des informations du compte Instagram",
                    error
                );
            }
        };

        fetchInstagramData();
    }, []);

    return (
        <div className="flex flex-col justify-center mx-72 mt-5">

            <DashboardMenu/>

            <h1 className="text-3xl font-bold mb-4">Instagram</h1>
            <div className="justify-center">
                <Box
                    sx={(theme) => ({
                        backgroundColor: theme.colors.gray[0],
                        textAlign: 'center',
                        padding: theme.spacing.xl,
                        borderRadius: theme.radius.md,
                        cursor: 'pointer',

                        '&:hover': {
                            backgroundColor:
                                theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1],
                        },
                    })}
                    className='h-screen w-full mb-4'
                >
                    Posts instagram
                </Box>
            </div>

            {/*<div className="grid grid-cols-2 gap-4">
                <div>
                    <h2 className="text-xl font-bold mb-2">Informations du compte</h2>
                    <p><span className="font-bold">ID du compte :</span> {instagramData.id}</p>
                    <p><span className="font-bold">Nom d'utilisateur :</span> {instagramData.username}</p>
                    <p><span className="font-bold">Nombre d'abonnés :</span> {followersCount}</p>
                    <p><span className="font-bold">Nombre de publications :</span> {postCount}</p>
                    <p><span className="font-bold">Biographie :</span> {instagramData.biography}</p>
                </div>
                <div>
                    <h2 className="text-xl font-bold mb-2">Photo de profil</h2>
                    <img src={instagramData.profile_picture_url} alt="Photo de profil" className="w-32 h-32 rounded-full" />
                </div>
            </div>*/}
        </div>
    );
}

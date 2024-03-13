"use client"

import { useEffect, useState } from "react";
import axios from "axios";
import { DashboardMenu } from "../../../components/dashboard-menu";
import { Box } from "@mantine/core";
import Image from "next/image";

export default function InstagramDashboard() {
    const [instagramData, setInstagramData] = useState([]);
    const [postIds, setPostIds] = useState([]);
    const [postsData, setPostsData] = useState([]);
    const [selectedPost, setSelectedPost] = useState(null);
    const [postCount, setPostCount] = useState(null);

    useEffect(() => {
        const accessToken = 'IGQWRPZAFhFY1I0UzViY3JnVTdLM1loZAmZA3WjJDX3pDSVl0LTVQMnlSZAVhObEYyRk03cTNkTWtOekx4UEZAxbkVDbEhOMkxtSThIQmh6cEpsU0l5TXlVbTBpb01tSGd3b0ZAwSkpxNERSWWtfM3dhcUpOYXZAMdllpUjAZD';

        const fetchInstagramData = async () => {
            try {
                const userInfoResponse = await axios.get(
                    `https://graph.instagram.com/me/media?fields=id,caption&access_token=${accessToken}`
                );

                setInstagramData(userInfoResponse.data.data);
                setPostCount(userInfoResponse.data.data.length);
                setPostIds(userInfoResponse.data.data.map(post => post.id));

                console.log(postIds)
            } catch (error) {
                console.error(
                    "Erreur lors de la récupération des informations du compte Instagram",
                    error
                );
            }
        };

        fetchInstagramData();
    }, []);

    useEffect(() => {
        const accessToken = 'IGQWRPZAFhFY1I0UzViY3JnVTdLM1loZAmZA3WjJDX3pDSVl0LTVQMnlSZAVhObEYyRk03cTNkTWtOekx4UEZAxbkVDbEhOMkxtSThIQmh6cEpsU0l5TXlVbTBpb01tSGd3b0ZAwSkpxNERSWWtfM3dhcUpOYXZAMdllpUjAZD';

        const fetchPostsData = async () => {
            try {
                const promises = postIds.map(async (id) => {
                    const postResponse = await axios.get(
                        `https://graph.instagram.com/${id}?fields=id,media_type,media_url,username,timestamp&access_token=${accessToken}`
                    );
                    return postResponse.data;
                });
                const resolvedPosts = await Promise.all(promises);
                setPostsData(resolvedPosts);
            } catch (error) {
                console.error(
                    "Erreur lors de la récupération des informations du compte Instagram",
                    error
                );
            }
        };

        fetchPostsData();
    }, [postIds]);

    const handlePostClick = (post) => {
        setSelectedPost(post);
    };

    return (
        <div className="flex flex-col justify-center mx-72 mt-5">
            <DashboardMenu />
            <h1 className="text-3xl font-bold mb-4">Instagram</h1>
            <div className="justify-center">
                <Box
                    sx={(theme) => ({
                        backgroundColor: theme.colors.gray[0],
                        textAlign: 'center',
                        padding: theme.spacing.xl,
                        borderRadius: theme.radius.md,
                        cursor: 'pointer',
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                        gap: theme.spacing.md,
                        minHeight: '500px', // Hauteur minimale de la box
                    })}
                    className='w-full mb-4 overflow-auto' // Ajout de overflow-auto pour activer le défilement si nécessaire
                >
                    {postsData.map((post) => (
                        <section key={post.id} onClick={() => handlePostClick(post)}>
                            <Image src={post.media_url} alt={'Instagram post'} width={200} height={200} />
                            <p>{post.caption}</p> {/* Affichage de la description du post */}
                        </section>
                    ))}
                </Box>

            </div>
            {selectedPost && (
                <div className="flex justify-center mt-5">
                    <Box
                        sx={(theme) => ({
                            backgroundColor: theme.colors.gray[0],
                            padding: theme.spacing.xl,
                            borderRadius: theme.radius.md,
                        })}
                    >
                        <h2 className="text-xl font-bold mb-2">Détails du post</h2>
                        <p><span className="font-bold">ID :</span> {selectedPost.id}</p>
                        <p><span className="font-bold">Type de média :</span> {selectedPost.media_type}</p>
                        <p><span className="font-bold">URL du média :</span> {selectedPost.media_url}</p>
                        <p><span className="font-bold">Nom d'utilisateur :</span> {selectedPost.username}</p>
                        <p><span className="font-bold">Date de publication :</span> {selectedPost.timestamp}</p>
                    </Box>
                </div>
            )}
        </div>
    );
}

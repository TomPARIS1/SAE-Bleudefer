"use client"

import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { DashboardMenu } from "../../components/dashboard-menu";
import { Box } from "@mantine/core";
import Image from "next/image";
import PostEditForm from "../../components/post-edit-form";
import {checkCookie} from "../../utils/session";

export default function InstagramDashboard() {
    const [instagramData, setInstagramData] = useState([]);
    const [postIds, setPostIds] = useState([]);
    const [postsData, setPostsData] = useState([]);
    const [selectedPost, setSelectedPost] = useState(null);
    const [editMode, setEditMode] = useState(false);

    const router = useRouter();

    useEffect(() => {
        const isLoggedIn = checkCookie('session')

        if (!isLoggedIn) {
            router.push("/connexion");
        }
    }, []);

    useEffect(() => {
        const accessToken = 'IGQWRPZAFhFY1I0UzViY3JnVTdLM1loZAmZA3WjJDX3pDSVl0LTVQMnlSZAVhObEYyRk03cTNkTWtOekx4UEZAxbkVDbEhOMkxtSThIQmh6cEpsU0l5TXlVbTBpb01tSGd3b0ZAwSkpxNERSWWtfM3dhcUpOYXZAMdllpUjAZD';

        const fetchInstagramData = async () => {
            try {
                const userInfoResponse = await axios.get(
                    `https://graph.instagram.com/me/media?fields=id,caption&access_token=${accessToken}`
                );

                setInstagramData(userInfoResponse.data.data);
                setPostIds(userInfoResponse.data.data.map(post => post.id));
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
        setEditMode(true);
    };

    const handleFormCancel = () => {
        setEditMode(false);
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
                        minHeight: '500px',
                    })}
                    className='w-full mb-4 overflow-auto'
                >
                    {postsData.map((post) => (
                        <section key={post.id} onClick={() => handlePostClick(post)}>
                            <Image src={post.media_url} alt={'Instagram post'} width={200} height={200} className="hover:scale-110 transition-all duration-500"/>
                        </section>
                    ))}
                </Box>
            </div>
            {selectedPost && editMode && (
                <div className="absolute top-14 -right-2">
                        <PostEditForm
                            post={selectedPost}
                            caption={instagramData.find(item => item.id === selectedPost.id)?.caption ?? ''}
                            onCancel={handleFormCancel}
                        />
                </div>
            )}
        </div>
    );
}

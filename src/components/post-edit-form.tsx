import { useState } from "react";
import {Box, Button, NumberInput, Select, Textarea, TextInput} from "@mantine/core";
import {SectionContainer} from "tp-kit/components";

export default function PostEditForm({ post, caption, onSubmit, onCancel }) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState(caption);
    const [price, setPrice] = useState(0);
    const imageUrl = post.media_url;

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ title, description, price, imageUrl });
    };

    return (
        <SectionContainer wrapperClassName="max-w-7xl">
            <Box maw={350} mx="auto" className="shadow-md my-2 bg-white rounded">
                <form className="p-5" onSubmit={handleSubmit}>
                    <h1 className="mb-3">Ajouter un produit</h1>
                    <TextInput
                        withAsterisk
                        label="Titre"
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <Textarea
                        withAsterisk
                        label="Description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                    <TextInput
                        withAsterisk
                        label="Prix"
                        onChange={(e) => setPrice(e.target.value)}
                    />
                    <Select
                        withAsterisk
                        label="Catégorie"
                        data={['Les Précieux', 'Empreinte Naturelle', 'Rêverie Bucolique']}
                    />
                    <TextInput
                        withAsterisk
                        label="Image"
                        value={imageUrl}
                        className="hidden"
                    />

                    <Button type="submit" variant="outline" className="my-5 h-75 items-center h-12 border-black text-black"
                            fullWidth>
                        Ajouter
                    </Button>
                    <Button type="button" variant="outline" className="mt-5 h-75 items-center h-12 border-black text-black" onClick={onCancel}
                            fullWidth>
                        Annuler
                    </Button>
                </form>
            </Box>
        </SectionContainer>
    );
}

import { useState } from "react";
import {Box, Button, NumberInput, Select, Textarea, TextInput} from "@mantine/core";
import {SectionContainer} from "tp-kit/components";
import {useForm} from "@mantine/form";
import {createProduct} from "../actions/create-product";
import {useRouter} from "next/navigation";
import {getTotalProduct} from "../actions/get-total-product";

export default function PostEditForm({ post, caption, onCancel }) {
    const [category, setCategory] = useState<string>('');

    const router = useRouter();

    const form = useForm({
        initialValues: {
            title: '',
            description: caption,
            price: 0,
            image: post.media_url,
        },
    });

    const handleCreateProduct = async (values: {title:string, description:string, price:number, image:string}) => {
        await createProduct(values.title, values.description, values.image, category, values.price);
        router.push(`${category.toLowerCase().replace(/\s/g, '-')}/${values.title.replace(/\s/g, '-')}`)
        router.refresh()
    }

    console.log(category.toLowerCase().replace(/\s/g, '-'))

    return (
        <SectionContainer wrapperClassName="max-w-7xl">
            <Box maw={350} mx="auto" className="shadow-md my-2 bg-white rounded">
                <form className="p-5" onSubmit={form.onSubmit((values) => handleCreateProduct(values))}>
                    <h1 className="mb-3">Ajouter un produit</h1>
                    <TextInput
                        withAsterisk
                        label="Titre"
                        {...form.getInputProps('title')}
                        className="outline-blue-500"
                    />
                    <Textarea
                        withAsterisk
                        label="Description"
                        {...form.getInputProps('description')}
                        className="outline-blue-500"
                    />
                    <NumberInput
                        withAsterisk
                        label="Prix"
                        {...form.getInputProps('price')}
                        className="outline-blue-500"
                    />
                    <Select
                        withAsterisk
                        label="Catégorie"
                        data={['Les Precieux', 'Empreinte Naturelle', 'Reverie Bucolique']}
                        onChange={(_value) => setCategory(_value)}
                        className="outline-blue-500"
                    />
                    <TextInput
                        withAsterisk
                        label="Image"
                        {...form.getInputProps('image')}
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

import { useState } from "react";

export default function PostEditForm({ post, caption, onSubmit, onCancel }) {
    const [title, setTitle] = useState(post.title);
    const [description, setDescription] = useState(caption);
    const [price, setPrice] = useState(post.price);
    const [imageUrl, setImageUrl] = useState(post.imageUrl);

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ title, description, price, imageUrl });
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Titre:
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
            </label>
            <label>
                Description:
                <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
            </label>
            <label>
                Prix:
                <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} />
            </label>
            <label>
                Lien de l'image:
                <input type="text" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} />
            </label>
            <button type="submit">Enregistrer</button>
            <button type="button" onClick={onCancel}>Annuler</button>
        </form>
    );
}

import {BreadCrumbs, SectionContainer} from "tp-kit/components";
import {PRODUCTS_CATEGORY_DATA} from "tp-kit/data";
import {ProductList} from "../components/product-list";
import {Metadata} from "next";
import {CategoryList} from "../components/category-list";
import Image from 'next/image';
import bande from "../img/bande.jpg"
import {NewProduct} from "../components/new-products";
import carousel1 from "../img/carousel/carousel1.jpg";
import carousel2 from "../img/carousel/carousel2.jpg";
import carousel3 from "../img/carousel/carousel3.jpg";
import carousel4 from "../img/carousel/carousel4.jpg";
import {Carousel} from 'antd';
import prisma from "../utils/prisma";

const categories = PRODUCTS_CATEGORY_DATA;

export const metadata: Metadata = {
    title: `Page d’accueil - Bleu de fer`,
    description: "Découvrez des oeuvres d'art uniques inspirées par la fraicheur de la Bretagne"
}

export default async function Home() {
    const product = await prisma.productCategory.findMany({
        include: {
            products: true
        }
    });

    const categories = await prisma.productCategory.findMany({
        include: {
            products: true
        }
    });

    return (
        <>
            {/*Bande décorative*/}
            <div className="relative">
                <Image
                    src={bande}
                    width={0}
                    height={0}
                    alt="bande décorative"
                    style={{width: '100%', height: '25rem', objectFit: 'cover'}}
                />
                <h1 className="text-2xl absolute text-white z-10 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 p-4 text-center">
                    Une promenade poétique entre Terre et Mer inspirée par la beauté de la Bretagne
                </h1>
            </div>

            {/*Nouveautes*/}
            <h1 className="text-center text-3xl mt-7">LES NOUVEAUTÉS</h1>
            <NewProduct categories={product}/>

            {/*Categories*/}
            <h1 className="text-center text-3xl">NOS COLLECTIONS</h1>
            <CategoryList categories={categories}/>

            {/*Slider*/}
            <Carousel autoplay className="pt-12">
                <div className="relative">
                    <div className="bg-cover h-35rem">
                        <Image
                            src={carousel1}
                            alt="Description de l'image 1"
                            width={0}
                            height={0}
                            style={{width: '100%', height: '20rem', objectFit: 'cover'}}
                        />
                    </div>
                </div>
                <div className="relative">
                    <div className="bg-cover h-35rem">
                        <Image
                            src={carousel2}
                            width={0}
                            height={0}
                            alt="Description de l'image 2"
                            style={{width: '100%', height: '20rem', objectFit: 'cover'}}
                        />
                    </div>
                </div>
                <div className="relative">
                    <div className="bg-cover h-35rem">
                        <Image
                            src={carousel3}
                            width={0}
                            height={0}
                            alt="Description de l'image 3"
                            style={{width: '100%', height: '20rem', objectFit: 'cover'}}
                        />
                    </div>
                </div>
                <div className="relative">
                    <div className="bg-cover h-35rem">
                        <Image
                            src={carousel4}
                            width={0}
                            height={0}
                            alt="Description de l'image 4"
                            style={{width: '100%', height: '20rem', objectFit: 'cover'}}
                        />
                    </div>
                </div>
            </Carousel>
        </>
    );
}

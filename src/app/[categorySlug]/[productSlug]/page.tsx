import {
  FormattedPrice,
  ProductCardLayout,
  ProductGridLayout,
  ProductImage,
  SectionContainer,
} from "tp-kit/components";
import { NextPageProps } from "../../../types";
import { Metadata } from "next";
import prisma from "../../../utils/prisma";
import { cache } from "react";
import { notFound } from "next/navigation";
import { AddToCartButton } from "../../../components/add-to-cart-button";

const getProduct = cache((slug: string) => prisma.product.findUnique({
  where: {slug},
  include: {
    category: {
      include: {
        products: {
          where: { slug: {not: slug}}
        }
      }
    }
  }
}));

type Props = {
  categorySlug: string;
  productSlug: string;
};

export async function generateMetadata({
                                           params,
                                           searchParams,
                                       }: NextPageProps<Props>): Promise<Metadata> {
    const product = await getProduct(params.productSlug);
    if (!product) return {};

    return {
        title: product.name,
        description:
            product.desc ??
            `Découvrez l'oeuvre ${product.name} et commandez-la sur notre site !`,
    };
}

export default async function ProductPage({ params }: NextPageProps<Props>) {
  const product = await getProduct(params.productSlug);
  if (!product) notFound();

  return (
      <SectionContainer wrapperClassName="max-w-5xl pt-5">

        {/* Produit */}
        <section className="flex flex-col md:flex-row justify-center gap-8">
          {/* Product Image */}
          <div className="relative">
            <ProductImage
                {...product}
                priority
                className="rounded-lg sticky top-12 object-cover sm:aspect-video md:aspect-auto w-full md:w-[300px]"
            />
          </div>

          {/* Product body */}
          <div className="flex-1">
            <div>
              {/* Product Name */}
              <h1 className="text-3xl">{product.name}, exemplaire unique</h1>
              <p className="!my-0 text-2xl">
                <FormattedPrice price={product.price} />
              </p>
              {/* Desc */}
              <p className="text-lg py-5">
                {product.desc}
              </p>

              {/* Prix et ajout au panier */}
              <div className="flex justify-between items-center gap-8">
                <AddToCartButton variant={"primary"} product={product} fullWidth={false} />
              </div>
            </div>

          </div>
        </section>

        {/* Related products */}
        <section>
          <div className="mt-20">
            <h1 className="text-3xl text-center my-5">VOUS POURRIEZ ÉGALEMENT AIMER</h1>

            <ProductGridLayout products={product.category.products.slice(0,4)}>
              {(product) => (
                  <ProductCardLayout
                      product={product}
                  />
              )}
            </ProductGridLayout>
          </div>
        </section>
        {/* /Related products */}
      </SectionContainer>
  );
}

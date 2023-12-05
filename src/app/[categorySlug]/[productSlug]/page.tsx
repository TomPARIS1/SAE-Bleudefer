import {
  BreadCrumbs,
  Button,
  FormattedPrice,
  ProductCardLayout,
  ProductGridLayout,
  ProductRating,
  ProductImage,
  SectionContainer,
} from "tp-kit/components";
import { NextPageProps } from "../../../types";
import { PRODUCTS_CATEGORY_DATA } from "tp-kit/data";
import { Metadata } from "next";
import {
  ProductAttribute,
  ProductAttributesTable,
} from "../../../components/product-attributes-table";
import { AddToCartButton } from "../../../components/add-to-cart-button";
const product = {
  ...PRODUCTS_CATEGORY_DATA[0].products[0],
  category: {
    ...PRODUCTS_CATEGORY_DATA[0],
    products: PRODUCTS_CATEGORY_DATA[0].products.slice(1),
  },
};

type Props = {
  categorySlug: string;
  productSlug: string;
};

export async function generateMetadata({
                                         params,
                                         searchParams,
                                       }: NextPageProps<Props>): Promise<Metadata> {
  return {
    title: product.name,
    description:
        product.desc ??
        `Succombez pour notre ${product.name} et commandez-le sur notre site !`,
  };
}

export default async function ProductPage({ params }: NextPageProps<Props>) {
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
              <p className="text-lg py-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas metus justo, dapibus eget
                tempor nec, tristique vitae tortor.
                Ut ultrices fermentum mollis. Donec euismod dolor ut turpis lobortis, in pretium massa
                sollicitudin. Orci varius natoque penatibus
                et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse potenti. Praesent
                consequat, urna ac convallis interdum, massa urna
                fermentum mi, eget venenatis urna elit id mi. Integer sollicitudin lorem vitae egestas
                efficitur. Pellentesque vehicula tincidunt ligula,
                vitae consectetur magna elementum vitae. Nulla ut bibendum nulla, sit amet luctus massa. Donec
                condimentum finibus ex sit amet auctor.
                <br/>
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

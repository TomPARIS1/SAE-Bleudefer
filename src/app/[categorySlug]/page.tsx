import { BreadCrumbs, SectionContainer } from "tp-kit/components";
import { PRODUCTS_CATEGORY_DATA } from "tp-kit/data";
import { ProductList } from "../../components/product-list";
import { NextPageProps } from "../../types";
import { Metadata } from "next";
import prisma from "../../utils/prisma";
const category = PRODUCTS_CATEGORY_DATA[0];

type Props = {
  categorySlug: string;
};

export async function generateMetadata({ params, searchParams} : NextPageProps<Props>) : Promise<Metadata> {
  return {
    title: category.name,
    description: `Trouvez votre inspiration avec un vaste choix de boissons Starbucks parmi nos produits ${category.name}`
  }
}

export default async function CategoryPage({params}: NextPageProps<Props>) {
  const categories = await prisma.productCategory.findMany({
    include: {
      products: true
    }
  });

  return <SectionContainer wrapperClassName="max-w-5xl">
    <ProductList categories={[categories]} />
    <div className="flex justify-center mt-10">
      <button type="button"
              className="text-black bg-white rotate-180 focus:outline-none font-medium rounded-lg text-sm mr-5 text-center inline-flex items-center mr-2">
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
             viewBox="0 0 14 10">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"/>
        </svg>
        <span className="sr-only">Icon description</span>
      </button>
      <h1 className="text-2xl">Page 1 sur 1</h1>
      <button type="button"
              className="text-black bg-white focus:outline-none font-medium rounded-lg text-sm ml-5 text-center inline-flex items-center mr-2">
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
             viewBox="0 0 14 10">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"/>
        </svg>
        <span className="sr-only">Icon description</span>
      </button>
    </div>
  </SectionContainer>
}
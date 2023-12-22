import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

/**
 * Populates the DB with initial data
 */
async function main() {
    // Deletes the existing categories first
    await prisma.productCategory.deleteMany({});

    // Creates the promises categories and their products from the static data we have
    const promises = PRODUCTS_CATEGORY_DATA.map(({products, ...category}) => {
        return prisma.productCategory.create({
            data: {
                ...category,
                products: {
                    createMany: {
                        skipDuplicates: true,
                        data: products
                    }
                }
            },
        });
    });

    // Execute the categories creation operations
    await Promise.all(promises);
}

main()
    .then(async () => await prisma.$disconnect)
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });
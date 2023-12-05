import { FC, ReactNode, memo } from "react";
import { ProductData } from "../../types";

type Props = {
  /**
   * Liste des produits à afficher dans la grille
   */
  products: ProductData[];
  /**
   * Fonction de rendu appelé pour chaque entrée de `products`. Récupère en argument `product` et doit retourner un composant React.
   * 
   * @param product 
   * @returns 
   */
  children: (product: ProductData) => ReactNode
};

/**
 * Base d'affichage d'une grille produit.
 */
const ProductGridLayout: FC<Props> = memo(function ({ products, children }) {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-4 gap-8">
      {products.map((product) => (
        <li key={product.id} className="lg:max-w[300px]">
          {children(product)}
        </li>
      ))}
    </ul>
  );
});

ProductGridLayout.displayName = "ProductGridLayout";
export { ProductGridLayout };

"use client";

import { FC, memo, useCallback } from "react";
import { ProductCartLine, FormattedPrice, Button } from "tp-kit/components";
import {
  removeLine,
  updateLine,
  computeCartTotal,
  useCart,
  clearCart
} from "../hooks/use-cart";

import { createOrder } from "../actions/create-order";
import Link from "next/link";

type Props = {};

const Cart: FC<Props> = memo(function () {
  const lines = useCart((cart) => cart.lines);
  const wrapperClasses = "bg-white rounded-lg p-6 shadow-xl space-y-12";

    const handleNavigateToPayment = () => {
        return (
            <Link href={'/shoppingCart'}>
                <Button fullWidth variant="outline" size="lg">
                    Commander
                </Button>
            </Link>
        );
    };

  const handleCreateOrder = useCallback(async () => {
    await createOrder(useCart.getState());
    clearCart();
    return handleCreateOrder;
  }, []);

  if (lines.length === 0)
    return (
      <div className={wrapperClasses}>
        <p className="my-12 text-center text-gray-600 text-sm">
          Votre panier est vide
        </p>
      </div>
    );

  return (
    <div className={wrapperClasses}>
      <h2 className="text-sm uppercase font-bold tracking-wide">Mon panier</h2>

      <div className="space-y-4">
        {lines.map(({ product, qty }) => (
          <ProductCartLine
            key={product.id}
            product={product}
            qty={qty}
            onDelete={() => removeLine(product.id)}
            onQtyChange={(qty) => updateLine({ product, qty })}
          />
        ))}
      </div>

      <table className="w-full">
        <tbody>
          <tr>
            <th className="text-left">Total</th>
            <td className="text-right font-bold">
              <FormattedPrice price={computeCartTotal(lines)} />
            </td>
          </tr>
        </tbody>
      </table>

        <div className={wrapperClasses}>
        {handleNavigateToPayment()}
        </div>
    </div>
  );
});

Cart.displayName = "Cart";
export { Cart };

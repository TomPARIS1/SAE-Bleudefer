"use client";

import { FC, memo, useState, useEffect, useCallback } from "react";
import { ProductCartLine, FormattedPrice, Button } from "tp-kit/components";
import {
    removeLine,
    updateLine,
    computeCartTotal,
    useCart,
    clearCart,
} from "../hooks/use-cart";
import { createOrder } from "../actions/create-order";
import {useRouter} from "next/navigation";
import {parseCookies} from "nookies";
import Cookies from "js-cookie";

type Props = {};

function getOrderIdFromCookie() {
    const cookies = parseCookies();
    const orderIdString = cookies.orderId;
    if (orderIdString) {
        const orderId = parseInt(orderIdString, 10);
        return isNaN(orderId) ? null : orderId;
    }
    return null;
}


const Cart: FC<Props> = memo(function () {
    const lines = useCart((cart) => cart.lines);
    const router = useRouter();
    const [orderId, setOrderId] = useState<number | null>(getOrderIdFromCookie());

    const handleCreateOrder = useCallback(async () => {
        const newOrderId = await createOrder(useCart.getState());
        if (newOrderId != null) {
            Cookies.set("orderId", newOrderId.toString(), {expires: 30 * 24 * 60 * 60});
        }
        router.push(`/shoppingCart`);
        clearCart();
    }, []);

    if (lines.length === 0)
        return (
            <div className="bg-white rounded-lg p-6 shadow-xl space-y-12">
                <p className="my-12 text-center text-gray-600 text-sm">
                    Votre panier est vide
                </p>
            </div>
        );

    return (
        <div className="bg-white rounded-lg p-6 shadow-xl space-y-12">
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

            <Button fullWidth variant={"outline"} size="lg" onClick={handleCreateOrder}>
                Commander
            </Button>
        </div>
    );
});

Cart.displayName = "Cart";
export { Cart };
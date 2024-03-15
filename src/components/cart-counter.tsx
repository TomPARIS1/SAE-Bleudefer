import { FC, memo } from "react";
import { useCart } from "../hooks/use-cart";

type Props = {
}

const CartCounter: FC<Props> = memo(function() {

  const count = useCart(cart => cart.count);
  return <>{count}</>;
});

CartCounter.displayName = "CartCounter";
export {CartCounter};
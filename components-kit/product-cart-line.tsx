"use client";

import { NumberInput, NumberInputHandlers } from "@mantine/core";
import { Button } from "./button"
import { FC, memo, useRef } from "react";
import { ProductData } from "../../types";
import { X } from "@phosphor-icons/react";

type Props = {
  /**
   * Les données produit de la ligne
   */
  product: ProductData;
  /**
   * Fonction appelée lorsque l'utilisateur clique sur le bouton de suppression de la ligne
   * @returns 
   */
  onDelete: () => void,
  /**
   * Fonction appelée lorsque l'utilisateur modifie la quantité de la ligne
   * @param qty 
   * @returns 
   */
  onQtyChange: (qty: number) => void,
  /**
   * La quantité initiale de la ligne produit
   */
  qty: number;
  /**
   * Classe HTML optionnelle
   */
  className?: string;
};

/**
 * Affichage d'une ligne produit dans le panier
 */
const ProductCartLine: FC<Props> = memo(function ({ product, qty, onDelete, onQtyChange, className = ''}) {
  const handlers = useRef<NumberInputHandlers>();

  return (
    <div className={`${className} text-sm`}>
      <div className="flex flex-row gap-4 justify-between items-center mb-2">
        <h3 className="w-full">{product.name}</h3>

        <Button
          size={"sm"}
          variant={"ghost"}
          className="!px-2"
          onClick={onDelete}
        >
          <X size={14} weight="bold" className="text-red-400" />
        </Button>
      </div>

      <div className="flex justify-between">
        <div className="flex items-center bg-gray-100 rounded-lg h-auto text-default overflow-hidden w-[100px]">
          <Button
            variant={"ghost"}
            className="!py-2 !px-3 !rounded-none"
            onClick={() => handlers.current?.decrement()}
          >
            –
          </Button>

          <NumberInput
            hideControls
            value={qty}
            onChange={(val) => {
              if (val !== 0) onQtyChange(val || 0)
            }}
            handlersRef={handlers}
            min={1}
            step={1}
          />

          <Button
            variant={"ghost"}
            className="!py-2 !px-3 !rounded-none"
            onClick={() => handlers.current?.increment()}
          >
            +
          </Button>
        </div>
        <p className="flex flex-row gap-4 items-center justify-between text-base">
          {product.price * qty} €
        </p>
      </div>
    </div>
  );
});

ProductCartLine.displayName = "ProductCartLine";
export { ProductCartLine };

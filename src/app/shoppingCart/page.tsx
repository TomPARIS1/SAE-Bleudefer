"use client";

import React, { useState } from "react";
import { Product } from "./types"; // Assurez-vous d'importer correctement le type Product

export default function ShoppingCartPage() {
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [total, setTotal] = useState<number>(0);

  const handleAddToCart = (product: Product) => {
    setCartItems([...cartItems, product]);
    setTotal(total + product.price);
  };

  const handleRemoveFromCart = (productId: number) => {
    const updatedCart = cartItems.filter((item) => item.id !== productId);
    const removedProduct = cartItems.find((item) => item.id === productId);

    if (removedProduct) {
      setTotal(total - removedProduct.price);
      setCartItems(updatedCart);
    }
  };

  const handlePayment = () => {
    alert("Paiement effectué avec succès !");
    setCartItems([]);
    setTotal(0);
  };

  return (
    <div className="container mx-auto p-8">
        <div className="w-3/4">
          <h2 className="text-2xl font-bold mb-4">Votre Panier</h2>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id} className="mb-2 border-b pb-2">
                <div className="flex justify-between items-center">
                  <span>{item.name}</span>
                  <span className="text-gray-700">${item.price}</span>
                  <button
                    className="text-red-500 hover:text-red-700"
                    onClick={() => handleRemoveFromCart(item.id)}
                  >
                    Supprimer
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-lg font-bold">Total: ${total.toFixed(2)}</p>
          <button
            className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
            onClick={handlePayment}
          >
            Payer
          </button>
        </div>
      </div>
  );
}

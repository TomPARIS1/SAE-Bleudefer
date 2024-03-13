"use client";

import { useEffect, useState } from "react";

import { createClient } from "@supabase/supabase-js";
import Cookies from "js-cookie";
import {getOrder} from "../../actions/get-order";
import {Order} from "@prisma/client";
import StripeCheckout from 'react-stripe-checkout';

export default function OrderDetails() {
    const [order, setOrder] = useState<Order | null>(null);

    const handleCheckout = async (orderId : string) => {
        Cookies.remove("orderId")
        setOrder(null)
    }
    const handleOrder = async (orderId : string) => {
        const order = await getOrder(Number(orderId))
        console.log(order)
        setOrder(order)
    }

    useEffect(  () => {
        const orderIdFromCookie = Cookies.get("orderId")
        if (orderIdFromCookie != null) {
            handleOrder(orderIdFromCookie)
        }
    }, []);

    if (!order) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <div className="h-screen bg-white-100 pt-20">
                <h1 className="mb-10 text-center text-2xl font-bold">Order Details</h1>
                {order.lines.map((line) => (
                    <div key={line.id} className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
                        <div className="rounded-lg md:w-2/3">
                            <div className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
                                <img src={line.product.img} alt="product-image" className="w-full rounded-lg sm:w-40" />
                                <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                                    <div className="mt-5 sm:mt-0">
                                        <h2 className="text-lg font-bold text-gray-900">{line.product.name}</h2>
                                        <p className="mt-1 text-xs text-gray-700">{line.product.desc}</p>
                                    </div>
                                    <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                                        <div className="flex items-center border-gray-100">
                                            <p>Qty : {line.qty}</p>
                                        </div>
                                        <div className="flex items-center space-x-4">
                                            <p className="text-sm">{line.subtotal} €</p>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth="1.5"
                                                stroke="currentColor"
                                                className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
                            <div className="mb-2 flex justify-between">
                                <p className="text-gray-700">Sous-Total</p>
                                <p className="text-gray-700">{order.total} €</p>
                            </div>
                            <div className="flex justify-between">
                                <p className="text-gray-700">Frais de ports</p>
                                <p className="text-gray-700">4.99 €</p>
                            </div>
                            <hr className="my-4" />
                            <div className="flex justify-between">
                                <p className="text-lg font-bold">Total</p>
                                <div className="">
                                    <p className="mb-1 text-lg font-bold">{order.total + 3} €</p>
                                    <p className="text-sm text-gray-700">Avec la TVA</p>
                                </div>
                            </div>

                            <StripeCheckout
                                stripeKey="pk_test_51Ot8ycJH4ODryYrqdqw43JG42JyS4evlA3FCG7NBIaCXNRflMea1Yh93OvvBTGxsWdhLaTh0TWZRa7GAfATYOOoq00s1IWpmgH"
                                token={() => handleCheckout(order.id.toString())}
                                name="Payer"
                                amount={(order.total + 3) * 100}
                                currency="EUR"
                                billingAddress
                                shippingAddress
                                zipCode
                            />

                        </div>
                    </div>
                ))}
            </div>
        </div>



    );
}

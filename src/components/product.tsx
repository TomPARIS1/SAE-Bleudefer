"use client"

import Image from 'next/image';
import menuC from "@/img/menuC.jpg";
import Link from 'next/link';

export const Product = function () {
    return (
        <>
            <h1 className="text-center text-2xl my-5">Produits</h1>

            <div className="flex justify-center">
                <form>
                    <label htmlFor="select-choice" className="mr-2">FILTRER PAR:</label>
                    <select name="select-choice" id="select-choice" className="mr-10">
                        <option value="Choice 1">Choice 1</option>
                        <option value="Choice 2">Choice 2</option>
                        <option value="Choice 3">Choice 3</option>
                    </select>

                    <label htmlFor="select-choice" className="mr-2">TRIER PAR:</label>
                    <select name="select-choice" id="select-choice">
                        <option value="Choice 1">Choice 1</option>
                        <option value="Choice 2">Choice 2</option>
                        <option value="Choice 3">Choice 3</option>
                    </select>
                </form>
            </div>

            <div className="flex justify-center my-8">
                <div className="mr-12">
                    <a href="">
                        <Image
                            src={menuC}
                            width={250}
                            height={250}
                            alt="Ocean"
                            className="border-2 border-sky-200"
                        />
                    </a>
                    <h1 className="mt-3">"LeAlex" peinture à l'encre de seiche</h1>
                    <h2 className="mt-2 text-xl">99.99€</h2>
                </div>
                <div className="mr-12">
                    <a href="">
                        <Image
                            src={menuC}
                            width={250}
                            height={250}
                            alt="Ocean"
                            className="border-2 border-sky-200"
                        />
                    </a>
                    <h1 className="mt-3">"LeAlex" peinture à l'encre de seiche</h1>
                    <h2 className="mt-2 text-xl">99.99€</h2>
                </div>
                <div>
                    <a href="">
                        <Image
                            src={menuC}
                            width={250}
                            height={250}
                            alt="Ocean"
                            className="border-2 border-sky-200"
                        />
                    </a>
                    <h1 className="mt-3">"LeAlex" peinture à l'encre de seiche</h1>
                    <h2 className="mt-2 text-xl">99.99€</h2>
                </div>
            </div>
            <div className="flex justify-center my-8">
                <div className="mr-12">
                    <a href="">
                        <Image
                            src={menuC}
                            width={250}
                            height={250}
                            alt="Ocean"
                            className="border-2 border-sky-200"
                        />
                    </a>
                    <h1 className="mt-3">"LeAlex" peinture à l'encre de seiche</h1>
                    <h2 className="mt-2 text-xl">99.99€</h2>
                </div>
                <div className="mr-12">
                    <a href="">
                        <Image
                            src={menuC}
                            width={250}
                            height={250}
                            alt="Ocean"
                            className="border-2 border-sky-200"
                        />
                    </a>
                    <h1 className="mt-3">"LeAlex" peinture à l'encre de seiche</h1>
                    <h2 className="mt-2 text-xl">99.99€</h2>
                </div>
                <div>
                    <a href="">
                        <Image
                            src={menuC}
                            width={250}
                            height={250}
                            alt="Ocean"
                            className="border-2 border-sky-200"
                        />
                    </a>
                    <h1 className="mt-3">"LeAlex" peinture à l'encre de seiche</h1>
                    <h2 className="mt-2 text-xl">99.99€</h2>
                </div>
            </div>
            <div className="flex justify-center">
                <div className="mr-12">
                    <a href="">
                        <Image
                            src={menuC}
                            width={250}
                            height={250}
                            alt="Ocean"
                            className="border-2 border-sky-200"
                        />
                    </a>
                    <h1 className="mt-3">"LeAlex" peinture à l'encre de seiche</h1>
                    <h2 className="mt-2 text-xl">99.99€</h2>
                </div>
                <div className="mr-12">
                    <a href="">
                        <Image
                            src={menuC}
                            width={250}
                            height={250}
                            alt="Ocean"
                            className="border-2 border-sky-200"
                        />
                    </a>
                    <h1 className="mt-3">"LeAlex" peinture à l'encre de seiche</h1>
                    <h2 className="mt-2 text-xl">99.99€</h2>
                </div>
                <div>
                    <a href="">
                        <Image
                            src={menuC}
                            width={250}
                            height={250}
                            alt="Ocean"
                            className="border-2 border-sky-200"
                        />
                    </a>
                    <h1 className="mt-3">"LeAlex" peinture à l'encre de seiche</h1>
                    <h2 className="mt-2 text-xl">99.99€</h2>
                </div>
            </div>
            <div className="flex justify-center mt-10">
                <button type="button"
                        className="text-black bg-white rotate-180 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm mr-5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                         viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                              d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                    <span className="sr-only">Icon description</span>
                </button>
                <h1 className="text-2xl">Page 1 sur X</h1>
                <button type="button"
                        className="text-black bg-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm ml-5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                         viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                              d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                    <span className="sr-only">Icon description</span>
                </button>
            </div>
        </>
    )
}
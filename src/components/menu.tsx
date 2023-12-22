"use client";

import {FC, memo, Fragment} from "react";
import logo from '../img/LOGO_bleu_de_fer.png'
import search from '../img/search.png'
import user from '../img/user.png'
import panier from '../img/panier.png'
import Image from 'next/image'
import './css/navbar.css'
import Link from "next/link";
import {Popover, Transition} from "@headlessui/react";
import {Button} from "/components-kit/button";
import {X} from "@phosphor-icons/react";
import {Cart} from "./cart";
import {CartCounter} from "./cart-counter";

type Props = {};


function handleSearch() {

}

const Menu: FC<Props> = memo(function () {
    return (
        <nav className="shadow-xl !grid grid-cols-3">

            <div className="logo col-start-2 flex justify-center">
                <Link href="/">
                    <Image
                        src={logo}
                        width={100}
                        height={100}
                        alt="Logo Bleu de Fer"
                    />
                </Link>
            </div>

            <div className="params mr-12">
                <form className="search-box flex" onSubmit={handleSearch}>
                    <button type="submit">
                        <Image
                            src={search}
                            width={25}
                            height={25}
                            alt="Logo recherche"
                            className="mr-2"
                        />
                    </button>
                    <Popover as="div" className="mr-2">
                        {({ open }) => (
                            <>
                                <Popover.Button as={Button} variant={"ghost"} className={"!rounded-full !p-0 flex justify-center items-center aspect-square relative text-3xl"}>
                                    {open
                                        ? <X size={25} weight="regular" />
                                        : <Image
                                            src={panier}
                                            width={25}
                                            height={25}
                                            alt="Logo Bleu de Fer"
                                        />}

                                    <div className="aspect-square bg-black text-white text-center text-xs absolute right-0 top-0 rounded-full flex items-center justify-center h-[13px] w-[13px]">
                                        <div><CartCounter /></div>
                                    </div>
                                </Popover.Button>

                                <Transition
                                    as={Fragment}
                                    enter="transition ease-out duration-200"
                                    enterFrom="opacity-0 translate-y-1"
                                    enterTo="opacity-100 translate-y-0"
                                    leave="transition ease-in duration-150"
                                    leaveFrom="opacity-100 translate-y-0"
                                    leaveTo="opacity-0 translate-y-1"
                                >
                                    <Popover.Panel className="absolute left-0 sm:left-auto right-0 z-10 mt-6 sm:w-full sm:max-w-sm">
                                        <Cart />
                                    </Popover.Panel>
                                </Transition>
                            </>
                        )}
                    </Popover>
                    <button type="submit">
                        <Link href="/connexion">
                            <Image
                                src={user}
                                width={25}
                                height={25}
                                alt="Logo utilisateur"
                            />
                        </Link>
                    </button>
                </form>
            </div>

        </nav>

    )
        ;
});

Menu.displayName = "Menu";
export {Menu};

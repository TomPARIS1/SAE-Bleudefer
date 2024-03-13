"use client";
import {FC, memo, useMemo, useState} from "react";
import Link from "next/link";

type Props = {};

const DashboardMenu: FC<Props> = memo(function () {

    return (
            <div className="fixed flex flex-col top-0 left-0 w-64 bg-gray-900 h-full shadow-lg">
                <div className="flex items-center pl-6 h-20 border-b border-gray-800">
                    <div className="ml-1">
                        <p className="ml-1 text-md font-medium tracking-wide truncate text-gray-100 font-sans">EMELINE</p>
                        <div className="badge">
                            <span
                                className="px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-blue-800 bg-blue-100 rounded-full">Admin</span>
                        </div>
                    </div>
                </div>
                <div className="overflow-y-auto overflow-x-hidden flex-grow">
                    <ul className="flex flex-col py-6 space-y-1">
                        <li className="px-5">
                            <div className="flex flex-row items-center h-8">
                                <div
                                    className="flex font-semibold text-sm text-gray-300 my-4 font-sans uppercase">Dashboard
                                </div>
                            </div>
                        </li>
                        <li>
                            <Link href="/dashboard"
                               className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-700 text-gray-500 hover:text-gray-200 border-l-4 border-transparent hover:border-blue-500 pr-6">
                    <span className="inline-flex justify-center items-center ml-4">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                         xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round"
                                                                  strokeWidth="2"
                                                                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
                    </span>
                                <span
                                    className="ml-2 font-semibold text-sm tracking-wide truncate font-sans">Instagram</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/dashboard/revenus"
                               className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-700 text-gray-500 hover:text-gray-200 border-l-4 border-transparent hover:border-blue-500 pr-6">
                    <span className="inline-flex justify-center items-center ml-4">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                         xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round"
                                                                  strokeWidth="2"
                                                                  d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"></path></svg>
                    </span>
                                <span
                                    className="ml-2 font-semibold text-sm tracking-wide truncate font-sans">Revenus</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/dashboard/parametres"
                               className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-700 text-gray-500 hover:text-gray-200 border-l-4 border-transparent hover:border-blue-500 pr-6">
                    <span className="inline-flex justify-center items-center ml-4">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                         xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round"
                                                                  strokeWidth="2"
                                                                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
                    </span>
                                <span
                                    className="ml-2 font-semibold text-sm tracking-wide truncate font-sans">Paramètres</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/"
                               className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-700 text-gray-500 hover:text-gray-200 border-l-4 border-transparent hover:border-red-500 pr-6">
                <span className="inline-flex justify-center items-center ml-4 text-red-400">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                     xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round"
                                                              strokeWidth="2"
                                                              d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path></svg>
                </span>
                                <span
                                    className="ml-2 font-semibold text-sm tracking-wide truncate font-sans">Déconnexion</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
    );
});

DashboardMenu.displayName = "DashboardMenu";
export {DashboardMenu};

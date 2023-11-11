import React, { useState } from 'react';
import Link from 'next/link';
import VentesComponent from './Dashboard/ventes';
import RevenuesComponent from './Dashboard/revenues';
import DashboardComponent from './Dashboard/homedashboard'
import NotificationsComponent from './Dashboard/notifications'
import PublicationsComponentComponent from "@/components/Dashboard/publications";

export const Dashboard: React.FC = () => {
    const [currentCategory, setCurrentCategory] = useState('dashboard');

    const categoryComponents = {
        dashboard: <DashboardComponent/>,
        ventes: <VentesComponent />,
        revenus: <RevenuesComponent />,
        notifications: <NotificationsComponent />,
        publications: <PublicationsComponentComponent />
    };

    const changeCategory = (category: string) => {
        setCurrentCategory(category);
    };

    return (
        <div className="min-h-screen bg-gray-50/50">
            <aside className="bg-gray-950 -translate-x-80 fixed inset-0 z-50 my-4 ml-4 h-[calc(100vh-32px)] w-72 rounded-xl transition-transform duration-300 xl:translate-x-0">
                <div className="relative justify-center border-b border-white/20">

                    <Link className="flex items-center gap-4 py-6 px-8" href="/">
                        <h6 className="block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-white">BLEU DE FER</h6>
                    </Link>
                    <button
                        className="middle none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-8 max-w-[32px] h-8 max-h-[32px] rounded-lg text-xs text-white hover:bg-white/10 active:bg-white/30 absolute right-0 top-0 grid rounded-br-none rounded-tl-none xl:hidden"
                        type="button">
                        <span className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2"></span>
                    </button>
                </div>
                <div className="m-4">
                    <ul className="mb-4 flex flex-col gap-1">
                        <li>
                            <Link href="/dashboard" onClick={() => changeCategory('dashboard')}>
                                <div className={`middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg ${currentCategory === 'dashboard' ? 'bg-gray-600 text-white shadow-md shadow-gray-500/20 hover:shadow-lg hover:shadow-gray-500/40 active:opacity-[0.85]' : 'text-white hover:bg-white/10 active:bg-white/30'} w-full flex items-center gap-4 px-4 capitalize`}>
                                    <p className="block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize">Dashboard</p>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link href="/dashboard" onClick={() => changeCategory('ventes')}>
                                <div className={`middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg ${currentCategory === 'ventes' ? 'bg-gray-600 text-white shadow-md shadow-gray-500/20 hover:shadow-lg hover:shadow-gray-500/40 active:opacity-[0.85]' : 'text-white hover:bg-white/10 active:bg-white/30'} w-full flex items-center gap-4 px-4 capitalize`}>
                                    <p className="block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize">Ventes</p>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link href="/dashboard" onClick={() => changeCategory('revenus')}>
                                <div className={`middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg ${currentCategory === 'revenus' ? 'bg-gray-600 text-white shadow-md shadow-gray-500/20 hover:shadow-lg hover:shadow-gray-500/40 active:opacity-[0.85]' : 'text-white hover:bg-white/10 active:bg-white/30'} w-full flex items-center gap-4 px-4 capitalize`}>
                                    <p className="block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize">Revenus</p>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link href="/dashboard" onClick={() => changeCategory('notifications')}>
                                <div className={`middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg ${currentCategory === 'notifications' ? 'bg-gray-600 text-white shadow-md shadow-gray-500/20 hover:shadow-lg hover:shadow-gray-500/40 active:opacity-[0.85]' : 'text-white hover:bg-white/10 active:bg-white/30'} w-full flex items-center gap-4 px-4 capitalize`}>
                                    <p className="block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize">Notifications</p>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link href="/dashboard" onClick={() => changeCategory('publications')}>
                                <div className={`middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg ${currentCategory === 'publications' ? 'bg-gray-600 text-white shadow-md shadow-gray-500/20 hover:shadow-lg hover:shadow-gray-500/40 active:opacity-[0.85]' : 'text-white hover:bg-white/10 active:bg-white/30'} w-full flex items-center gap-4 px-4 capitalize`}>
                                    <p className="block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize">Publications</p>
                                </div>
                            </Link>
                        </li>
                    </ul>
                </div>
            </aside>

            <div className="p-4 xl:ml-80">
                {categoryComponents[currentCategory]}
            </div>
        </div>
    );
};

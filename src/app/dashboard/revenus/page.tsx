"use client"


import {DashboardMenu} from "../../../components/dashboard-menu";
import {useRouter} from "next/navigation";

export default function InstagramDashboard() {


    return (
        <div className="flex flex-col justify-center mx-72 mt-5">
            <DashboardMenu />

        </div>
    );
}

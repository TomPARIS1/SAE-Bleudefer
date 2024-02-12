"use server";

import { computeCartTotal, computeLineSubtotal } from "../hooks/use-cart";
import { CartData } from "../types";
import prisma from "../utils/prisma";
import {createServerComponentClient} from "@supabase/auth-helpers-nextjs";
import {cookies} from "next/headers";

export async function createOrder(cart: CartData) {
  const supabase = createServerComponentClient({ cookies });
  const {data} = await supabase.auth.getUser();
  const userId = data.user?.id;

  if (!userId) {
    return false
  }

 
}
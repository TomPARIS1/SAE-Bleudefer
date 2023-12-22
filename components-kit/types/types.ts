export type ProductsCategoryData = {
  id: number;
  name: string;
  slug: string;
  products: ProductData[]
};

export type ProductData = {
  id: number;
  name: string;
  desc: string | null;
  slug: string;
  path: string;
  img: string;
  price: number;
};

export type Cart = {
  lines: Record<number, CartLine>
}

export type CartLine = {
  product: ProductData,
  qty: number
}

export type OrderData = ({
  id: number,
  status: "IN_PROGRESS" | "COMPLETED"
  createdAt: Date,
  completedAt: Date | null,
  total: number,
  userId?:string,
  lines: OrderLine[],
});

export type OrderLine = {
  id: number,
  product: ProductData,
  qty: number,
  subtotal: number
}

export type OrderTableRowData = Omit<OrderData, 'lines'>;
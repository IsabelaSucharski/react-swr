/* eslint-disable import/no-anonymous-default-export */
import { NextApiRequest, NextApiResponse } from "next";
import { getProducts } from "../lib/db";

export default async (_: NextApiRequest, res: NextApiResponse<any>) => {
  res.setHeader("Cache-Control", "s-maxage=86400, stale-while-revalidate");

  const products = await getProducts();

  res.status(200).json({ products });
};

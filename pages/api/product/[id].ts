/* eslint-disable import/no-anonymous-default-export */
import { NextApiRequest, NextApiResponse } from "next";
import { getProductById } from "../../lib/db";

export default async (req: NextApiRequest, res: NextApiResponse<any>) => {
  res.setHeader("Cache-Control", "s-maxage=86400, stale-while-revalidate");
  const product = await getProductById(req.query.id);

  res.status(200).json({ product });
};

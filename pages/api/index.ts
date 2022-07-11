import getProducts from "./products";
import getProductById from "./product/[id]";

export const fetcher = async (url: string): Promise<any[]> => {
  console.log(url);
  const res = await fetch(url);
  return await res.json();
};

export default async function handler(
  req: any,
  res: {
    status: (arg0: number) => {
      (): any;
      new (): any;
      json: { (arg0: Response): void; new (): any };
    };
  }
) {
  res.status(200).json(await getProducts());
}

import Link from "next/link";
import useSWR, { SWRConfig } from "swr";
import { getProducts } from "../lib/db";

export async function getStaticProps() {
  const products = await getProducts();

  return {
    props: {
      fallback: {
        "api/products": products,
      },
    },
    revalidate: 10,
  };
}

export default function products({ fallback }: any) {
  const products = fallback[`api/products`].sort(
      (a: { rating: { rate: number } }, b: { rating: { rate: number } }) =>
        b.rating.rate - a.rating.rate
    )
    .slice(0, 10);

  return (
    <SWRConfig value={{ fallback }}>
      <ul>
        {products.map((p: any) => {
          return (
            <li key={p.id}>
              <Link href={`products/${p.id}`}>{p.title}</Link>
            </li>
          );
        })}
      </ul>
    </SWRConfig>
  );
}

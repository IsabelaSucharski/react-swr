import Link from "next/link";
import useSWR, { SWRConfig } from "swr";
import { getProducts } from "../lib/db";

import {
  Container,
  UlProducts,
  LiProducts,
  ContainerDetalhes,
} from "../styles";

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
  const products = fallback[`api/products`]
    .sort(
      (a: { rating: { rate: number } }, b: { rating: { rate: number } }) =>
        b.rating.rate - a.rating.rate
    )
    .slice(0, 10);

  return (
    <SWRConfig value={{ fallback }}>
      <Container>
        <UlProducts>
          {products.map((p: any) => {
            return (
              <LiProducts key={p.id}>
                <Link href={`products/${p.id}`}>{p.title}</Link>
              </LiProducts>
            );
          })}
        </UlProducts>
      </Container>
    </SWRConfig>
  );
}

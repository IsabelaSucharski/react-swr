/* eslint-disable react-hooks/rules-of-hooks */
import useSWR from "swr";
import { fetcher } from "../api";

export async function getStaticProps({ params }: any) {
  const url = `http://localhost:3000/api/product/${params.id}`;

  const { product } = await fetch(url).then((res) => {
    return res.json();
  });

  return {
    props: {
      product,
    },
    revalidate: 1000,
  };
}

export async function getStaticPaths() {
  const url = "http://localhost:3000/api/products";
  const { products } = await fetch(url).then((res) => {
    return res.json();
  });

  const paths = products.map((p: { id: any }) => {
    return {
      params: {
        id: p.id.toString(),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

const productsById = ({ product }: any) => {
  const url = `http://localhost:3000/api/product/${product.id}`;

  const { data, error } = useSWR(url, fetcher);

  if (error) return <>error</>;
  if (!data) return <>Loading...</>;

  return (
    <>
      <h1>Detalhes</h1>
      <p>{product.title}</p>
      <p>{product.description}</p>
      <p>{product.category}</p>
      <p>{product.price}</p>
    </>
  );
};

export default productsById;

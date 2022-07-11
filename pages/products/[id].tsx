/* eslint-disable react-hooks/rules-of-hooks */
import useSWR from "swr";
import { fetcher } from "../api";

export async function getStaticProps({ params }: any) {
  const { getProductById } = require("../api/product/[id]");

  const { data } = useSWR(getProductById(params.id), fetcher);
  console.log(data);

  return {
    props: {
      data,
    },
    revalidate: 1000,
  };
}

export async function getStaticPaths() {
  const { getProducts } = require("../api/products");

  const { data } = useSWR(getProducts, fetcher);

  const paths = data?.map((p: { id: any }) => {
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

const products = (props: any) => {
  return (
    <div>
      oi
      <h1>Detalhes</h1>
      {props.data}
    </div>
  );
};

export default products;

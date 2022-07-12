/* eslint-disable react-hooks/rules-of-hooks */
import useSWR from "swr";
import { fetcher } from "../api";
import { formatNumbers } from "../helper";
import { Container, ContainerDetalhes, Text, Title } from "../styles";

export async function getStaticProps({ params }: any) {
  const url = `http://localhost:3000/api/product/${params.id}`;

  const { product } = await fetch(url).then((res) => {
    return res.json();
  });

  return {
    props: {
      product,
    },
    revalidate: 10,
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
    <Container>
      <ContainerDetalhes>
        <div>
          <Title>Detalhes</Title>
          <Text>Título:</Text>
          <p>{product.title}</p>
          <Text>Descrição:</Text>
          <p>{product.description}</p>
          <Text>Categoria:</Text>
          <p>{product.category}</p>
          <Text>Preço:</Text>
          <p>{formatNumbers(product.price)}</p>
        </div>
      </ContainerDetalhes>
    </Container>
  );
};

export default productsById;

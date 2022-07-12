import type { NextPage } from "next";
import Link from "next/link";

import { ButtonProdutos, Container } from "./styles";

const Home: NextPage = () => {
  return (
    <Container>
      <div>
        <h1>Clique para visualizar os produtos</h1>
        <ButtonProdutos>
          <Link href="/products">produtos</Link>
        </ButtonProdutos>
      </div>
    </Container>
  );
};

export default Home;

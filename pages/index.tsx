import type { NextPage } from "next";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div>
      <Link href="/products">produtos</Link>
    </div>
  );
};

export default Home;

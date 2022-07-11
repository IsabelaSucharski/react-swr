export const getProducts = async () => {
  console.log("oi");
  const res = await fetch(`https://fakestoreapi.com/products`);
  return await res.json();
};

export const getProductById = async (id: any) => {
  const res = fetch(`https://fakestoreapi.com/products/${id}`);
  return await (await res).json();
};
export const getProducts = async () => {
  const res = await fetch(`https://fakestoreapi.com/products`);
  return await res.json();
};

export const getProductById = async (id: any) => {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  return await res.json();
};
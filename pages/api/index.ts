export const fetcher = async (url: string): Promise<any[]> => {
  const res = await fetch(url);
  return await res.json();
};

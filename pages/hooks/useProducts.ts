import useSWR from "swr";
import { fetcher } from "../api";

export const useAllPosts = () => {
  const swr = useSWR<any>("/api/products/", fetcher);

  return {
    ...swr,
  };
};
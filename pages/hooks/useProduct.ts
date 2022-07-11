import useSWR from "swr";
import { fetcher } from "../api";

export const usePost = (id: any) => {
  const swr = useSWR<any>(id ? null : "/api/product/" + id, fetcher);

  return {
    ...swr,
  };
};

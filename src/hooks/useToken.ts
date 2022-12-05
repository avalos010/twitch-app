import { getToken } from "../api";
import { useQuery } from "@tanstack/react-query";

export default function useToken() {
  return useQuery(
    ["token"],
    async () => {
      return getToken();
    },
    { refetchOnMount: false }
  );
}

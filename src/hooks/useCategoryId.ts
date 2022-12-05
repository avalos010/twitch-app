import { getCategoryId } from "../api";
import { useQuery } from "@tanstack/react-query";
import useToken from "./useToken";

export default function useCategoryId(category: string) {
  const tokenData = useToken();
  const token = tokenData.data ? tokenData.data.access_token : null;

  return useQuery(
    ["categories", token],
    async () => {
      if (token) {
        return getCategoryId(category, token);
      }
    },
    { refetchOnMount: false, enabled: !!token }
  );
}

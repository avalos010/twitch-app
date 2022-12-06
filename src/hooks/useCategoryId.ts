import { getCategoryId } from "../api";
import { useQuery } from "@tanstack/react-query";
import useToken from "./useToken";

export default function useCategoryId(category: string) {
  const tokenData = useToken();
  const token = tokenData.data ? tokenData.data.access_token : null;

  return useQuery(
    ["categories", token, category],
    async () => {
      if (token && category) {
        return getCategoryId(category, token);
      }
    },
    { refetchOnMount: false, enabled: !!token && !!category }
  );
}

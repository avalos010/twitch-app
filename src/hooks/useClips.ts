import { getClips } from "../api";
import { useQuery } from "@tanstack/react-query";
import useToken from "./useToken";

export default function useClips(gameId: string) {
  const tokenData = useToken();
  const token = tokenData.data ? tokenData.data.access_token : null;

  console.log(tokenData, gameId);
  return useQuery(
    ["videos", token, gameId],
    async () => {
      if (token) {
        return getClips(gameId, token);
      }
    },
    {
      refetchOnMount: false,
      enabled: !!token,
      refetchOnReconnect: false,
      refetchOnWindowFocus: false,
    }
  );
}

import { getVideos } from "../api";
import { useQuery } from "@tanstack/react-query";
import useToken from "./useToken";

export default function useVideos() {
  const tokenData = useToken();
  const token = tokenData.data ? tokenData.data.access_token : null;

  console.log(tokenData);
  return useQuery(
    ["videos", token],
    async () => {
      if (token) {
        return getVideos(token);
      }
    },
    { refetchOnMount: false, enabled: !!token }
  );
}

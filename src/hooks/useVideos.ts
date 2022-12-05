import { getVideos } from "../api";
import { useQuery } from "@tanstack/react-query";
import useToken from "./useToken";

export default function useVideos() {
  const tokenData = useToken();
  const token: string = tokenData.data?.data.access_token;

  console.log(token);
  return useQuery(
    ["videos", token],
    async () => {
      return getVideos(token);
    },
    { refetchOnMount: false, enabled: !!token }
  );
}

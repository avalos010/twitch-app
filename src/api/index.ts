import axios from "axios";

const clientId = import.meta.env.VITE_APP_CLIENT_ID;
const secret = import.meta.env.VITE_APP_SECRET;

export async function getToken() {
  const data = await axios.post(
    `https://id.twitch.tv/oauth2/token`,
    {
      client_id: clientId,
      client_secret: secret,
      grant_type: "client_credentials",
    },
    {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    }
  );

  return data;
}

export async function getVideos(token: string) {
  const data = await axios.get(
    "https://api.twitch.tv/helix/videos?id=987654321",
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Client-Id": clientId,
      },
    }
  );
  return data;
}

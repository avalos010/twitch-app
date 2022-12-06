import axios from "axios";

export interface Token {
  access_token: string;
  expires_in: number;
  token_type: "bearer";
}

export interface Categories {
  data: Category[];
  pagination: unknown;
}

export interface Category {
  box_art_url: string;
  id: string;
  name: string;
}

const clientId = import.meta.env.VITE_APP_CLIENT_ID;
const secret = import.meta.env.VITE_APP_SECRET;

export async function getToken() {
  const res = await axios.post(
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

  const data: Token = res.data;
  return data;
}

export async function getVideos(gameId: string, token: string) {
  const res = await axios.get(
    `https://api.twitch.tv/helix/clips?game_id=${gameId}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Client-Id": clientId,
      },
    }
  );
  return res.data;
}

export async function getCategoryId(category: string, token: string) {
  const res = await axios.get(
    `https://api.twitch.tv/helix/search/categories?query=${encodeURIComponent(
      category
    )}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Client-Id": clientId,
      },
    }
  );
  const data: Categories = res.data;

  return data;
}

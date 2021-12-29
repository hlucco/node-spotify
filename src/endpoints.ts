import axios from "axios";
import SpotifyService from "./service";
import { serializeQuery } from "./util";

export type Query = {
  q: string;
  type: string[];
  include_external?: string;
  limit?: number;
  market?: string;
  offset?: number;
};

export async function search(query: Query, service: SpotifyService) {
  let config = {
    headers: {
      Authorization: `Bearer ${service.retrieveToken()}`,
    },
  };

  try {
    let spotifyResult = await axios.get(
      `https://api.spotify.com/v1/search${serializeQuery(query)}`,
      config
    );
    return spotifyResult.data;
  } catch (e) {
    return e.response.data;
  }
}

export async function getUserProfile(service: SpotifyService) {
  let config = {
    headers: {
      Authorization: `Bearer ${service.retrieveUser().token}`,
    },
  };

  try {
    let spotifyResult = await axios.get(
      `https://api.spotify.com/v1/me`,
      config
    );

    return spotifyResult.data;
  } catch (e) {
    return e.response.data;
  }
}

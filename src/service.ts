import axios from "axios";

type ClientData = {
  clientId: string;
  clientSecret: string;
};

export default class SpotifyService {
  private accessToken: string;
  private clientId: string;
  private clientSecret: string;

  constructor(clientData: ClientData) {
    this.clientId = clientData.clientId;
    this.clientSecret = clientData.clientSecret;
  }

  storeToken(token: string): string {
    this.accessToken = token;
    return this.accessToken;
  }

  retrieveToken(): string {
    return this.accessToken;
  }

  async init(): Promise<Object> {
    let authConfig = {
      headers: {
        Authorization: `Basic ${Buffer.from(
          `${this.clientId}:${this.clientSecret}`
        ).toString("base64")}`,
      },
    };

    try {
      let authData = await axios.post(
        `https://accounts.spotify.com/api/token`,
        "grant_type=client_credentials",
        authConfig
      );

      this.storeToken(authData.data.access_token);

      return authData.data;
    } catch (error) {
      return error.response.data;
    }
  }
}

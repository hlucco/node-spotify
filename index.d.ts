export declare type Query = {
  q: string;
  type: string[];
  include_external?: string;
  limit?: number;
  market?: string;
  offset?: number;
};
export declare function search(
  query: Query,
  service: SpotifyService
): Promise<any>;
export declare function getUserProfile(service: SpotifyService): Promise<any>;

declare type ClientData = {
  clientId: string;
  clientSecret: string;
};
declare type User = {
  username: string;
  token: string;
};
export default class SpotifyService {
  private accessToken;
  private clientId;
  private clientSecret;
  private loggedIn;
  private loggedInUser;
  constructor(clientData: ClientData);
  storeToken(token: string): string;
  retrieveToken(): string;
  isLoggedIn(): boolean;
  retrieveUser(): User;
  storeUser(user: User): void;
  init(): Promise<Object>;
}

export declare function serializeQuery(query: Query): string;

export declare type ClientData = {
    clientId: string;
    clientSecret: string;
};
export declare type User = {
    username: string;
    token: string;
};
export declare class SpotifyService {
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

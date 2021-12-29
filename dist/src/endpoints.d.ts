import SpotifyService from "./service";
export declare type Query = {
    q: string;
    type: string[];
    include_external?: string;
    limit?: number;
    market?: string;
    offset?: number;
};
export declare function search(query: Query, service: SpotifyService): Promise<any>;
export declare function getUserProfile(service: SpotifyService): Promise<any>;

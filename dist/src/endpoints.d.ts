import { SpotifyService } from "./service";
export declare type Query = {
    q: string;
    type: string[];
    include_external?: string;
    limit?: number;
    market?: string;
    offset?: number;
};
export declare type TrackInfo = {
    context_uri?: string;
    uris?: string[];
    offset?: Object;
    position_ms?: number;
};
export declare function search(query: Query, service: SpotifyService): Promise<any>;
export declare function getUserProfile(service: SpotifyService): Promise<any>;
export declare function play(service: SpotifyService, deviceId: string, trackInfo?: TrackInfo): Promise<any>;
export declare function getDevices(service: SpotifyService): Promise<any>;
export declare function pause(service: SpotifyService, deviceId: string): Promise<any>;

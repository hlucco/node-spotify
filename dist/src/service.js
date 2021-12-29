"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
class SpotifyService {
    constructor(clientData) {
        this.clientId = clientData.clientId;
        this.clientSecret = clientData.clientSecret;
        this.loggedIn = false;
        this.loggedInUser = null;
    }
    storeToken(token) {
        this.accessToken = token;
        return this.accessToken;
    }
    retrieveToken() {
        return this.accessToken;
    }
    isLoggedIn() {
        return this.loggedIn;
    }
    retrieveUser() {
        return this.loggedInUser;
    }
    storeUser(user) {
        this.loggedInUser = user;
    }
    init() {
        return __awaiter(this, void 0, void 0, function* () {
            let authConfig = {
                headers: {
                    Authorization: `Basic ${Buffer.from(`${this.clientId}:${this.clientSecret}`).toString("base64")}`,
                },
            };
            try {
                let authData = yield axios_1.default.post(`https://accounts.spotify.com/api/token`, "grant_type=client_credentials", authConfig);
                this.storeToken(authData.data.access_token);
                return authData.data;
            }
            catch (error) {
                return error.response.data;
            }
        });
    }
}
exports.default = SpotifyService;
//# sourceMappingURL=service.js.map
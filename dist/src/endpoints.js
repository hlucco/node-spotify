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
exports.pause = exports.getDevices = exports.play = exports.getUserProfile = exports.search = void 0;
const axios_1 = __importDefault(require("axios"));
const util_1 = require("./util");
function search(query, service) {
    return __awaiter(this, void 0, void 0, function* () {
        let config = {
            headers: {
                Authorization: `Bearer ${service.retrieveToken()}`,
            },
        };
        try {
            let spotifyResult = yield axios_1.default.get(`https://api.spotify.com/v1/search${(0, util_1.serializeQuery)(query)}`, config);
            return spotifyResult.data;
        }
        catch (e) {
            return e.response.data;
        }
    });
}
exports.search = search;
function getUserProfile(service) {
    return __awaiter(this, void 0, void 0, function* () {
        let config = {
            headers: {
                Authorization: `Bearer ${service.retrieveUser().token}`,
            },
        };
        try {
            let spotifyResult = yield axios_1.default.get(`https://api.spotify.com/v1/me`, config);
            return spotifyResult.data;
        }
        catch (e) {
            return e.response.data;
        }
    });
}
exports.getUserProfile = getUserProfile;
function play(service, deviceId, trackInfo) {
    return __awaiter(this, void 0, void 0, function* () {
        let config = {
            headers: {
                Authorization: `Bearer ${service.retrieveUser().token}`,
            },
        };
        try {
            let spotifyResult = yield axios_1.default.put(`https://api.spotify.com/v1/me/player/play?device_id=${deviceId}`, trackInfo, config);
            return spotifyResult.data;
        }
        catch (e) {
            return e.response.data;
        }
    });
}
exports.play = play;
function getDevices(service) {
    return __awaiter(this, void 0, void 0, function* () {
        let config = {
            headers: {
                Authorization: `Bearer ${service.retrieveUser().token}`,
            },
        };
        try {
            let spotifyResult = yield axios_1.default.get(`https://api.spotify.com/v1/me/player/devices`, config);
            return spotifyResult.data;
        }
        catch (e) {
            return e.response.data;
        }
    });
}
exports.getDevices = getDevices;
function pause(service, deviceId) {
    return __awaiter(this, void 0, void 0, function* () {
        let config = {
            headers: {
                Authorization: `Bearer ${service.retrieveUser().token}`,
            },
        };
        try {
            let spotifyResult = yield axios_1.default.put(`https://api.spotify.com/v1/me/player/pause?device_id=${deviceId}`, {}, config);
            return spotifyResult.data;
        }
        catch (e) {
            return e.response.data;
        }
    });
}
exports.pause = pause;
//# sourceMappingURL=endpoints.js.map
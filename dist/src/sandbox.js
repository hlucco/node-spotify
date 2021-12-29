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
const keys_json_1 = __importDefault(require("../keys.json"));
const endpoints_1 = require("./endpoints");
const service_1 = __importDefault(require("./service"));
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    let clientData = {
        clientId: keys_json_1.default.client_id,
        clientSecret: keys_json_1.default.client_secret,
    };
    let service = new service_1.default(clientData);
    yield service.init();
    let query = {
        q: "Taylor Swift",
        type: ["track"],
        limit: 10,
        offset: 0,
    };
    let data = yield endpoints_1.search(query, service);
    console.log(data.tracks.items);
    let userdata = yield endpoints_1.getUserProfile(service);
    console.log(userdata);
});
main();
//# sourceMappingURL=sandbox.js.map
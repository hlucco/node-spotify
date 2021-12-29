import keys from "../keys.json";
import { getUserProfile, search } from "./endpoints";
import SpotifyService from "./service";

const main = async () => {
  let clientData = {
    clientId: keys.client_id,
    clientSecret: keys.client_secret,
  };

  let service = new SpotifyService(clientData);
  await service.init();
  let query = {
    q: "Taylor Swift",
    type: ["track"],
    limit: 10,
    offset: 0,
  };

  let data = await search(query, service);
  console.log(data.tracks.items);

  let userdata = await getUserProfile(service);
  console.log(userdata);
};

main();

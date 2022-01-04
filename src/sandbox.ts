import keys from "../keys.json";
import { getDevices, getUserProfile, play, search, pause } from "./endpoints";
import { SpotifyService } from "./service";

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

  service.storeUser({
    username: "username here",
    token: "token here",
  });

  let userdata = await getUserProfile(service);
  console.log(userdata);

  let devices = await getDevices(service);
  console.log(devices);

  await play(service, devices.devices[0].id);
};

main();

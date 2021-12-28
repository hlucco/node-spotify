# wrapped-spotify

Node JS wrapper for Spotify Web APIs.

## Install

`npm install wrapped-spotify`

## Getting Started

To begin using any of the endpoint methods, create a service:

```
let service = new SpotifyService(clientData);
await service.init();
let query = {
    q: "Taylor Swift",
    type: ["track"],
    limit: 10,
    offset: 0,
};
```

Then pass this initialized service into the method for the desired spotify endpoint's method.

```
let data = await search(query, service);
console.log(data.tracks.items);
```

## Run

After cloning this repository:

`npm install`

`npm start`

## Supported Endpoints

Get Spotify catalog information about albums, artists, playlists, tracks, shows or episodes that match a keyword string.

- `search(query: Query, service: SpotifyService)`

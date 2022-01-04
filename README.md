# wrapped-spotify

[![npm version](https://img.shields.io/npm/v/axios.svg?style=flat-square)](https://www.npmjs.org/package/wrapped-spotify)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Npm package total downloads](https://badgen.net/npm/dt/wrapped-spotify)](https://www.npmjs.org/package/wrapped-spotify)

Node JS wrapper for Spotify Web APIs.

## Install

`npm install wrapped-spotify`

## API Keys

To use this package you will both a client id and a client secret from Spotify. These keys can be obtained from [spotify](https://developer.spotify.com/documentation/web-api/quick-start/). Keys are required on initialization of a `SpotifyService`.

## Getting Started

To begin using any of the endpoint methods, create a service:

```ts
import * as ws from "wrapped-spotify";

let clientData = {
  clientId: keys.client_id,
  clientSecret: keys.client_secret,
};

let service = new ws.SpotifyService(clientData);
await service.init();
```

Then pass this initialized service into the method for the desired spotify endpoint's method.

```ts
let query = {
  q: "Taylor Swift",
  type: ["track"],
  limit: 10,
  offset: 0,
};

let data = await ws.search(query, service);
```

data will contain the results of your query.

## Run

After cloning this repository:

`npm install`

`npm start`

## Supported Endpoints

Get Spotify catalog information about albums, artists, playlists, tracks, shows or episodes that match a keyword string.

- `search(query: Query, service: SpotifyService)`

Get detailed profile information about the current user (including the current user's username).

- `getUserProfile(service: SpotifyService)`

Start a new context or resume current playback on the user's active device.

- `play(service: SpotifyService, deviceId: string, trackInfo?: TrackInfo)`

Pause playback on the user's account.

- `pause(service: SpotifyService, deviceId: string)`

Get information about a user’s available devices.

- `getDevices(service: SpotifyService)`

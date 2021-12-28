# wrapped-spotify

[![npm version](https://img.shields.io/npm/v/axios.svg?style=flat-square)](https://www.npmjs.org/package/wrapped-spotify)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Node JS wrapper for Spotify Web APIs.

## Install

`npm install wrapped-spotify`

## API Keys

To use this package you will both a client id and a client secret from Spotify. These keys can be obtained from [spotify](https://developer.spotify.com/documentation/web-api/quick-start/). These keys are required on initialization of a `SpotifyService`.

## Getting Started

To begin using any of the endpoint methods, create a service:

```ts
let clientData = {
  clientId: keys.client_id,
  clientSecret: keys.client_secret,
};

let service = new SpotifyService(clientData);
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

let data = await search(query, service);
```

data will contain the results of your query.

## Run

After cloning this repository:

`npm install`

`npm start`

## Supported Endpoints

Get Spotify catalog information about albums, artists, playlists, tracks, shows or episodes that match a keyword string.

- `search(query: Query, service: SpotifyService)`

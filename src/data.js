// https://developer.spotify.com/
// documentation/web-playback-sdk/quick-start/#

export const authEndpoint =
"https://accounts.spotify.com/authorize";
const redirectUri = "http://localhost:3000/";
const clientId = "a6544dfa53bd493794d3c52ed6da7658";

const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
];

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;

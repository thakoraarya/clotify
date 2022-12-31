//https://developer.spotify.com/documentation/web-playback-sdk/quick-start#

// spotify token
//BQDFa71YIvXQjhDUbILrkrcgIflNOih-Sys_B0wS9rDK7kiklxWMicCiDbu8LeGYClbdYrOuK21B_aZCTqxLV7J-DSCGIkN7vvD57vTg8VSHIFKGm2ZI05lohgQVD0Dj7FwV1lujhIpW7qvdZVcRLdqJD9oA-V9inxzwB_rhn3-pPbMdMPkY0G9luN3tZlalVuRPzklyeJ08W9upadryFp0

export const authEndpoint = "https://accounts.spotify.com/authorize";

const redirectUrl = "http://localhost:3000/";
const clientId = "1977f5e619154118a5d18207f9c71eb3";

const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
];

export const getTokenFromUrl = () => {
    return window.location.hash
        .substring(1)
        .split("&")
        .reduce((initial, item) => {
            var parts = item.split("=");
            initial[parts[0]] = decodeURIComponent(parts[1]);
            return initial;
        }, {});
};

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUrl}&scope=${scopes.join(
    "%20",
)}&response_type=token&showdialog=true`;

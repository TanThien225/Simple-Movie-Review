// import axios from 'axios';

// export default axios.create({
//     baseURL:'https://9c96-103-106-239-104.ap.ngrok.io',
//     headers: {"ngrok-skip-browser-warning": "true"}
// });

import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080", // Update with your backend port and API path
//   headers: {
//     "Access-Control-Allow-Origin": "*",
//     "Access-Control-Allow-Methods": "GET,OPTIONS,PATCH,DELETE,POST,PUT",
//     "Access-Control-Allow-Headers":
//       "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, Authorization",
//     "Access-Control-Allow-Credentials": "true",
//   },
});

export default api;

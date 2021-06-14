import axios from "axios";

const Query = (link) => {
  async function sendRequest(url) {
    const request = axios.get(url, {
      headers: {
        "Access-Control-Allow-Origin": "https://localhost:3000",
        Accept: "application/json, text/plain, */*",
        Authorization:
          " Basic {BASE64_ENCODED(gIJdINdl183ge1sMAIWh2aaCaDCyq50y3SXIW9sJ:Ocxd4ix5nIfwn8GhnA96O74O4NaxmzCfxdxsJps9RPAFI3gDJvd5WXTzDixzixWwQxfyg3CuaP0rG6zmdzTqKHf2mC8qDZIJrGotNnUp4cxdBrNuZkY4ZLKFAEmW5bLZ)} ",
        "Content-Type": "text/plain;charset=UTF-8",
      },
    });
    return request;
  }
  return sendRequest;
};
export default Query;

function queryCors(url,username,password) {
  const headers = new Headers();

  headers.append("Content-Type", "application/json");
  headers.append("Accept", "application/json");

  headers.append("Access-Control-Allow-Origin", "http://localhost:3000");
  headers.append("Access-Control-Allow-Credentials", "true");
  headers.append("Authorization",
    `Basic  + BASE64_ENCODED(${username}:${password})`
  );

  fetch(url, {
    method: "GET",
    headers: headers,
  })
    .then((response) => response.json())
    .then((json) => console.log(json))
    .catch(error => console.log('Authorization failed : ' + error.message));
}
export default queryCors;

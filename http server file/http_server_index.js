const http = require("http");


const server = http.createServer((req, res) => {
  return res.end("server responded!");
});

server.listen(8001, () => {
  console.log("server is running, Port: 8001");
});

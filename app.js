//~ Import
const http = require("http");
const moment = require("moment");
//~ Declarations
const portServer = process.env.PORT ? process.env.PORT : 5000;

//~ Routing
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/json");
  res.write(
    JSON.stringify({
      status: "Alhamdulillah Succesfully",
      message: "Welcome to MERN Class",
      loginAt: moment().format("DD/MM/YY"),
    })
  );
  res.end();
});

server.listen(portServer, () => console.log(`Port server listening on ${portServer}`)); //

//~ Import
const http = require("http");
const moment = require("moment");
//~ Declarations
const portServer = process.env.PORT ? process.env.PORT : 5000;

//~ Routing
const server = http.createServer((req, res) => {
  switch (req.url) {
    case "/greet":
      greet(res);
      break;
    case "/":
      home(res);
      break;
    default:
      pageNon(res);
      break;
  }
});

const greet = res => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/json");
  res.write(
    JSON.stringify({
      status: "Alhamdulillah Succesfully",
      message: "Welcome to MERN Class",
      study: "Node JS",
      loginAt: moment().format("DD/MM/YY"),
    })
  );
  res.end();
};

const pageNon = res => {
  res.statusCode = 404;
  res.setHeader("Content-Type", "text/json");
  res.write(
    JSON.stringify({
      status: "Not Found",
      message: "Resource not found",
    })
  );
  res.end();
};

const home = res => {
  res.end(`<h1>Ini Home Page</h1>`);
};

//! Start the server
server.listen(portServer, () => console.log(`Port server listening on ${portServer}`)); //

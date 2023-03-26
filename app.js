// const sallam = require("./module");//? Import 1 function
const { sallam, fullName } = require("./module"); //? Import >1 function like an object
// console.log(sallam(), "\n\t", fullName());

const http = require("http"); //
const moment = require("moment"); //

const server = http.createServer((req, res) => {
  switch (req.url) {
    case "/wellcome":
      wellcome(res);
      break;
    case "/":
      home(res);
      break; //
    default:
      page404(res);
      break;
  }
});

const wellcome = res => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/json");
  res.write(
    JSON.stringify({
      status: "Alhamdulillah successfully",
      message: "Welcome to MERN class week 8",
      study: "Node JS",
      loginAt: moment(),
    })
  );
  res.end();
};

const page404 = res => {
  res.statusCode = 404;
  res.setHeader("Content-Type", "text/json");
  res.write(
    JSON.stringify({
      status: "Page not found",
      message: "Please input a correct page",
    })
  );
  res.end();
};

const home = res => {
  res.end(`<h1>${sallam()}</h1>`);
};

server.listen(3000, () => console.log("Server listening on port at http://localhost:3000"));

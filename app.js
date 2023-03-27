//~ Import
const express = require("express");
const router = require("./routes");
const logger = require("./middlewares/logger");
//~ Initialize
const app = express();
const portServer = process.env.PORT ? process.env.PORT : 3001;

//logger buatan //note logger harus selalu diatas router agar dapat tampil
app.use(logger);
app.use(express.urlencoded({ extended: true }));
//~Routing
app.use(router);
//~ Handling errors dengan page
app.use((req, res, next) => {
  res.status(404);
  res.send({
    status: "Failed to load",
    message: "Resource " + req.originalUrl + " is not found",
  });
  next();
});

//~ Start server
app.listen(portServer, () => console.log(`Server listening on http://localhost:${portServer}`));

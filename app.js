//~ Import
const express = require("express");

//~ Initialize
const app = express();
const portServer = process.env.PORT ? process.env.PORT : 3001;

//~Routing
app.use("/", (req, res, next) => {
  res.send({
    status: "Alhamdulillah Success!",
    message: "Berhasil berjalan",
  });
});

//~ Start server
app.listen(portServer, () => console.log(`Server listening on http://localhost:${portServer}`));

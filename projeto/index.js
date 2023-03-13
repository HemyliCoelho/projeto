const express = require("express");
const app = express();
const path = require("path");

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

const oficinaRoute = require("./routes/oficinaRoute");
const compraRoute = require("./routes/compraRoute");
const pecaRoute = require("./routes/pecaRoute");
const publicRoute = require("./routes/publicRoute");

app.use("/admin", oficinaRoute);
app.use("/admin", compraRoute);
app.use("/admin", pecaRoute);
app.use("/", publicRoute);

app.listen(3000, function () {
  console.log("Servidor funcionando na porta 3000");
});

const express = require("express");
// יודע לקחת כתובת ולעשות עליה מנפלוציה
const path = require("path");
// const http = require("http");

const colors = require("colors");

// התחברות למונגו
require("./db/mongoConnect");

// חיבור של פונקציית הראוטר
const { routesInit } = require("./routes/config_route");

const app = express();

app.use(express.json());

app.use(express.static(path.join(__dirname, "public")));

// לאחר כל המידלוורים הגענו לראוט האמיתי
routesInit(app);

// הגדרנו פורט
let port = process.env.PORT || "3000";
// מאזינים לשרת בפורט 3000
app.listen(port, () => {
  console.log(`Listening to http://localhost: ${port}`.green.bold);
});

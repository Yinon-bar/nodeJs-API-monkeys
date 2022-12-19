// getting-started.js
const mongoose = require("mongoose");

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://localhost:27017/express0");
  console.log("Mongo connected! '_' ".bgGreen.bold);
  // use `await mongoose.connect('mongodb://user:password@localhost:27017/test');` if your database has auth enabled
}

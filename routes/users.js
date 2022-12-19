const express = require("express");
const { UserModel, validUser, validLogin } = require("../models/userModel");
const router = express.Router();
const bcrypt = require("bcrypt");

router.get("/", (req, res) => {
  res.json({ msg: "users work" });
});

router.post("/", async (req, res) => {
  //req.body
  let validBody = validUser(req.body);
  if (validBody.error) {
    return res.status(400).json(validBody.error.details);
  }
  try {
    let user = new UserModel(req.body);
    user.pass = await bcrypt.hash(user.pass, 10);
    //TODO: להצפין את הסיסמא
    await user.save();
    user.pass = "*******";
    res.json(user);
  } catch (err) {
    console.log(err);
    res.status(400).json({ msg: "email or password already exist" });
  }
});

router.post("/login", async (req, res) => {
  let validBody = validLogin(req.body);
  if (validBody.error) {
    return res.status(400).json(validBody.error.details);
  }
  // בדיקת מייל

  // בדיקת הסיסמה מול ההצפנה
  // צחזיר הודעה שהכל בסדר ונייצר טוקן
});

module.exports = router;

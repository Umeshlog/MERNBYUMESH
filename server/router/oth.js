const jwt = require("jsonwebtoken");
const express = require("express");
const bcrypt = require("bcryptjs");
const Authenticate = require("../meddleware/authenticate");
const router = express.Router();

require("../db/conn");
const User = require("../model/UserSchema");
const { response } = require("express");

router.get("/", (req, res) => {
  res.send("hello home page from server router.ja");
});

//using then catch promise
// router.post("/register",(req,res)=>{

//     const {name,email,phone,work,password,cpassword}=req.body

//     if(!name || email || phone || work || password || cpassword){
//         return res.status(422).json({error:" plzz filled th field propraly"})
//     }

// User.findOne({email:email}).then((userExist)=>{
//     if(userExist){
//         return res.status(422).json({error:"email already exist"})
//     }

//     const user=new User({name,email,phone,work,password,cpassword})

//     user.save().then(()=>{
//         res.status(201).json({message:"user successfully"});
//     }).catch((err)=>res.status(500).json({error:"faileds registored"}))
//   }).catch(err=>{console.log(err);});
// });

//using asynk await

router.post("/register", async (req, res) => {
  const { name, email, phone, work, address, password, cpassword } = req.body;

  if (
    !name ||
    !email ||
    !phone ||
    !work ||
    !address ||
    !password ||
    !cpassword
  ) {
    return res.status(422).json({ error: " plzz filled the field propraly" });
  }

  try {
    const userExist = await User.findOne({ email: email });

    if (userExist) {
      return res.status(422).json({ error: "email already exist" });
    } else if (password != cpassword) {
      return res.status(422).json({ error: "passord are not maching" });
    } else {
      const user = new User({
        name,
        email,
        phone,
        work,
        address,
        password,
        cpassword,
      });

      // const userRegister =
      const userRegister = await user.save();

      res.status(201).json({ message: "user register successfully" });
    }
  } catch (err) {
    console.log(err);
  }
});

//login root
router.post("/signin", async (req, res) => {
  try {
    // let token;
    console.log(req.body);
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: "plzz filled the data" });
    }

    const userLogin = await User.findOne({ email: email });

    //console.log(userLogin);

    if (userLogin) {
      console.log(userLogin);
      const isMatch = await bcrypt.compare(password, userLogin.password);

      let token = await userLogin.generateAuthToken();
      console.log(token);
      res.cookie("jwtoken", token, {
        expires: new Date(Date.now() + 25892000000),
        httpOnly: true,
      });
      console.log(`cookei are ${res.cookie}`);

      if (!isMatch) {
        res.status(400).json({ error: "invailid credientianls pass" });
      } else {
        res.json({ message: "user signin successfully" });
      }
    } else {
      res.status(400).json({ error: "invailid credientianls" });
    }
  } catch (err) {
    console.log(err);
  }
});

//about us ka page

router.get("/about", Authenticate, (req, res) => {
  console.log("hello my about");
  res.send(req.rootUser);
});

//user data for contect us page and home page
router.get("/getdata", Authenticate, (req, res) => {
  console.log("hello my getdata");
  res.send(req.rootUser);
});

//contact us page
router.post("/contact", Authenticate, async (req, res) => {
  // res.cookie("test", "ume");
  try {
    const { name, email, phone, message } = req.body;
    if (!name || !email || !phone || !message) {
      console.log("error in contact form");
      return res.status(400).json({ error: "plz fill the contect form" });
    }

    const userContact = await User.findOne({ _id: req.userID });

    if (userContact) {
      console.log(`user contact are${userContact}`);
      const userMessage = await userContact.addMessage(
        name,
        email,
        phone,
        message
      );

      await userContact.save();
      res.status(201).json({ message: "user contact successfully" });
    }
  } catch (err) {
    consile.log(err);
  }
});

//logout ka page
router.get("/logout", (req, res) => {
  // res.cookie("test", "ume");
  console.log("hello my LOGOUT PAGE");
  res.clearCookie("jwtoken", { path: "/" });
  response.status(200).send("user logout");
});
// router.get("/twitter", (req, res) => {
//   res.send("Hello twitter hu");
// });

module.exports = router;

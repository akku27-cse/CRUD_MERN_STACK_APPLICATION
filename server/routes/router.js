const express = require("express");
const router = express.Router();
const users = require("../models/Schema");

// router1.get("/", (req, res) => {
//     console.log("connect");
// })

router.post("/register", async (req, res) => {
  //console.log(req.body);
  const { name, age, tag, add, phone, email, desc } = req.body;
  if (!name || !age || !tag || !add || !phone || !email) {
    res.status(422).send("please fill the data");
  }
  try {
    const preuser = await users.findOne({ email: email });
    console.log(preuser);
    if (preuser) {
      res.status(422).send("this user already resgister");
    } else {
      const adduser = new users({ name, age, tag, add, phone, email, desc });
      await adduser.save();
      res.status(201).json(adduser);
      console.log(adduser);
    }
  } catch (e) {
    res.status(422).send(e);
  }
});

//get user data
router.get("/getdata", async (req, res) => {
  try {
    const userdata = await users.find();
    res.status(201).json(userdata);
    console.log(userdata);
  } catch (error) {
    res.status(422).send(error);
  }
});

//get individual user

router.get("/getuser/:id", async(req, res) => {
  try {
     
     console.log(req.params);
    const { id } = req.params; 
    const userindividual = await users.findById({ _id: id });
     console.log(userindividual);
     res.status(201).json(userindividual)
     
   } catch (error) {
     res.status(422).json(error);
   }
 })

//update user
 
router.patch("/updateuser/:id", async(req, res) => {
  try {
    const { id } = req.params;
    const updateuser = await users.findByIdAndUpdate(id, req.body, {
      new: true
    });
    console.log(updateuser);
    res.status(201).json(updateuser);
  } catch (error) {
    res.status(422).json(error)
  }
})


//delete
router.delete("/deleteuser/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const deletuser = await users.findByIdAndDelete({ _id: id });
    console.log(deletuser);
    res.status(201).json(deletuser);
  } catch (error) {
    res.status(422).json(error);
  }
});




module.exports = router;

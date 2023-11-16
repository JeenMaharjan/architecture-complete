const express = require("express");
const router = express.Router();

const { requireSignin } = require("../middlewares/index.js");
const { register, login , changepassword , masterpassword } = require("../controllers/auth.js");

router.post("/register", register);
router.post("/login", login);
router.post("/changepassword", changepassword);
router.put("/masterpassword" , requireSignin ,masterpassword)

module.exports = router;

const express = require("express");
const router = express.Router();
const { Signup, Login, cashbackOffer, verifyOtp, getAllChasbackOffers } = require("../Controllers/userController");
router.post("/signup", Signup);
router.post("/login", Login);
router.get("/spin-wheel", cashbackOffer);
router.post("/verify-otp", verifyOtp);
router.get("/getAllOffers", getAllChasbackOffers);
module.exports = router;

const router = require("express").Router();
const usersCtrl = require("../controllers/user.controller");
const { checkAuth } = require("../helpers/auth");

router.post("/signup", usersCtrl.singup);
router.post("/signin", usersCtrl.signin);
router.get("/logout", usersCtrl.logout);
router.get("/verifySession", checkAuth ,usersCtrl.verify);

module.exports = router;

const express = require("express")
const router = express.Router()

const UserControllers = require("../Controllers/UserController")

router.post("/user/insert",UserControllers.insert)
router.get("/user/list",UserControllers.list)
router.delete("/user/delete/:id",UserControllers.delete)
router.post("/user/login",UserControllers.login)


module.exports = router
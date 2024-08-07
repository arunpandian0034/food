const express = require("express")
const router = express.Router()

const ProductControll = require("../Controllers/ProductController")

router.post("/product/insert",ProductControll.insert)
router.get("/product/list",ProductControll.list)
router.delete("/Product/delete/:id",ProductControll.delete)



module.exports = router
const express = require('express');
const aiController = require("../controllers/ai.controller")

const router = express.Router();

//we used post method on postman and json format input to test the api
router.post("/get-review", aiController.getReview)


module.exports = router;    
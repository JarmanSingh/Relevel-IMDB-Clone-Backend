const express = require('express');
const router = express.Router();
const { auth } = require("../middleware/auth");


router.post("/addComment", auth, (req, res) => {
    
});

router.get("/getComments", (req, res) => {


});

module.exports = router;

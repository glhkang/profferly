const express = require("express");
const router = express.Router();

router.get('/api/join', (req, res) => {
    res.send("joining!")
});

module.exports = router;


const express = require('express');
const router = express.Router();

router.get('/', (req,res) => {
  res.status(403).send("HELLOW WORLD")
})

module.exports = router
const express = require("express");
const router = express.Router();
const handler = require("../handlers/utils");
const rangerService = require("../services/rangerServices")

/**
 * 
 * RANGER SERVICE
 * 
 */
router.get("/rangers/", (req, res) => handler.getHandler(res, rangerService.getAll(req)));

router.post("/rangers/", (req, res) => handler.postHandler(res, rangerService.newRanger(req.body)));

module.exports = router;

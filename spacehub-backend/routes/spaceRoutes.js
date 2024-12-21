const express = require("express");
const Space = require("../models/Space");

const router = express.Router();

// Create a new coworking space
router.post("/", async (req, res) => {
  try {
    const space = new Space(req.body);
    await space.save();
    res.status(201).json(space);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get all coworking spaces or filter by query
router.get("/", async (req, res) => {
  try {
    const filters = req.query;
    const spaces = await Space.find(filters);
    res.status(200).json(spaces);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update a coworking space
router.put("/:id", async (req, res) => {
  try {
    const space = await Space.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(space);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Delete a coworking space
router.delete("/:id", async (req, res) => {
  try {
    await Space.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Space deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;

const mongoose = require("mongoose");

const SpaceSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    location: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    imageUrl: { type: String, required: true },
    type: { type: String, required: true },
    amenities: { type: [String], default: [] }, // Array of strings for amenities
    openingHours: { type: String, required: true }, // Opening hours as a string
    status: { type: String, default: "Open Now" }, // Default status
  },
  { timestamps: true }
);

module.exports = mongoose.model("Space", SpaceSchema);

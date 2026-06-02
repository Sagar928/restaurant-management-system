const mongoose = require("mongoose");

const menuSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      required: true,
    },

    category: {
      type: String,
      enum: [
        "STARTERS",
        "MAIN_COURSE",
        "DRINKS",
        "DESSERTS"
      ],
      required: true,
    },

    price: {
      type: Number,
      required: true,
    },

    image: {
      type: String,
      default: "",
    },

    isAvailable: {
      type: Boolean,
      default: true,
    },

    preparationTime: {
      type: Number,
      default: 15,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Menu", menuSchema);
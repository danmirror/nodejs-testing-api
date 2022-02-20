/*
 *   Model customer using schema
 *
 */

const mongoose = require("mongoose");
const customerScheme = new mongoose.Schema({
  username: {
    type: String,
    required: false,
  },
  email: {
    type: String,
    required: false,
  },
  city: {
    type: String,
    required: false,
  },
  no: {
    type: Number,
    required: false,
  },
});

module.exports = mongoose.model("customer", customerScheme);
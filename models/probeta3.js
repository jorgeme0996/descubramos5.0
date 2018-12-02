var mongoose = require("mongoose");

var Probeta3Schema = new mongoose.Schema({
    deformacion: Array,
    mpa: Array
});

module.exports = mongoose.model("Probeta3", Probeta3Schema);
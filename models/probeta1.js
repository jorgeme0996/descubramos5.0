var mongoose = require("mongoose");

var Probeta1Schema = new mongoose.Schema({
    deformacion: Array,
    mpa: Array
});

module.exports = mongoose.model("Probeta1", Probeta1Schema);
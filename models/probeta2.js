var mongoose = require("mongoose");

var Probeta2Schema = new mongoose.Schema({
    deformacion: Array,
    mpa: Array
});

module.exports = mongoose.model("Probeta2", Probeta2Schema);
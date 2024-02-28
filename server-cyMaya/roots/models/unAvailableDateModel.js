const mongoose = require("mongoose");


const unavailableDateSchema = new mongoose.Schema({
    gantt: { type: mongoose.Schema.Types.ObjectId, ref: "  Gantt" },
    reason: {type:String},
    date: {type:Date}
   });

   const UnavailableDate = mongoose.model("UnavailableDate", unavailableDateSchema);

   module.exports = UnavailableDate;
   
const mongoose = require("mongoose");


const UnavailableDateSchema = new Schema({
    gantt: { type: mongoose.Schema.Types.ObjectId, ref: "  Gantt" },
    reason: {type:String},
    date: {type:Date}
   });

   const UnavailableDate = mongoose.model("UnavailableDate", UnavailableDateSchema);

   module.exports = UnavailableDate;
   
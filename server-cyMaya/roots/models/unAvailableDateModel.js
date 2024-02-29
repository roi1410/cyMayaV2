const mongoose = require("mongoose");


const unAvailableDatesSchema = new mongoose.Schema({
    gantt: { type: mongoose.Schema.Types.ObjectId, ref: "Gantt" },
    reason: {type:String},
    date: {type:Date}
   });

   const UnAvailableDates = mongoose.model("UnAvailableDates",unAvailableDatesSchema);

   module.exports = UnAvailableDates;
   
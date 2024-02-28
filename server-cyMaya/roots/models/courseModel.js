const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
  name: { type: String },
  gantt: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Gantt",
  },

  students: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Student",
    },
  ],
  //   finance: ,
  //   tests:,
});

const course = mongoose.model("course", courseSchema);

module.exports = course;

// course1{
//     name:july full stack 2024
//     silbous:[
//     subjects:[{name:”css and html”:,hours:20 hours}],
//     unavailable dates:[{reason:”hanoch” ,date:14/06/2024}],
//     events:[{hows invited:[{name:shani],mail:shani@gmail.com},],when:date}] ,

//     }
//     students:[name:”reambiger”,mail:”ream@gmail.com”,
//     grades:[testsId]
//     isShasan:boolean,recive:”imgurl”,projects:”githubUrl”]
//     finance:{
//     incomes:
//     expense:[{name:”coockies”,recive-img:”url”,price:int,}]
//     total:
//     }
//     tests:[{nameOfExem:”mid project”,grades:[{user:ref(id),grade:90,testId:}]

//     }],

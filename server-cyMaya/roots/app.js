const express = require("express");
const app = express();

const courseRoute = require("./routes/courseRoute");
const eventRoute = require("./routes/eventRoute");
const ganttRoute = require("./routes/gantttRoute");
const studentRoute = require("./routes/studentRoute");
const syllabusRoute = require("./routes/syllabusRoute");
const unAvailableDatesRoute = require("./routes/unAvailableDatesRoute");
const userRoute = require("./routes/userRoute");

app.use(express.json());
const cookieParser = require("cookie-parser");
const cors = require("cors");
app.use(cookieParser());

const corsOptions = {
  origin: "http://localhost:5173",
  credentials: true,
};
app.use(cors(corsOptions));

app.use("/course", courseRoute);
app.use("/event", eventRoute);
app.use("/gantt", ganttRoute);
app.use("/student", studentRoute);
app.use("/syllabus", syllabusRoute);
app.use("/unAvailableDates", unAvailableDatesRoute);
app.use("/user", userRoute);

module.exports = app;

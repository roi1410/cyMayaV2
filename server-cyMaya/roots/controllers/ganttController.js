const Gantt = require("../models/ganttModel");
const Syllabus = require("../models/syllabusModel");
const Event = require("../models/eventModel");
const UnAvailableDate = require("../models/unAvailableDateModel");
const Course = require("../models/courseModel");
exports.createGantt = async (req, res) => {
  try {
    const { syllabus, events, unAvailableDates } = req.body;
    if (!syllabus) {
      res.send(404).send({
        status: "fail",
        message: "cant create a gantt without a syllabus",
      });
    }
    const newGantt = await Gantt.create({ course: req.params.courseId });
    const subjects = syllabus.subjects;
    const NewSyllabus = await Syllabus.create({
      gantt: newGantt._id,
      subjects: subjects,
    });
    newGantt.syllabus = NewSyllabus._id;

    if (events) {
      const newEvents = [];
      for (const event of events) {
        const NewEvent = await Event.create({ ...event, gantt: newGantt._id });
        newEvents.push(NewEvent._id);
      }
      newGantt.events = newEvents;
    }
    if (unAvailableDates) {
      const NewUnAvailableDates = [];
      for (const date of unAvailableDates) {
        const NewUnAvailableDate = await UnAvailableDate.create({
          ...date,
          gantt: newGantt._id,
        });
        NewUnAvailableDates.push(NewUnAvailableDate._id);
      }
      newGantt.unAvailableDates = NewUnAvailableDates;
      const course = await Course.findByIdAndUpdate(req.params.courseId, {
        gantt: newGantt._id,
      });
    }

    newGantt.save();
    res.status(200).send({ status: "success", gantt: newGantt });
  } catch (error) {
    res.status(500).send({ status: "fail", message: error });
  }
};

const {
  addDays,
  startOfToday,
  isFriday,
  isSaturday,
  eachDayOfInterval,
} = require("date-fns");
const Gantt = require("../models/ganttModel");
const Syllabus = require("../models/syllabusModel");
const Event = require("../models/eventModel");
const UnAvailableDate = require("../models/unAvailableDateModel");
const Course = require("../models/courseModel");
exports.createGantt = async (req, res) => {
  try {
    const { syllabus, events, unAvailableDates, startingDate } = req.body;
    if (!syllabus) {
      res.status(404).send({
        status: "fail",
        message: "cant create a gantt without a syllabus",
      });
    }
    const newGantt = await Gantt.create({
      course: req.params.courseId,
      startingDate,
    });
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
    const populateGantt = await newGantt.populate([
      "events",
      "syllabus",
      "unAvailableDates",
    ]);

    res.status(200).send({ status: "success", gantt: populateGantt });
  } catch (error) {
    res.status(500).send({ status: "fail", message: error });
  }
};
exports.getGantt = async (req, res) => {
  try {
    const gantt = await Gantt.findById(req.params.ganttId).populate([
      "events",
      "syllabus",
      "unAvailableDates",
    ]);
    const ganttCalender = buildGantt(
      gantt.syllabus,
      gantt.events,
      gantt.unAvailableDates,
      gantt.startingDate
    );
    console.log("🚀 ~ exports.getGantt= ~ ganttCalender:", ganttCalender)
    res.status(200).send({ status: "success", gantt: ganttCalender });
  } catch (error) {
    res.status(500).send({ status: "fail", message: error });

  }
};

const buildGantt = (syllabus, events, unAvailableDates,start) => {
  const convertedEvents= convertToBigCalendarFormat(events)
  const convertedUnAvailableDates = convertToEventFormat(unAvailableDates);
  const subjects = syllabus.subjects;
  const studyPlan = [];
  for (const sub of subjects) {
    const result = createSyllabusEvents(start, sub, unAvailableDates);
    start = result.end;
    studyPlan.push(result);
  }
  const ganttCalender={studyPlan,convertedUnAvailableDates,convertedEvents}
  return ganttCalender
};
function convertToEventFormat(unavailableDates) {
  return unavailableDates.map((dateObj) => ({
    title: dateObj.reason,
    start: new Date(dateObj.date),
    end: new Date(dateObj.date),
    allDay: true, 
    type:"unavailableDates"
  }));
}
const convertToBigCalendarFormat = (events) => {
  return events.map((event) => ({
    title: event.eventName,
    start: new Date(event.when),
    end: new Date(event.when),
    type:"events"
    // Add any other properties you need
  }));
};

function createSyllabusEvents(start, subject, unAvailableDates) {
  let daysToAdd = Math.round(subject.hours / 8);
  let end = addDays(start, daysToAdd);
  for (const checkedDate of unAvailableDates) {
    isDateBetween(start, end, checkedDate.date) && (end = addDays(end, 1));
  }
  const weekEndDays = countFridaySaturday(start, end);
  end = addDays(start, weekEndDays);
  const result = { title:subject.subjectName, end, start ,type:"subject"};
  return result;
}

const isDateBetween = (startDate, endDate, checkedDate) => {
  if (startDate <= checkedDate <= endDate) {
    return true;
  }
  return false;
};

function isFridayOrSunday(date) {
  return isFriday(date) || isSaturday(date);
}

function countFridaySaturday(start, end) {
  const daysInRange = eachDayOfInterval({ start, end });
  let count = 0;

  for (const day of daysInRange) {
    if (isFriday(day) || isSaturday(day)) {
      count++;
    }
  }

  return count;
}

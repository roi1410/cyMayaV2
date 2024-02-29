const Event = require("../models/eventModel");
const Gantt = require("../models/ganttModel");

exports.deleteEvent = async (req, res) => {
  try {
    const deleteEvent = await Event.findByIdAndDelete(req.params.eventId);
    console.log("🚀 ~ exports.deleteEvent ~ deleteEvent:", deleteEvent._id);

    const gantt = await Gantt.findById(deleteEvent.gantt._id);
    if (!gantt) {
      return res.status(404).send({ message: "Gantt chart not found" });
    }

    const eventsList = gantt.events.filter(
      (eve) => eve.toString() !== deleteEvent._id.toString()
    );

    gantt.events = eventsList;
    await gantt.save();

    res.status(200).send({ status: "success" });
  } catch (error) {
    console.error("Error in deleteEvent:", error);
    res.status(500).send({ message: "Internal server error" });
  }
};

exports.createANewEvent = async (req, res) => {
  try {
    const newEvent = await Event.create(req.body.event);

    const updatedGantt = await Gantt.findByIdAndUpdate(
      req.params.ganttId,
      { $push: { events: newEvent._id } },
      { new: true }
    );

    if (!updatedGantt) {
      return res.status(404).send({ message: "Gantt not found" });
    }

    res.status(200).send(updatedGantt);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .send({ message: "An error occurred while creating the event" });
  }
};

exports.updateEvent = async (req, res) => {
  try {
    const updateEvent = await Event.findByIdAndUpdate(
      req.params.eventId,
      req.body,
      { new: true }
    );

    res.status(200).send({ status: "success", updateEvent: updateEvent });
  } catch (error) {
    res.status(500).send({ status: "fail" });
  }
};

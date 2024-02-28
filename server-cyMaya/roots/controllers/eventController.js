const Event = require("../models/eventModel")
const Gantt = require("../models/ganttModel")

exports.deleteEvent = async (req, res) => {
try {
    const deleteEvent=Event.findByIdAndDelete(req.params.eventId,)
    const ganttEvents=Gantt.findById(deleteEvent.gantt).events
    const ganttUpdated=ganttEvents.filter(eve=>eve!=deleteEvent._id)

} catch (error) {
    res.status(500).send({ message: "An error occurred while deleting the event" });

}
}
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
        res.status(500).send({ message: "An error occurred while creating the event" });
    }
};

exports.updateEvent = async (req, res) => {}
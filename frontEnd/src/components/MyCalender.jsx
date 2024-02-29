import React, { useCallback, useEffect, useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "../../calendar.css";
import moment from "moment";
import axios from "axios";

const localizer = momentLocalizer(moment);

const MyCalendar = (props) => {
  const [events, setEvents] = useState([]);

  const eventPropGetter = useCallback(
    (event, start, end, isSelected) => ({
      ...(isSelected && {
        style: {
          backgroundColor: "#000",
        },
      }),
      ...(event.type.includes("events") && {
        style: {
          backgroundColor: "blue",
        },
      }),
      ...(event.type.includes("unAvailable") && {
        style: {
          backgroundColor: "black",
        },
      }),
      ...(event.type.includes("subject") && {
        style: {
          backgroundColor: "red",
        },
      }),
    }),
    []
  );

  useEffect(() => {
    const fetchCalendar = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8002/gantt/65dfce55c0b9258d208d8aaa"
        );
        const { studyPlan, convertedUnAvailableDates, convertedEvents } =
          response.data.gantt;
        console.log(studyPlan, convertedUnAvailableDates, convertedEvents);

        const events = studyPlan
          .concat(convertedUnAvailableDates)
          .concat(convertedEvents);
        setEvents(events);
      } catch (error) {
        console.log(error);
      }
    };

    fetchCalendar();
  }, []);

  return (
    <div className="myCustomHeight">
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        eventPropGetter={eventPropGetter}
      />
    </div>
  );
};

export default MyCalendar;

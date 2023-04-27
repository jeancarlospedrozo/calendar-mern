import React from "react";
import { Navbar } from "../components/Navbar";
import { Calendar } from "react-big-calendar";
import { addHours } from "date-fns";
import { getMessagesES, localizer } from "../../helpers/helpers";
import "react-big-calendar/lib/css/react-big-calendar.css";

const events = [
  {
    title: "Cumpleaños",
    note: "Comprar la decoración",
    start: new Date(),
    end: addHours(new Date(), 1),
  },
];

export const CalendarPage = () => {
  return (
    <>
      <Navbar />
      <Calendar
        culture="es"
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: "calc(100vh - 80px)", marginTop: 80 }}
        messages={getMessagesES()}
      />
    </>
  );
};

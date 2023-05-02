import React, { useState } from "react";
import { Navbar } from "../components/Navbar";
import { Calendar } from "react-big-calendar";
import { addHours } from "date-fns";
import { getMessagesES, localizer } from "../../helpers/helpers";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { CalendarEvent } from "../components/CalendarEvent";
import { Modal } from "../components/Modal";

export const CalendarPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [lastView, setLastView] = useState(
    localStorage.getItem("lastView") || "week"
  );

  const events = [
    {
      title: "Cumpleaños",
      note: "Comprar la decoración",
      start: new Date(),
      end: addHours(new Date(), 1),
      user: {
        id: "1",
        name: "Jean Carlos",
      },
    },
  ];

  const onDoubleClick = (e) => {
    console.log({ doubleClick: e });
  };

  const onSelect = (e) => {
    console.log({ onSelect: e });
  };

  const onViewChange = (e) => {
    localStorage.setItem("lastView", e);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Navbar />
      <Calendar
        defaultView={lastView}
        culture="es"
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: "calc(100vh - 80px)", marginTop: 80 }}
        messages={getMessagesES()}
        onDoubleClickEvent={onDoubleClick}
        onSelectEvent={openModal}
        onView={onViewChange}
        components={{
          event: CalendarEvent,
        }}
      />
      <Modal isVisible={isOpen} onClose={closeModal} />
    </>
  );
};

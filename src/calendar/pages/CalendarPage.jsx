import React, { useState } from "react";
import { Navbar } from "../components/Navbar";
import { Calendar } from "react-big-calendar";
import { addHours } from "date-fns";
import { getMessagesES, localizer } from "../../helpers/helpers";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { CalendarEvent } from "../components/CalendarEvent";
import { Modal } from "../components/Modal";
import { useUiStore } from "../../hooks/useUiStore";

export const CalendarPage = () => {
  const { isDateModalOpen, _onDateModalOpen, _onDateModalClose } = useUiStore();

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

  const onSelect = (e) => {
    console.log({ onSelect: e });
  };

  const onViewChange = (e) => {
    localStorage.setItem("lastView", e);
  };

  const openModal = () => {
    _onDateModalOpen();
  };

  const closeModal = () => {
    _onDateModalClose();
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
        onDoubleClickEvent={openModal}
        onSelectEvent={onSelect}
        onView={onViewChange}
        components={{
          event: CalendarEvent,
        }}
      />
      <Modal isVisible={isDateModalOpen} onClose={closeModal} />
    </>
  );
};

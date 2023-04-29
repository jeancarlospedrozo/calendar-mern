import React from "react";

export const CalendarEvent = ({ event }) => {
  const { title, user } = event;
  return (
    <>
      <b>{title}</b>
      <span> - {user.name}</span>
    </>
  );
};

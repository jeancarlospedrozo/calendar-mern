import React from "react";
import { useCalendarStore } from "../../hooks/useCalendarStore";

export const FabDelete = () => {
  const { activeEvent, _deleteEvent } = useCalendarStore();

  const deleteEventCalendar = () => {
    _deleteEvent();
  };

  return (
    <button
      onClick={deleteEventCalendar}
      className="mouse fixed bottom-10 left-10 h-12 w-12 rounded-full bg-red-600 p-0 shadow transition duration-200 ease-in hover:bg-red-700 focus:outline-none active:shadow-lg"
      style={{ display: !!activeEvent ? "" : "none" }}
    >
      <svg
        viewBox="0,0,256,256"
        width="24px"
        height="24px"
        className="inline-block h-6 w-6"
      >
        <g fill="#ffffff">
          <g transform="scale(10.66667,10.66667)">
            <path d="M10,2l-1,1h-4c-0.6,0 -1,0.4 -1,1c0,0.6 0.4,1 1,1h2h10h2c0.6,0 1,-0.4 1,-1c0,-0.6 -0.4,-1 -1,-1h-4l-1,-1zM5,7v13c0,1.1 0.9,2 2,2h10c1.1,0 2,-0.9 2,-2v-13zM9,9c0.6,0 1,0.4 1,1v9c0,0.6 -0.4,1 -1,1c-0.6,0 -1,-0.4 -1,-1v-9c0,-0.6 0.4,-1 1,-1zM15,9c0.6,0 1,0.4 1,1v9c0,0.6 -0.4,1 -1,1c-0.6,0 -1,-0.4 -1,-1v-9c0,-0.6 0.4,-1 1,-1z"></path>
          </g>
        </g>
      </svg>
    </button>
  );
};

import React from "react";
import { useUiStore } from "../../hooks/useUiStore";
import { useCalendarStore } from "../../hooks/useCalendarStore";
import { addHours } from "date-fns";

export const FabAddNew = () => {
  const { _onDateModalOpen } = useUiStore();
  const { _setActiveEvent } = useCalendarStore();

  const openModal = () => {
    _setActiveEvent({
      title: "",
      notes: "",
      startDate: new Date(),
      endDate: addHours(new Date(), 2),
      user: {
        _id: "1",
        name: "Jean Carlos",
      },
    });
    _onDateModalOpen();
  };

  return (
    <button
      onClick={openModal}
      className="mouse fixed bottom-10 right-10 h-12 w-12 rounded-full bg-sky-700 p-0 shadow transition duration-200 ease-in hover:bg-sky-800 focus:outline-none active:shadow-lg"
    >
      <svg
        viewBox="0 0 20 20"
        enableBackground="new 0 0 20 20"
        className="inline-block h-6 w-6"
      >
        <path
          fill="#FFFFFF"
          d="M16,10c0,0.553-0.048,1-0.601,1H11v4.399C11,15.951,10.553,16,10,16c-0.553,0-1-0.049-1-0.601V11H4.601
                    C4.049,11,4,10.553,4,10c0-0.553,0.049-1,0.601-1H9V4.601C9,4.048,9.447,4,10,4c0.553,0,1,0.048,1,0.601V9h4.399
                    C15.952,9,16,9.447,16,10z"
        />
      </svg>
    </button>
  );
};

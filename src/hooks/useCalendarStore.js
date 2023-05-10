import { useDispatch, useSelector } from "react-redux";
import { addNewEvent, setActiveEvent } from "../store/calendar/calendarSlice";

export const useCalendarStore = () => {
  const dispatch = useDispatch();
  const { events, activeEvent } = useSelector((state) => state.calendar);

  const _setActiveEvent = (calendarEvent) => {
    dispatch(setActiveEvent(calendarEvent));
  };

  const _addNewEvent = (newCalendarEvent) => {
    if (newCalendarEvent._id) {
    } else {
      dispatch(addNewEvent({ _id: new Date().getTime(), ...newCalendarEvent }));
    }
  };

  return {
    events,
    activeEvent,
    _setActiveEvent,
    _addNewEvent,
  };
};

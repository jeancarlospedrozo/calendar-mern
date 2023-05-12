import { useDispatch, useSelector } from "react-redux";
import {
  addNewEvent,
  deleteEvent,
  setActiveEvent,
  updateEvent,
} from "../store/calendar/calendarSlice";

export const useCalendarStore = () => {
  const dispatch = useDispatch();
  const { events, activeEvent } = useSelector((state) => state.calendar);

  const _setActiveEvent = (calendarEvent) => {
    dispatch(setActiveEvent(calendarEvent));
  };

  const _addNewEvent = (newCalendarEvent) => {
    if (newCalendarEvent._id) {
      dispatch(updateEvent(newCalendarEvent));
    } else {
      dispatch(addNewEvent({ _id: new Date().getTime(), ...newCalendarEvent }));
    }
  };

  const _deleteEvent = () => {
    dispatch(deleteEvent());
  };

  return {
    events,
    activeEvent,
    _setActiveEvent,
    _addNewEvent,
    _deleteEvent,
  };
};

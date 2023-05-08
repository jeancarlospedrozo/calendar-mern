import { useDispatch, useSelector } from "react-redux";

export const useCalendarStore = () => {
  const dispatch = useDispatch();
  const { events } = useSelector((state) => state.calendar);

  const _onDateModalOpen = () => {
    dispatch(onDateModalOpen());
  };

  const _onDateModalClose = () => {
    dispatch(onDateModalClose());
  };

  return {
    events,
    // _onDateModalOpen,
    // _onDateModalClose,
  };
};

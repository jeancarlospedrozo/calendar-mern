import { useDispatch, useSelector } from "react-redux";
import { onDateModalClose, onDateModalOpen } from "../store/ui/uiSlice";

export const useUiStore = () => {
  const dispatch = useDispatch();
  const { isDateModalOpen } = useSelector((state) => state.ui);

  const _onDateModalOpen = () => {
    dispatch(onDateModalOpen());
  };

  const _onDateModalClose = () => {
    dispatch(onDateModalClose());
  };

  return {
    isDateModalOpen,
    _onDateModalOpen,
    _onDateModalClose,
  };
};

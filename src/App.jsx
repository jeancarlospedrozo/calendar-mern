import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import { CalendarPage } from "./calendar/pages/CalendarPage";
import { AuthRoutes } from "./auth/routes/AuthRoutes";

function App() {
  const authStatus = "authenticated";
  return (
    <Routes>
      {authStatus === "not-authenticated" ? (
        <Route path="auth/*" element={<AuthRoutes />} />
      ) : (
        <Route path="*" element={<CalendarPage />} />
      )}
      <Route path="*" element={<Navigate to={"auth/login"} />} />
    </Routes>
  );
}

export default App;

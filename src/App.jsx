import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import { Calendar } from "./calendar/pages/Calendar";
import { AuthRoutes } from "./auth/routes/AuthRoutes";

function App() {
  const authStatus = "authenticated";
  return (
    <Routes>
      {authStatus === "not-authenticated" ? (
        <Route path="auth/*" element={<AuthRoutes />} />
      ) : (
        <Route path="*" element={<Calendar />} />
      )}
      <Route path="*" element={<Navigate to={"auth/login"} />} />
    </Routes>
  );
}

export default App;

import Button from "./components/common/Button";
import Navbar from "./components/layout/Navbar";
import Login from "./pages/Auth/Login";
import { useLocation } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import useThemeContext from "./hooks/useThemeContext";
import ProtectedRoute from "./routes/ProtectedRoutes";


function App() {
  const location = useLocation();
  const hideNavbar =
    location.pathname === "/";
  const {
    darkMode
  } = useThemeContext();

  const isAuthenticated =
    localStorage.getItem("isAuthenticated") === "true" ||
    sessionStorage.getItem("isAuthenticated") === "true";


  return (
   <div
    className={`App ${
        darkMode ? "dark-theme" : "light-theme"
    }`}
>
      {!hideNavbar && isAuthenticated && <Navbar />}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        } />

      </Routes>
    </div>
  );
}

export default App;

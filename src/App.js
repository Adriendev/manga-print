import "./App.css";
import { Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage";
import Layout from "./pages/Layout";
import CalendarPage from "./pages/CalendarPage";
import MePage from "./pages/MePage";
import AllSeriesPage from "./pages/SeriesPage";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import SeriesDetailsPage from "./pages/SeriesDetailsPage";
import IsAnon from "./components/IsAnon";
import IsPrivate from "./components/IsPrivate";

import { SettingsContext } from "./context/settings.context";
import { useContext } from "react";

function App() {
  const { isDarkMode } = useContext(SettingsContext);
  return (
    <div className="App" mode={isDarkMode ? "dark" : "light"}>
      <Routes>
        <Route path="" element={<Layout />}>
          {/* All other inside */}
          <Route path="/" element={<HomePage />} />
          <Route
            path="/signup"
            element={
              <IsAnon>
                <SignupPage />
              </IsAnon>
            }
          />
          <Route
            path="/login"
            element={
              <IsAnon>
                <LoginPage />
              </IsAnon>
            }
          />
          <Route path="/series" element={<AllSeriesPage />} />
          <Route path="/series/:id" element={<SeriesDetailsPage />} />
          <Route
            path="/user/me"
            element={
              <IsPrivate>
                <MePage />
              </IsPrivate>
            }
          />
          <Route
            path="/calendar"
            element={
              <IsPrivate>
                <CalendarPage />
              </IsPrivate>
            }
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

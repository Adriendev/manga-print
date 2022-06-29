import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage";
import Layout from "./pages/Layout";
import CalendarPage from "./pages/CalendarPage";
import UserPage from "./pages/UserPage";
import SeriesPage from "./pages/SeriesPage";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import SeriesDetailsPage from "./pages/SeriesDetailsPage";
import IsAnon from "./components/IsAnon";
import IsPrivate from "./components/IsPrivate";

function App() {
  return (
    <div className="App">
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
          <Route path="/series" element={<SeriesPage />} />
          <Route path="/series/:id" element={<SeriesDetailsPage />} />
          <Route
            path="/user/:id"
            element={
              <IsPrivate>
                <UserPage />
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

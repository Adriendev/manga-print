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

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="" element={<Layout />}>
          {/* All other inside */}
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/series" element={<SeriesPage />} />
          <Route path="/series/:id" element={<SeriesDetailsPage />} />
          <Route path="/user/:id" element={<UserPage />} />
          <Route path="/calendar" element={<CalendarPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

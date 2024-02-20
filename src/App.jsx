import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/home.jsx";
import Footer from "./components/footer.jsx";
import EventPage from "./routes/event.jsx";
import NavBar from "./components/navbar.jsx";
import Events from "./routes/events.jsx";
import Workshops from "./routes/workshops.jsx";
import Schedule from "./routes/schedule.jsx";
import Blur from "./components/blur";

export default function App() {
  
  const isMobile = window.innerWidth <= 480;

  const coordinates = isMobile
    ? { position: "absolute", bottom: "-10%", left: "-15%" }
    : { position: "absolute", bottom: "0%", left: "-10%"};

  return (
    <div className="relative">
      <Blur coordinates={coordinates} />
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/event/:eventid" element={<EventPage />} />
          <Route path="/events" element={<Events />} />
          <Route path="/workshops" element={<Workshops />} />
          <Route path="/schedule" element={<Schedule />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}


import { BrowserRouter, Routes, Route, useParams} from "react-router-dom"
import Home from "./routes/home.jsx"
import Footer from "./components/footer.jsx"
import EventPage from "./routes/event.jsx"
import NavBar from "./components/navbar.jsx"
import Events from "./routes/events.jsx"
import Workshops from "./routes/workshops.jsx";
import Schedule from "./routes/schedule.jsx"

export default function App() {
  return(
    <div className="bg-black text-white min-h-screen">
      <BrowserRouter>
        <NavBar/>
        <Routes >
          <Route path="/" element={<Home/>} />
          <Route path="/event/:eventid" element={<EventPage/>}/>
          <Route path="/events" element={<Events/>}/>
          <Route path="/workshops" element={<Workshops/>}/>
          <Route path="/schedule" element={<Schedule/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}

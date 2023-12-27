
import { BrowserRouter, Routes, Route, useParams} from "react-router-dom"
import Home from "./routes/home.jsx"
import Footer from "./components/footer.jsx"
import EventPage from "./routes/event.jsx"

export default function App() {
  return(
    <div className="bg-black text-white">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="event/:eventid" element={<EventPage/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}

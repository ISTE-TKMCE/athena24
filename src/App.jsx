
import { BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./routes/home.jsx"
import Footer from "./components/footer.jsx"

export default function App() {
  return(
    <div className="bg-black p-5 text-white">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}

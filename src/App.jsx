import Button from "./components/Button"
import Navbar from "./components/Navbar"
import Slider from "./components/Slider"
import { smallSlides, largeSlides } from "./content/sliderContent"

function App() {
  

  return (
    <div>
      <Navbar />
      <Button text={"Heres a button"} color={"bg-orange"} textColor={"text-black"} />
      <Slider smallSlides={smallSlides} largeSlides={largeSlides} />
    </div>
  )
}

export default App

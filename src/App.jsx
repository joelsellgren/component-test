import Button from "./components/Button"
import Navbar from "./components/Navbar"
import Slider from "./components/Slider"
import Counter from "./components/Counter"
import { useState } from "react"
import { smallSlides, largeSlides } from "./content/sliderContent"

function App() {
  
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar />
      <Button text={"Heres a button"} color={"bg-orange"} textColor={"text-black"} />
      <Slider smallSlides={smallSlides} largeSlides={largeSlides} />
      <Counter count={count} setCount={setCount}/>
    </div>
  )
}

export default App

import Feature from "./components/Feature"
import HeroSection from "./components/HeroSection"
import Navbar from "./components/Navbar"
import Price from "./components/Price"
import WorkflowSection from "./components/WorkflowSection"

const App = () => {
  return (
    <>
      <Navbar/>
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <HeroSection/>
        <Feature/>
        <WorkflowSection/>
        <Price/>
      </div>
    </>
  )
}

export default App


import AboutMe from "./components/AboutMe"
import Footer from "./components/Footer"
import Info from "./components/Info"
import Interests from "./components/Interests"
import Skill from "./components/Skill"
import './App.css'
function App() {
  return (
    <div className = "Resume">
      <Info />
      <AboutMe />
      <Interests />
      <Skill />
      <Footer />
    </div>
  )
}

export default App

import Footer from "./components/global/Footer"
import Hero from "./components/shared/Hero"
import HightLights from "./components/shared/HightLights"
import Model from "./components/shared/Model"
import NavBar from "./components/shared/NavBar"
import Features from "./components/shared/Features"
import HowItWorks from './components/shared/HowItWorks'

const App = () => {
  return (
    <main className="bg-black">
      <NavBar />
      <Hero />
      <HightLights />
      <Model />
      <Features />
      <HowItWorks />
      <Footer />
    </main>
  )
}

export default App
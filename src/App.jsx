import Header from "./components/Header.jsx";
import Headline from "./components/Headline.jsx";
import AboutUs from "./components/AboutUs.jsx";
import Features from "./components/Features.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import './App.css'

function App() {
  return (
    <>
      <div className="container">
        <Header />
        <div className="content">
          <Headline />
          <AboutUs />
          <Features />
          <Contact />
          <Footer />
        </div>
      </div>
    </>
  )
}

export default App

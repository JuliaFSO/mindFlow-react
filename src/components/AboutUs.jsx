import Image from '../assets/image.jpg';
import '../styles/about_us.css'

function AboutUs() {
  return (
    <div>
      <section className="section about-us" id="about-us">
        <div className="about-us-container">
          <div className="about-us-image">
            <img src={Image} alt="About us Image" />
          </div>
          <div className="about-us-text">
            <h1>ABOUT US</h1>
            <h3>DISCOVER OUR STORY</h3>
            <p>At MindFlow, we are passionate about the transformative impact of books. Our journey began with a simple love for reading, and has evolved into a thriving community dedicated to sharing the joy of literature. Join us as we explore the boundless world of books and the profound influence they have on our lives.</p>
            <div className="button-container">
              <a href="#contact">
                <button className="button-transp">Get In Touch</button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutUs

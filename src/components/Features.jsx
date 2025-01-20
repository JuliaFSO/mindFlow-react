import '../styles/features.css'

function Features() {
  return (
    <div>
      <section className="section features" id="features">
        <h1>FEATURES</h1>
        <div className="features-container">
          <div className="card">
            <h3>Book Recommendations</h3>
            <p>Seeking your next captivating read? Let our knowledgeable team provide personalized book recommendations tailored to your preferences and interests.</p>
          </div>
          <div className="card">
            <h3>Virtual Book Club</h3>
            <p>Immerse yourself in lively discussions and engaging literary analyses by joining our virtual book club. Connect with fellow book enthusiasts and broaden your literary horizons.</p>
          </div>
          <div className="card">
            <h3>Author Spotlights</h3>
            <p>Explore exclusive insights into the minds of renowned authors through our curated author spotlights. Gain a deeper understanding of the creative process behind your favorite books.</p>
          </div>
          <div className="card">
            <h3>Mindfulness Workshops</h3>
            <p>Embark on a journey of self-discovery and inner peace with our mindfulness workshops. Delve into the intersection of mindfulness and literature to enhance your reading experience.</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Features

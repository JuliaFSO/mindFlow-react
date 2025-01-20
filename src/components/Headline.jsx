import '../styles/headline.css'

function Headline() {
  return (
    <div>
      <section className="section headline" id="home">
        <div className="headline-container">
          <div className="headline-text">
            <h2>Welcome to MindFlow</h2>
            <h1>Discover, connect, and grow within a community of passionate readers.</h1>
            <p>
              Join our community of book lovers who seek peace and inspiration through the power of literature.
            </p>
            <div className="button-container">
              <a href="#contact">
                <button className="button-transp">Join Now</button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Headline

import './home.css'
import Navbar from '../Navbar/Navabar'
import Footer from '../Footer/Footer'
import { Link } from 'react-router-dom'

function Home() {

  const loggedIn = false;

  return (
    <>
     <Navbar/>
     <div className="home-container">
      <header>
        <h1>Welcome to prepGpt</h1>
        <p className="para">Your pathway to interview success!</p>
      </header>
      <div className="start-interview-button">
          <Link to= {loggedIn ? "/quesans" : '/signup'} >Start Interview</Link>
      </div>
      <main>
        <section className="features">
          <div className="feature">
            <h2>Practice Interviews</h2>
            <p>Simulate real interview scenarios with our AI-generated questions.</p>
          </div>
          <div className="feature">
            <h2>Receive Feedback</h2>
            <p>Get instant feedback on your answers to improve your interview skills.</p>
          </div>
          <div className="feature">
            <h2>Track Progress</h2>
            <p>Monitor your performance and see how you're progressing over time.</p>
          </div>
        </section>
      </main>
      <Footer/>
    </div>
    </>
  )
}

export default Home
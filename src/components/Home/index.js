import './index.css'
import ReactContext from '../context/ReactContext'
import Header from '../Header'

const Home = () => (
  <ReactContext.Consumer>
    {value => {
      const {name, topic} = value
      return (
        <>
          <Header />
          <div>
            {name === '' ? (
              <div>
                <h1>Welcome to the Meetup</h1>
                <p>Please register for the topic</p>
              </div>
            ) : (
              <div>
                <h1>Hello {name}</h1>
                <p>Welcome to {topic}</p>
              </div>
            )}
            <button type="button">Register</button>
            <img
              src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
              alt="meetup"
            />
          </div>
        </>
      )
    }}
  </ReactContext.Consumer>
)
export default Home

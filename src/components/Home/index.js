import {Link} from 'react-router-dom'
import './index.css'
import ReactContext from '../context/ReactContext'
import Header from '../Header'

const Home = props => (
  <ReactContext.Consumer>
    {value => {
      const {name, topic} = value
      const registerBtn = () => {
        const {history} = props
        history.replace('/register')
      }
      const {topicsList} = props
      const valueToBeDisplayed = topicsList.find(topic1 => topic1.id === topic)
      return (
        <>
          <Header />
          <div>
            {name === '' ? (
              <div>
                <h1>Welcome to Meetup</h1>
                <p>Please register for the topic</p>
                <Link to="/register">
                  <button type="button" onClick={registerBtn}>
                    Register
                  </button>
                </Link>
              </div>
            ) : (
              <div>
                <h1>Hello {name}</h1>
                <p>Welcome to {valueToBeDisplayed.displayText}</p>
              </div>
            )}
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

import './index.css'
import ReactContext from '../context/ReactContext'
import Header from '../Header'
import TopicItem from '../TopicItem'

const Register = props => (
  <ReactContext.Consumer>
    {value => {
      const {
        name,
        topic,
        onChangeName,
        onChangeTopic,
        onSubmitForm,
        error,
      } = value
      const {topicsList} = props
      return (
        <>
          <Header />
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/website-register-img.png"
              alt="website register"
            />
            <div>
              <h1>Let us join</h1>
              <form onSubmit={onSubmitForm}>
                <label htmlFor="name">NAME</label>
                <input
                  type="text"
                  id="name"
                  placeholder="Your name"
                  value={name}
                  onChange={onChangeName}
                />
                <label htmlFor="topic">TOPICS</label>
                <select>
                  {topicsList.map(topic1 => (
                    <TopicItem details={topic1} onChangeTopic={onChangeTopic} />
                  ))}
                </select>
                <button type="submit">Register Now</button>
                {error ? <p>Please enter your name</p> : null}
              </form>
            </div>
          </div>
        </>
      )
    }}
  </ReactContext.Consumer>
)
export default Register

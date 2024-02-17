import {Switch, Route, Redirect, withRouter} from 'react-router-dom'
import {Component} from 'react'
import './App.css'
import Home from './components/Home'
import Register from './components/Register'
import NotFound from './components/NotFound'
import ReactContext from './components/context/ReactContext'

// These are the lists used in the application. You can move them to any component needed.
const topicsList = [
  {
    id: 'ARTS_AND_CULTURE',
    displayText: 'Arts and Culture',
  },
  {
    id: 'CAREER_AND_BUSINESS',
    displayText: 'Career and Business',
  },
  {
    id: 'EDUCATION_AND_LEARNING',
    displayText: 'Education and Learning',
  },
  {
    id: 'FASHION_AND_BEAUTY',
    displayText: 'Fashion and Learning',
  },
  {
    id: 'GAMES',
    displayText: 'Games',
  },
]

// Replace your code here
class App extends Component {
  state = {
    name: '',
    topic: topicsList[0].id,
    error: false,
  }

  onChangeName = event => {
    this.setState({name: event.target.value})
  }

  onChangeTopic = id => {
    this.setState({topic: id})
  }

  onSubmitForm = event => {
    event.preventDefault()
    const {name} = this.state
    if (name === '') {
      this.setState({error: true})
    } else {
      this.setState({error: false})
      const {history} = this.props
      history.replace('/')
    }
  }

  render() {
    const {name, topic, error} = this.state
    return (
      <ReactContext.Provider
        value={{
          name,
          error,
          topic,
          onChangeName: this.onChangeName,
          onChangeTopic: this.onChangeTopic,
          onSubmitForm: this.onSubmitForm,
        }}
      >
        <Switch>
          <Route exact path="/" component={Home} />
          <Route
            exact
            path="/register"
            render={routeProps => (
              <Register {...routeProps} topicsList={topicsList} />
            )}
          />
          <Route exact path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </ReactContext.Provider>
    )
  }
}

export default withRouter(App)

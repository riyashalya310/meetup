import {React} from 'react'

const ReactContext = React.createContext({
  name: '',
  topic: '',
  error: false,
  topicsList: [],
  onChangeName: () => {},
  onChangeTopic: () => {},
  onSubmitForm: () => {},
})
export default ReactContext

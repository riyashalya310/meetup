import React from 'react'

const ReactContext = React.createContext({
  name: '',
  topic: '',
  error: false,
  onChangeName: () => {},
  onChangeTopic: () => {},
  onSubmitForm: () => {},
})
export default ReactContext

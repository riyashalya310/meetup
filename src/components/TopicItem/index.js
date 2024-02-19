import './index.css'

const TopicItem = props => {
  const {details, onChangeTopic} = props
  const {id, displayText} = details
  const changeTopic = () => {
    onChangeTopic(id)
  }
  return (
    <option value={id} onClick={changeTopic}>
      {displayText}
    </option>
  )
}
export default TopicItem

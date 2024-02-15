import './index.css'

const TopicItem = props => {
  const {details, onChangeTopic} = props
  const {id, displayText} = details
  const changeTopic = () => {
    onChangeTopic(id)
  }
  return (
    <option value={id}>
      <button type="button" onClick={changeTopic}>
        {displayText}
      </button>
    </option>
  )
}
export default TopicItem

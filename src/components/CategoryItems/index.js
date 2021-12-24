import './index.css'

const CategoryItems = props => {
  const {eachTabDetails, isActive, setActiveTabId} = props
  const {tabId, displayText} = eachTabDetails
  console.log(isActive)
  const onClickTab = () => {
    setActiveTabId(tabId)
  }

  return (
    <button type="button" className="button-details" onClick={onClickTab}>
      {displayText}
    </button>
  )
}
export default CategoryItems

import {Component} from 'react'
import CategoryItems from '../CategoryItems'
import ThumbnailItems from '../ThumbnailItems'
import Header from '../Header'

import './index.css'

const selectedCategory = {
  fruit: 'FRUIT',
  animals: 'ANIMAL',
  place: 'PLACE',
}

class MatchGame extends Component {
  state = {
    activeTabId: selectedCategory.fruit,
  }

  setActiveTabId = tabId => {
    this.setState({activeTabId: tabId})
  }

  renderThumbnailImage = () => {
    const {initialImageList} = this.props

    return (
      <ul className="thumbnail-container">
        {initialImageList.map(eachThumbnail => (
          <ThumbnailItems thumbnail={eachThumbnail} key={eachThumbnail.id} />
        ))}
      </ul>
    )
  }

  renderDisplayImage = () => {
    const {initialImageList} = this.props
    const lengthImgList = initialImageList.length
    const index = Math.floor(Math.random() * lengthImgList)
    const randomItem = initialImageList[index]
    return (
      <div className="img-container">
        <img
          src={randomItem.imageUrl}
          alt={randomItem.thumbnailUrl}
          className="display-image"
          key={randomItem.id}
        />
      </div>
    )
  }

  renderCategory = () => {
    const {initialTabList} = this.props
    const activeTabId = this.state

    return (
      <div className="category">
        {initialTabList.map(eachTab => (
          <CategoryItems
            eachTabDetails={eachTab}
            setActiveTabId={this.setActiveTabId}
            isActive={activeTabId === eachTab.tabId}
          />
        ))}
      </div>
    )
  }

  render() {
    return (
      <div className="app-container">
        <div>
          <Header />
          {this.renderDisplayImage()}
          {this.renderCategory()}
          {this.renderThumbnailImage()}
        </div>
      </div>
    )
  }
}
export default MatchGame

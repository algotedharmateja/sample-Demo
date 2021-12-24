import './index.css'

const ThumbnailItems = props => {
  const {thumbnail} = props
  const {thumbnailUrl, id, imageUrl} = thumbnail

  return (
    <li className="image-items">
      <button className="image-button" type="button">
        <img src={thumbnailUrl} className="thumbnail-image" alt={imageUrl} />
      </button>
    </li>
  )
}
export default ThumbnailItems

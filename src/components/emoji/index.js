import './index.css'

const Emoji = props => {
  const {resourcesList, clickBtn} = props
  const {id, name, imageUrl} = resourcesList

  const changeImage = () => {
    clickBtn()
  }

  return (
    <li>
      <button type="button" onClick={changeImage}>
        <img src={imageUrl} alt={name} />
      </button>
      <p>{name}</p>
    </li>
  )
}
export default Emoji

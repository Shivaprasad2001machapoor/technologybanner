// Write your code here.
import './index.css'
const Technologies = props => {
  const {techDetails} = props
  const {title, description, imgUrl, className} = techDetails
  return (
    <li className={`${className} technology-card-item`}>
      <div>
        <h1 className="heading">{title}</h1>
        <p className="description">{description}</p>
        <img src={imgUrl} className="image-size-con" />
      </div>
    </li>
  )
}
export default Technologies

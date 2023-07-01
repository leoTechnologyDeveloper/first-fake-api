
import './Card.css';

function Card({item}) {

const {image, name, city, profession, company, description } = item;

  return (
    <div className='card'>
        <img className='imagecard' src={image} alt={name + "image"} />
        <div className="textContainer ">
        <h1>{name} in {city}</h1>
        <p>{profession} at {company}</p>
        <p>{description}</p>
        </div>
    </div>
  )
}

export default Card
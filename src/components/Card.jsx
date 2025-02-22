import './Card.css';

const Card = (props) => {
    return (
        <div className="card">
            <img src={props.image} alt={props.title} />
                <h2>{props.title}</h2>
                <p>{props.description}</p>
                <button>View</button>
        </div>
    )
}

export default Card;
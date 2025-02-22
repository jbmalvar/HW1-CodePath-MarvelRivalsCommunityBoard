import './Card.css';

const Card = (props) => {
    return (
        <div className="card">
            <img src={props.image} alt={props.title} />
                <h2>{props.title}</h2>
                <p>{props.description}</p>
                <a href={props.link}>
                    <button>View</button>
                </a>
        </div>
    )
}

export default Card;
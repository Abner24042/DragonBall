import './card.css'

interface Props {
    name: string;
    image: string;
    ki: string;
    maxki: string;
    race: string;
}

function Card({ image, name, ki, maxki  , race }: Props) {
    return (
        <>
        <div className="card">
            <div className="card-image-wrapper">
                <img src={image} alt={name} />
            </div>
            <div className="card-info">
                <h3>{name}</h3>
                <p><strong>Ki:</strong> {ki}</p>
                <p><strong>Max Ki:</strong> {maxki}</p>
                <p><strong>Race:</strong> {race}</p>
            </div>
        </div>
        </>
    )
}

export default Card
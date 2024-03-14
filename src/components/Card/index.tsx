import './styles.css'
import Props from './interfaces'

const Card = (props: Props) => {
    return (
        <>
        <div className='card'> 
                <h3>{props.title}</h3>
            <img src={props.image} 
            />
            <button><a href={props.link}>Assistir</a></button>
        </div>
        </>
    )
}

export default Card;
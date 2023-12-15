import './css/Card.css'
import Meet from './Meet'

function Card({
    species,
    img,
    name, age, gender, intro
    }){
    return(
        <div className={`card card-${species}`}>
            <img 
                src={img}
                className='card__img'
                alt={`img of ${name} for demo in card`}
            />
            <h3 className='card__title'>{`${name}`}</h3>
            <div className='card__basicInfo'>
                <p>name: {name}</p>
                <p>age: {age}</p>
                <p>gender: {gender}</p>
            </div>
            <div className='card__advInfo'>
                <p>What my friends at Unreal Humane say about me:</p>
                <p>{intro}</p>
            </div>
            <Meet/>
        </div>
    );
}

export default Card;
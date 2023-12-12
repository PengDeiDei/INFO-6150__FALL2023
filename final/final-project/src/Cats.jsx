import './css/Cats.css'
import cats from './cats'
import Card from './Card';
import Filter from './Filter';
import { useState } from 'react';

function Cats(){
    const [selectGender, setSelectGender] = useState('All');
    const [selectAge, setSelectAge] = useState('All');

    const filteredCats = cats.filter(item=>{
        const isGenderMatch = selectGender === 'All' || item.sex === selectGender;
        const isAgeMatch = selectAge === 'All' || item.ageRange === selectAge;

        return (isGenderMatch && isAgeMatch);
    });

    const cards = filteredCats.map(item => {
        return(
            <Card
                key={`card-cats--${item.name}`} 
                species={"cats"}
                img={item.pic}
                name={item.name}
                age={item.age}
                gender={item.gender}
                intro={item.intro}
            />
        );                
    });
    return(
        <div className='cats'>
            <Filter 
                className="cats-filter"
                selectAge={selectAge}
                setSelectAge={setSelectAge}
                selectGender={selectGender}
                setSelectGender={setSelectGender}
            />
            {cards}
            <div className='cats__reminder'>
                <p>
                    Not all the details about a pet's adoption needs are listed here. 
                    We cover all medical and behavior information when you visit us 
                    during our walk-in hours
                </p> 
            </div>
        </div>
    );
}

export default Cats;
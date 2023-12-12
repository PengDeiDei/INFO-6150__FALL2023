import './css/Home.css'
import home1 from './images/home-1.jpg'
import home2 from './images/home-2.jpg'
import home3 from './images/home-3.jpg'
import Button from './Button';

function Home({setPage}){
    function goPage(event, page){
        event.preventDefault();
        setPage(page);
    }

    return(
        <div className="home">
            <div className='panel-home panel-home--about'>
                <img
                    src={home1}
                    className='panel-home__img panel-home__img--about'
                    alt='img of a laying cat and a sitting dog'
                />
                <div className='panel-home__container'>
                    <h2 className='panel-home__title'>Unreal Shelter</h2>
                    <p>
                        Unreal Humane operates a state-of-the-art animal shelter and veterinary 
                        medicine facility that serves thousands of adoptable and community pets 
                        annually. Our team of experts provide every animal that comes through our 
                        doors with the highest quality of care, and all pets and their people with 
                        the respect and compassion they deserve.
                    </p>
                    <p>
                        Since opening in 2023, we have increased our capacity and expanded our support 
                        and resources for pet owners to complement the adoption services that will always 
                        be our foundation. As the needs within animal welfare continue to evolve, we are 
                        reimagining our campus to put our resources to their greatest and best use in order 
                        to improve care for pets and the community we serve.
                    </p>
                </div>
            </div>
            <div className='panel-home panel-home--adoption'>
                <img
                    src={home2}
                    className='panel-home__img panel-home__img--adoption'
                    alt='img of both a cat and a dog are laying'
                />
                <div className='panel-home__container'>
                    <h2 className='panel-home__title'>Why Adopt?</h2>
                    <p>
                        Pet adoption is a critical part of our mission. Each year, 6.3 million pets enter 
                        animal shelters in the United States. Tragically, only two thirds of them are adopted. 
                    </p>
                    <p>    
                        At Unreal Shelter, homeless pets stay with us until they are adopted — no matter how 
                        long it takes. We believe every animal deserves a chance for a loving family. There are 
                        many reasons pets come to our shelter. Some animals are transferred from other shelters, 
                        and some pets are surrendered for medical or behavioral concerns, or due to financial 
                        hardship. No matter the situation, we prepare adopters for success by helping you choose 
                        a pet that is right for your home environment and providing education and care that will 
                        get your relationship off to a good start.
                    </p>
                    <p>
                        We welcome walk-in visitors at our Adoption Center from 12 to 6 p.m., 
                        Tuesday-Sunday to meet available pets. If you have a specific pet in mind, 
                        we highly recommend checking our website before visiting to see if they 
                        are still available.
                    </p>
                    <p>
                        Check out our avaliable 
                        <Button 
                            children={"kitten"} 
                            className='panel-home--adoption__link' 
                            visual='link'
                            onClick={event=>goPage(event, "/cats.html")}
                        />
                        and 
                        <Button 
                            children={"puppies"} 
                            className='panel-home--adoption__link' 
                            visual='link'
                            onClick={event=>goPage(event, "/dogs.html")}
                        />
                        now.
                    </p>
                </div>
            </div>
            <div className='panel-home panel-home--service'>
                <h2 className='panel-home__title'> Wellness Clinic Services</h2>
                <img
                    src={home3}
                    className='panel-home__img panel-home__img--service'
                    alt='img of a dog in veterinary clinic'
                />
                <div className='panel-home__container'>
                    <p>
                        At Unreal Humane we believe that people and their pets deserve access to veterinary care. 
                        Our goal is to provide affordable and accessible wellness care, vaccinations and microchips 
                        to members of our community.
                    </p>
                    <p>
                        We are now offering regular Wellness Clinic appointments to support pets and pet parents in 
                        need of these services.
                    </p>
                    <p>
                        During these visits, our veterinary team will provide a full physical exam, ensure that your
                        pet is up-to-date on vaccinations & parasite control, and offer FELV/FIV and heartworm testing. 
                    </p>
                    <p>
                        Microchipping is also available with wellness exams and makes it easy to identify your pets 
                        if they are lost. Each chip number is unique and is registered with a national database. This 
                        number links to your address and phone number. Most animal organizations and veterinary clinics 
                        can scan and read microchips.
                    </p>
                    <p>
                        Please note: wellness visits are NOT surgery appointments and we do not treat sick or injured 
                        community-owned pets through our Wellness Clinic. At wellness visits, we are not able to 
                        address chronic diseases, infections, coughing, sneezing, vomiting, diarrhea, wounds, or other 
                        injuries and if your pet is not eating or drinking normally. 
                    </p>
                    <Button 
                            children={"Make an appointment here"} 
                            className='panel-home--service__link' 
                            visual='link'
                            onClick={event=>goPage(event, "/service.html")}
                        />
                </div>
            </div>
        </div>
    );
}

export default Home;
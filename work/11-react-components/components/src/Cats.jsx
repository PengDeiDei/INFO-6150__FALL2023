import './Cats.css'
import Subscribe from './Subscribe'

function Cats(){
    return(
        <div className='cats'>
           <div className="card-cats card1">
                <h2 className="card-cats__title"> Jorts</h2>
                <img 
                    className="card-cats__img"
                    src="http://placekitten.com/270/250"
                    alt="a cat pic for card #1"
                />
                <div className="card-cats__container">
                    <p> 
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, quia fuga, delectus perspiciatis impedit 
                        excepturi similique eum culpa voluptate ratione est.
                    </p>
                    <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                    <Subscribe/>  
                </div>
            </div>
            <div className="card-cats card2">
                <h2 className="card-cats__title"> Jean</h2>
                <img 
                    className="card-cats__img"
                    src="http://placekitten.com/250/272"
                    alt="a cat pic for card #2"
                />
                <div className="card-cats__container">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem porro esse, mollitia delectus 
                        amet quae autem magnam ex, minima reiciendis quam quidem ea placeat, voluptas rerum inventore 
                        veniam suscipit deleniti? Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus 
                        sit veniam assumenda exercitationem tempore a explicabo ullam, tenetur laborum mollitia et!
                    </p>
                    <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                    <Subscribe/> 
                </div>
            </div>
            <div className="card-cats card3">
                <h2 className="card-cats__title"> Maru</h2>
                <img 
                    className="card-cats__img"
                    src="http://placekitten.com/300/250"
                    alt="a cat pic for card #3"
                />
                <div className="card-cats__container">
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum perspiciatis ipsam quis dignissimos 
                        natus officiis corporis nam velit mollitia? Ex, nulla eveniet blanditiis facere placeat pariatur tempora. 
                        Non, nobis harum.
                    </p>
                    <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                    <Subscribe/> 
                </div>
            </div>
            <div className="card-cats card4">
                    <h2 className="card-cats__title"> Nyancat</h2>
                    <img 
                        className="card-cats__img"
                        src="http://placekitten.com/300/270"
                        alt="a cat pic for card #4"
                    />
                    <div className="card-cats__container">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos rerum voluptas deserunt aliquid 
                            accusamus rem perferendis asperiores quasi non repudiandae ratione, quisquam mollitia, tenetur atque iusto. 
                            Vel deleniti non odio.
                        </p>
                        <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                        <Subscribe/> 
                    </div>
            </div>
            <div className="card-cats card5">
                <h2 className="card-cats__title"> Grumpy Cat</h2>
                <img 
                    className="card-cats__img"
                    src="http://placekitten.com/300/282"
                    alt="a cat pic for card #5"
                />
                <div className="card-cats__container">
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                        Consequatur natus, cumque ullam reiciendis nulla nihil repudiandae cupiditate magni excepturi fuga iure tempora 
                        doloremque, facere, dolore placeat! Tempora et cupiditate corporis.
                    </p>
                    <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                    <Subscribe/>
                </div>
            </div>
            <div className="card-cats card6">
                <h2 className="card-cats__title"> Lil Bud</h2>
                <img 
                    className="card-cats__img"
                    src="http://placekitten.com/310/300"
                    alt="a cat pic for card #6"    
                />
                <div className="card-cats__container">
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias quia repudiandae tenetur cupiditate porro, dolor 
                        hic ipsum, praesentium odit placeat ullam!
                    </p>
                    <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                    <Subscribe/> 
                </div>
            </div>
        </div>
    );
}

export default Cats;
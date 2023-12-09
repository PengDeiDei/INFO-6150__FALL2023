import './Home.css'

function Home(){
    return (
        <>
            <div className="card-home card-home--left">
                <img 
                    className="card-home__img card-home__img--right"
                    src="http://placekitten.com/250/282"
                    alt="a cat pic for the left card in main"
                />
                <div className="card-home__container">
                    <h2 className="card-home__title"> Long Time Internet Subjects</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae eum excepturi laudantium. 
                        Aspernatur distinctio ea consequuntur maxime perferendis blanditiis, animi explicabo 
                        molestias fuga esse sunt mollitia, omnis velit reiciendis aut?
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio voluptatum ab, enim, 
                        veniam est in odio reiciendis odit ratione reprehenderit obcaecati similique. Modi aliquam 
                        cum doloremque quam, nostrum autem consequuntur!
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum quae unde, harum quaerat 
                        quos natus blanditiis omnis ipsum similique recusandae iure quia quo dolores ratione tempore 
                        itaque nemo possimus nihil.
                    </p>
                </div>
            </div>
            <div className="card-home card-home--right">
                <img 
                    className="card-home__img card-home__img--left"
                    src="http://placekitten.com/250/250"
                    alt="a cat pic for the left card in main"
                />
                <div className="card-home__container">
                    <h2 className="card-home__title"> Long Time Internet Kings</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea aliquid delectus odit ut? 
                        Eos nesciunt aut perspiciatis voluptatum quasi vero dolorem. Dolore cum odit nostrum 
                        assumenda libero dignissimos expedita! Ut!
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores obcaecati excepturi 
                        sed blanditiis aliquid! Animi sunt debitis similique voluptatem quasi nostrum illo 
                        harum. Facilis error nulla, quis molestiae reiciendis eligendi?
                    </p>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est ex accusantium assumenda 
                        repellendus earum! At aliquid qui numquam doloremque corrupti unde! Facilis odio ipsum 
                        sit cum quos, similique ex provident.
                    </p>
                </div>
            </div>
        </>
    );
}

export default Home;
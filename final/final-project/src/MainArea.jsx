import Home from './Home'
import Cats from './Cats'
import Dogs from './Dogs'
import Service from './Service'

function MainArea({page, setPage}){
    return (
        <main>
            {(page === '/') && <Home setPage={setPage}/>}
            {(page === '/cats.html' && <Cats/>)}
            {(page === '/dogs.html' && <Dogs/>)}
            {(page === '/service.html' && <Service/>)}
        </main>
    );
}

export default MainArea;
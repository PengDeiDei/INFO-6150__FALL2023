import Home from './Home'
import About from './About'
import Cats from './Cats'

function MainArea({page}){
    return (
        <main>
            {(page == '/') && <Home/>}
            {(page == '/about.html' && <About/>)}
            {(page =='/cats.html' && <Cats/>)}
        </main>
    );
}

export default MainArea;
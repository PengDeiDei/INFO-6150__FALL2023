import './css/Header.css'
import GlobalNav from './GlobalNav'
import header__logo from './images/logo.jpg'

function Header({setPage}){
    return (
        <header className='header'>
            <img 
                src={header__logo}
                className='header__logo'
                alt='img of a person with a cat and a dog for header logo'
            />
            <h1 className='header__title'>
                Welcome to Unreal Shelter
            </h1>
            <GlobalNav className='header__nav' setPage={setPage}/>
        </header>
    );
}

export default Header;
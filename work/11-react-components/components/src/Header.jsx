import './Header.css'
import GlobalNav from './GlobalNav'

function Header({setPage}){
    return (
        <header className='header'>
            <img
                src='http://placekitten.com/100/100'
                className='header__logo'
                alt='Cat Header Logo'
            />
            <h1 className='header__title'>
                Cats Power the Internet
            </h1>
            <GlobalNav className='header__nav' setPage={setPage}/>
        </header>
    );
}

export default Header;
import './css/GlobalNav.css'
import './css/icon.css'
import { useState } from 'react';
import Button from './Button';
import menu from './menu'

function GlobalNav( {className, setPage}){
    const [showMenu, setShowMenu] = useState(false);
    
    function goPage(event, page){
        event.preventDefault();
        setPage(page);
    }

    const list = menu.map(item => {
        return(
            <li className='global-nav__item' key={item.name}>
                <Button
                    children={item.name}
                    className={'global-nav__link'}
                    visual='link'
                    onClick={(event)=>goPage(event, item.path)}
                />
                </li>
        );                
    });

    const showMenuClass = showMenu ? '':'global-nav__list--hidden';
    return (
        <nav className={`global-nav ${className}`}>
            <Button 
                children={<i className="global-nav__icon gg-menu"></i>}
                className='global-nav__btn'
                aria_label={showMenu ? "Close Menu" : "Open Menu"}
                onClick={() => setShowMenu(!showMenu)}
            />
            <ul className={`global-nav__list ${showMenuClass}`}>
                {list}
            </ul>
        </nav>
    );
}

export default GlobalNav;
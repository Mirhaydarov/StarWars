import React from 'react';

import './header.scss';

function Header() {
    const menuList = ['Characters', 'Planets', 'Starships', 'Vehicles'];

    const elements = menuList.map((menuItem) => {
        return (
            <li className='header__list-item' key={menuItem}>
                <button type='button' className='header__list-action'>
                    {menuItem}
                </button>
            </li>
        );
    });
    return (
        <header className='header'>
            <div className='wrap header__wrap'>
                <div className='header__grid'>
                    <h1 className='logo'>Swapi Api</h1>
                    <nav className='header__nav'>
                        <ul className='header__list'>{elements}</ul>
                    </nav>
                </div>
            </div>
        </header>
    );
}

export default Header;

import React from 'react';
import { Link } from 'react-router-dom';

import './header.scss';

function Header() {
    const menuList = [
        { field: '/characters/', label: 'Characters' },
        { field: '/planets/', label: 'Planets' },
        { field: '/starships/', label: 'Starships' },
        { field: '/vehicles/', label: 'Vehicles' },
    ];

    const elements = menuList.map(({ field, label }) => {
        return (
            <li className='header__list-item' key={field}>
                <Link to={field} className='header__list-action'>
                    {label}
                </Link>
            </li>
        );
    });
    return (
        <header className='header'>
            <div className='wrap header__wrap'>
                <div className='header__grid'>
                    <Link className='logo' to='/'>
                        Swapi Api
                    </Link>
                    <nav className='header__nav'>
                        <ul className='header__list'>{elements}</ul>
                    </nav>
                </div>
            </div>
        </header>
    );
}

export default Header;

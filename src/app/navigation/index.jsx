import {useCallback, useEffect, useMemo, useState} from "react";
import s from './Navigation.module.css'
import Link from 'next/link';

const links = ['Home', 'Policy']
export const Navigation = () => {
    const [activeLink, setActiveLink] = useState(0);

    const handleClick = useCallback(e => {
        let active;

        if (e.target.text === 'Home') {
            active = 0;
        }
        if (e.target.text === 'Policy') {
            active = 1
        }
        setActiveLink(active);
    }, []);


    return (
        <nav>
            <ul className={s.navList}>
                {links.map((item, index) => <li>
                    <Link
                        onClick={handleClick}
                        className={activeLink === index ? s.activeLink : s.navLink}
                        href="/"
                    >
                        {item}
                    </Link>
                </li>)}
            </ul>
        </nav>
    )
}
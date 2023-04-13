import "./menu.scss"
import { HashLink } from 'react-router-hash-link'
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
type MenuType = {
    menuOpen: boolean;
    setMenuOpen(flag: boolean): void;
};

export default function Menu({ menuOpen, setMenuOpen }: MenuType) {
    const [navId, setNavId] = useState('')
    const search = useLocation();
    useEffect(() => {
        const label = search.hash.replace('#', '')
        setNavId(label)
    }, [setNavId, search]);
    return (
        <div className={"sidebar " + (menuOpen && "active")}>
            <ul>

                <li onClick={() => setMenuOpen(false)} className={`menuItem1 ${menuOpen ? "active":""} ${navId === ''? 'selected':''}`}>
                    <HashLink to="/#" smooth>Ecosystem</HashLink>
                </li>
                <li onClick={() => setMenuOpen(false)} className={`menuItem2 ${menuOpen ? "active":""} ${navId === 'farm'? 'selected':''}`}>
                    <HashLink to="/#overview" smooth>Overview</HashLink>
                </li>
                <li onClick={() => setMenuOpen(false)} className={`menuItem3 ${menuOpen ? "active":""} ${navId === 'ico'? 'selected':''}`}>
                    <HashLink to="/#token" smooth>Token</HashLink>
                </li><li onClick={() => setMenuOpen(false)} className={`menuItem4 ${menuOpen ? "active":""} ${navId === 'launchpad'? 'selected':''}`}>
                    <HashLink to="/#how_to_buy" smooth>How to Buy</HashLink>
                </li>
                <li onClick={() => setMenuOpen(false)} className={`menuItem5 ${menuOpen ? "active":""} ${navId === 'ico'? 'selected':''}`}>
                    <HashLink to="/" smooth>Whitepaper</HashLink>
                </li>
                
                <li onClick={() => setMenuOpen(false)} className={`menuItem6 ${menuOpen ? "active":""} ${navId === 'more'? 'selected':''}`}>
                    <HashLink to="/#faq" smooth>FAQ</HashLink>
                </li>

            </ul>
        </div>
    )
}


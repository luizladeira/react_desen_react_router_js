import { Link, useLocation } from 'react-router-dom';
import MenuLink from '../MenuLink';
import styles from './Menu.module.css';

export default function Menu(){
     
    return (
        <header>
            <nav className={styles.navegacao}>
                <MenuLink to="/">
                    Ínicio
                </MenuLink>
                <MenuLink to="/sobre-mim">
                    Sobre Mim
                </MenuLink>
                <MenuLink to="/teste">
                    teste
                </MenuLink>
                
            </nav>
        </header>
    )
}
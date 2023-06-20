import { FC } from 'react'
import { Link } from 'react-router-dom';
import './Header.css';

const Header:FC = () => {
    return (
    <div id="my-header">
        <Link to="/">Leads </Link>
        <a href="/#">Log Out</a>
        <a href="/#">Support</a>
    </div>)
}

export default Header;
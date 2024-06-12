import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './header.css'; // Certifique-se de importar o arquivo CSS da PowerFlex

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className={menuOpen ? 'header open' : 'header'}>
            <Link to="/" className="logo">PowerFlex Academy</Link>
            <div className="menu-toggle" onClick={toggleMenu}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <nav className="nav">
                <Link to="/usuario" className="link">Cadastrar Usuário</Link>
                <Link to="/funcionario" className="link">Funcionário</Link>
                <div className="empty"></div>
            </nav>
        </header>
    );
}

export default Header;


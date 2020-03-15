import React from 'react';

import logo from '../earthquake-logo-light.png';
import styles from './Navbar.module.css';

function Navbar() {
    return (
        <div className={styles.navbar}>
            <div>
                <img src={logo} alt="logo" className={styles.imgLogo} height={40}/>
            </div>
            <div>

            </div>
        </div>
    );
}

export default Navbar;

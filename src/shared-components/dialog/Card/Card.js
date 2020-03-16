import React from 'react';

import styles from './Card.module.css';

function Card(props) {
    return (
        <div className={styles.card} onClick={(event) => event.stopPropagation()}>
            <div className={styles.body}>
                {props.children}
            </div>
            <div className={styles.btnContainer}>
                <button className={styles.actionBtn} onClick={props.onButtonClick}>OK</button>
            </div>
        </div>
    );
}

export default Card;

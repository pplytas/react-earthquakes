import React from 'react';

import styles from './Dialog.module.css';
import Backdrop from './Backdrop/Backdrop';
import Card from './Card/Card';

function Dialog(props) {
    return (
        (props.show) ? (
            <Backdrop onClick={props.onBackdropClick}>
                <Card onButtonClick={props.onButtonClick}>
                    <h2 className={styles.errorTitle}>{props.title}</h2>
                    <p className={styles.errorMessage}>{props.message}</p>
                </Card>
            </Backdrop>
        ) : null
    );
}

export default Dialog;

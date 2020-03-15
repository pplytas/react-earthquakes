import React from 'react';

import styles from './ContentContainer.module.css';

function ContentContainer(props) {
    return (
        <div className={styles.contentContainer}>
            {props.children}
        </div>
    );
}

export default ContentContainer;

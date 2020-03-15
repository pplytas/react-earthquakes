import React from 'react';
import moment from 'moment'

import styles from './EarthquakeList.module.css';

function EarthquakeList(props) {
    return (
        <div>
            <h2 className={styles.title}>Earthquakes</h2>
            <div>
                {
                    props.earthquakes.map(earthquake => {
                        const earthquakeoccuredDate = moment(earthquake.occured_at).format('DD-MM-YYYY HH:mm:ss');
                        return (
                            <button key={earthquake.id}
                                    className={`${styles.earthquakeBtn} ${styles.dark}`}
                                    onClick={() => props.onEarthquakeClick(earthquake.id)}>
                                {earthquakeoccuredDate}
                            </button>
                        );
                    })
                }
            </div>
        </div>
    );
}

export default EarthquakeList;

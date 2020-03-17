import React from 'react';
import moment from 'moment';

import styles from './EarthquakeList.module.css';

function EarthquakesList(props) {
    return (
        <React.Fragment>
            {
                props.earthquakes.map(earthquake => {
                    const earthquakeOccurredDate = moment(earthquake.occured_at).format('DD-MM-YYYY HH:mm:ss');
                    return (
                        <button key={earthquake.id}
                                className={`${styles.earthquakeBtn} ${styles.dark}`}
                                onClick={() => props.onEarthquakeClick(earthquake.id)}>
                            {earthquakeOccurredDate}
                        </button>
                    );
                })
            }
        </React.Fragment>
    );
}

export default EarthquakesList;

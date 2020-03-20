import React, {useState} from 'react';
import moment from 'moment';

import styles from './EarthquakeList.module.css';

function EarthquakesList(props) {
    let lastEarthquakeId = null;
    if (props.earthquakes.length > 0) {
        lastEarthquakeId = props.earthquakes[props.earthquakes.length - 1].id;
    }

    const [selectedEarthquakeId, setSelectedEarthquakeId] = useState(lastEarthquakeId);

    function handleEarthquakeClick(earthquake) {
        props.onEarthquakeClick(earthquake.id);
        setSelectedEarthquakeId(earthquake.id);
    }

    return (
        <React.Fragment>
            {
                props.earthquakes.map(earthquake => {
                    const earthquakeOccurredDate = moment(earthquake.occured_at).format('DD-MM-YYYY HH:mm:ss');
                    const activeClass = (earthquake.id === selectedEarthquakeId) ? styles.active : '';
                    return (
                        <button key={earthquake.id}
                                className={`shadowZ2 ${styles.earthquakeBtn} ${activeClass}`}
                                onClick={() => handleEarthquakeClick(earthquake)}>
                            {earthquakeOccurredDate}
                        </button>
                    );
                })
            }
        </React.Fragment>
    );
}

export default EarthquakesList;

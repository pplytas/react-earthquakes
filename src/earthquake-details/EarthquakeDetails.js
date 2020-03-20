import React from 'react';

import styles from './EarthquakeDetails.module.css';
import { generateMapImageUrl } from '../shared/utilities';

function EarthquakeDetails(props) {

    let earthquakeDetails = (
        <p>Please select an earthquake.</p>
    );
    if (props.earthquake !== null) {
        const mapImageUrl = generateMapImageUrl(props.earthquake.latitude, props.earthquake.longitude);
        earthquakeDetails = (
            <React.Fragment>
                <div className={styles.mapContainer}>
                    <img className={`shadowZ4 ${styles.mapImg}`} src={mapImageUrl} alt="earthquake-map" width="320"/>
                </div>

                <div className={`row`}>
                    <div className={styles.detailContainer}>
                        <p className={styles.detailsLabel}>Magnitude</p>
                        <p className={styles.detailsValue}>{props.earthquake.magnitude}</p>
                    </div>
                    <div className={styles.detailContainer}>
                        <p className={styles.detailsLabel}>Depth</p>
                        <p className={styles.detailsValue}>{props.earthquake.depth}</p>
                    </div>
                </div>
                <div className={`row`}>
                    <div className={styles.detailContainer}>
                        <p className={styles.detailsLabel}>Latitude</p>
                        <p className={styles.detailsValue}>{props.earthquake.latitude}</p>
                    </div>
                    <div className={styles.detailContainer}>
                        <p className={styles.detailsLabel}>Longitude</p>
                        <p className={styles.detailsValue}>{props.earthquake.longitude}</p>
                    </div>
                </div>
                <div className={styles.detailContainer}>
                    <p className={styles.detailsLabel}>Occured At</p>
                    <p className={styles.detailsValue}>{props.earthquake.occured_at}</p>
                </div>
                <div className={styles.detailContainer}>
                    <p className={styles.detailsLabel}>Inserted At</p>
                    <p className={styles.detailsValue}>{props.earthquake.inserted_at}</p>
                </div>
            </React.Fragment>
        );
    }

    return (
        <div>
            <h2>Details</h2>
            <div>
                {earthquakeDetails}
            </div>
        </div>
    );
}

export default EarthquakeDetails;

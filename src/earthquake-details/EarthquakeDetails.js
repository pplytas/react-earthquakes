import React from 'react';

import styles from './EarthquakeDetails.module.css';

function EarthquakeDetails(props) {

    let earthquakeDetails = (
        <p>Please select an earthquake.</p>
    );
    if (props.earthquake !== null) {
        earthquakeDetails = (
            <React.Fragment>
                <div className={styles.detailContainer}>
                    <p className={styles.detailsLabel}>Depth</p>
                    <p className={styles.detailsValue}>{props.earthquake.depth}</p>
                </div>
                <div className={styles.detailContainer}>
                    <p className={styles.detailsLabel}>ID</p>
                    <p className={styles.detailsValue}>{props.earthquake.id}</p>
                </div>
                <div className={styles.detailContainer}>
                    <p className={styles.detailsLabel}>Inserted At</p>
                    <p className={styles.detailsValue}>{props.earthquake.inserted_at}</p>
                </div>
                <div className={styles.detailContainer}>
                    <p className={styles.detailsLabel}>Latitude</p>
                    <p className={styles.detailsValue}>{props.earthquake.latitude}</p>
                </div>
                <div className={styles.detailContainer}>
                    <p className={styles.detailsLabel}>Longitude</p>
                    <p className={styles.detailsValue}>{props.earthquake.longitude}</p>
                </div>
                <div className={styles.detailContainer}>
                    <p className={styles.detailsLabel}>Magnitude</p>
                    <p className={styles.detailsValue}>{props.earthquake.magnitude}</p>
                </div>
                <div className={styles.detailContainer}>
                    <p className={styles.detailsLabel}>Occured At</p>
                    <p className={styles.detailsValue}>{props.earthquake.occured_at}</p>
                </div>
                <div className={styles.detailContainer}>
                    <p className={styles.detailsLabel}>Status</p>
                    <p className={styles.detailsValue}>{props.earthquake.status}</p>
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

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
                <div className={`shadowZ4 ${styles.mapContainer}`}>
                    <img className={styles.mapImg} src={mapImageUrl} alt="earthquake-map" width="320"/>
                </div>

                <div className={`row`}>
                    <div className={styles.detail}>
                        <p className={styles.detailLabel}>Magnitude</p>
                        <p className={styles.detailValue}>{props.earthquake.magnitude}</p>
                    </div>
                    <div className={styles.detail}>
                        <p className={styles.detailLabel}>Depth</p>
                        <p className={styles.detailValue}>{props.earthquake.depth}</p>
                    </div>
                </div>
                <div className={`row`}>
                    <div className={styles.detail}>
                        <p className={styles.detailLabel}>Latitude</p>
                        <p className={styles.detailValue}>{props.earthquake.latitude}</p>
                    </div>
                    <div className={styles.detail}>
                        <p className={styles.detailLabel}>Longitude</p>
                        <p className={styles.detailValue}>{props.earthquake.longitude}</p>
                    </div>
                </div>
                <div className={`row`}>
                    <div className={styles.detail}>
                        <p className={styles.detailLabel}>Occured At</p>
                        <p className={styles.detailValue}>{props.earthquake.occured_at}</p>
                    </div>
                    <div className={styles.detail}>
                        <p className={styles.detailLabel}>Inserted At</p>
                        <p className={styles.detailValue}>{props.earthquake.inserted_at}</p>
                    </div>
                </div>
            </React.Fragment>
        );
    }

    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <h2>Details</h2>
                <button className="button" onClick={props.onCloseClick}>
                    <i className="fas fa-chevron-right"></i>
                </button>
            </div>
            <div className={styles.details}>
                <div className={styles.scrollable}>
                    {earthquakeDetails}
                </div>
            </div>
        </div>
    );
}

export default EarthquakeDetails;

import React from 'react';
import { useSelector } from 'react-redux';

import styles from './EarthquakesView.module.css';
import EarthquakeList from './earthquake-list/EarthquakeList';

function EarthquakesView(props) {
    const earthquakes = useSelector(state => state.earthquakes);
    const isLoading = useSelector(state => state.isLoading);

    return (
        <div>
            <h2 className={styles.title}>Earthquakes</h2>
            <div>
                {
                    isLoading ?
                        (<div>LOADING</div>) :
                        (<EarthquakeList earthquakes={earthquakes} onEarthquakeClick={props.onEarthquakeClick}/>)
                }
            </div>
        </div>
    );
}

export default EarthquakesView;

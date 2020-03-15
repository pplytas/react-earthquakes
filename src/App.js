import React, {useEffect, useState} from 'react';
import './App.module.css';
import axios from 'axios';

import styles from './App.module.css';
import Navbar from './navbar/Navbar';
import ContentContainer from './content-container/ContentContainer';
import EarthquakeList from './earthquake-list/EarthquakeList';
import EarthquakeDetails from './earthquake-details/EarthquakeDetails';

function App() {
    const [earthquakes, setEarthquakes] = useState([]);
    const [selectedEarthquake, setSelectedEarthquake] = useState(null);

    useEffect(() => {
        axios.get('https://earthquakeapi.plytas.com/earthquakes')
            .then(response => {
                console.log(response.data);
                const earthquakesResults = response.data.results;
                setEarthquakes(earthquakesResults);
            });
    }, []);

    function changeEarthquakeDetails(earthquakeId) {
        console.log('earthquakeId', earthquakeId);
        const selectedEarthquakeResult = earthquakes.find(earthquake => earthquake.id === earthquakeId);
        console.log(selectedEarthquakeResult);
        setSelectedEarthquake(selectedEarthquakeResult);
    }

    return (
        <div className={styles.App}>
            <Navbar/>
            <ContentContainer>
                <div className={styles.leftPanel}>
                    <EarthquakeList earthquakes={earthquakes} onEarthquakeClick={changeEarthquakeDetails}/>
                </div>
                <div className={styles.rightPanel}>
                    <EarthquakeDetails earthquake={selectedEarthquake}/>
                </div>
            </ContentContainer>
        </div>
    );
}

export default App;

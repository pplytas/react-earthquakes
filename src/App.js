import React, {useEffect, useState} from 'react';
import './App.module.css';
import axios from 'axios';

import styles from './App.module.css';
import Navbar from './navbar/Navbar';
import ContentContainer from './content-container/ContentContainer';
import EarthquakeList from './earthquake-list/EarthquakeList';
import EarthquakeDetails from './earthquake-details/EarthquakeDetails';
import Dialog from './shared-components/dialog/Dialog';


function App() {
    const [earthquakes, setEarthquakes] = useState([]);
    const [selectedEarthquake, setSelectedEarthquake] = useState(null);
    const [errorDialog, setErrorDialog] = useState({
        show: false,
        title: '',
        message: ''
    });

    useEffect(() => {
        axios.get('https://earthquakeapi.plytas.com/earthquakes')
            .then(response => {
                console.log(response.data);
                const earthquakesResults = response.data.results;
                setEarthquakes(earthquakesResults);
            })
            .catch(error => {
                console.log(error);
                setErrorDialog({
                    show: true,
                    title: 'Network Error',
                    message: 'Failed to fetch earthquakes.'
                });
            });
    }, []);

    function changeEarthquakeDetails(earthquakeId) {
        console.log('earthquakeId', earthquakeId);
        const selectedEarthquakeResult = earthquakes.find(earthquake => earthquake.id === earthquakeId);
        console.log(selectedEarthquakeResult);
        setSelectedEarthquake(selectedEarthquakeResult);
    }

    function hideDialog() {
        setErrorDialog({
            show: false,
            title: '',
            message: ''
        });
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
            <Dialog show={errorDialog.show}
                    title={errorDialog.title}
                    message={errorDialog.message}
                    onBackdropClick={hideDialog}
                    onButtonClick={hideDialog}/>
        </div>
    );
}

export default App;

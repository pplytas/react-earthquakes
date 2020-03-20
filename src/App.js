import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

import styles from './App.module.css';
import Navbar from './navbar/Navbar';
import ContentContainer from './content-container/ContentContainer';
import EarthquakesView from './earthquakes-view/EarthquakesView';
import EarthquakeDetails from './earthquake-details/EarthquakeDetails';
import Dialog from './shared/components/dialog/Dialog';
import * as fromEarthquakesActions from './store/actions/earthquakes';


function App() {
    const earthquakes = useSelector(state => state.earthquakes);
    const [selectedEarthquake, setSelectedEarthquake] = useState(null);
    const [errorDialog, setErrorDialog] = useState({
        show: false,
        title: '',
        message: ''
    });

    const dispatch = useDispatch();
    const loadEarthquakes = useCallback(() => (
        dispatch(fromEarthquakesActions.loadEarthquakes())
    ), [dispatch]);
    const loadEarthquakesSuccess = useCallback((earthquakes) => (
        dispatch(fromEarthquakesActions.loadEarthquakesSuccess(earthquakes))
    ), [dispatch]);
    const loadEarthquakesFail = useCallback(() => (
        dispatch(fromEarthquakesActions.loadEarthquakesFail())
    ), [dispatch]);

    const changeEarthquakeDetails = useCallback((earthquakeId) => {
        const selectedEarthquakeResult = earthquakes.find(earthquake => earthquake.id === earthquakeId);
        setSelectedEarthquake(selectedEarthquakeResult);
    }, [earthquakes]);

    useEffect(() => {
        loadEarthquakes();
        axios.get('https://earthquakeapi.plytas.com/earthquakes')
            .then(response => {
                console.log(response.data);
                const earthquakesResults = response.data.results;
                loadEarthquakesSuccess(earthquakesResults);
            })
            .catch(error => {
                console.log(error);
                loadEarthquakesFail();
                setErrorDialog({
                    show: true,
                    title: 'Network Error',
                    message: 'Failed to fetch earthquakes.'
                });
            });
    }, [loadEarthquakes, loadEarthquakesSuccess, loadEarthquakesFail]);

    useEffect(() => {
        if (earthquakes.length > 0) {
            changeEarthquakeDetails(earthquakes[earthquakes.length - 1].id);
        }
    }, [earthquakes, changeEarthquakeDetails]);

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
                    <EarthquakesView onEarthquakeClick={changeEarthquakeDetails}/>
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

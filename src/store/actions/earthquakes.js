export const LOAD_EARTHQUAKES = 'LOAD_EARTHQUAKES';
export const LOAD_EARTHQUAKES_SUCCESS = 'LOAD_EARTHQUAKES_SUCCESS';
export const LOAD_EARTHQUAKES_FAIL = 'LOAD_EARTHQUAKES_FAIL';

export const loadEarthquakes = () => ({
    type: LOAD_EARTHQUAKES
});

export const loadEarthquakesSuccess = (earthquakes) => ({
    type: LOAD_EARTHQUAKES_SUCCESS,
    payload: {
        earthquakes: earthquakes
    }
});

export const loadEarthquakesFail = () => ({
    type: LOAD_EARTHQUAKES_FAIL
});

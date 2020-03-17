const initialState = {
    earthquakes: [],
    isLoading: false
};

const earthquakesReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOAD_EARTHQUAKES':
            return {
                ...state,
                isLoading: true
            };
        case 'LOAD_EARTHQUAKES_SUCCESS':
            return {
                ...state,
                earthquakes: [...action.payload.earthquakes],
                isLoading: false
            };
        case 'LOAD_EARTHQUAKES_FAIL':
            return {
                ...state,
                isLoading: false
            };
        default:
            return state;
    }
};

export default earthquakesReducer;

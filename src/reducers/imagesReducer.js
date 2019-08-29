import { IMAGES } from '../constants';

const imagesReducer = (state = [], action) => {
    switch (action.type) {
        case IMAGES.LOAD_SUCCESS:
            return [...state, ...action.payload];
        default:
            return state;
    }
};

export default imagesReducer;

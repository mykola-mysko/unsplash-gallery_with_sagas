const KEY = process.env.REACT_APP_UNSPLASH_P_KEY;
const URL = 'https://api.unsplash.com/photos';

export const fetchImages = async page => {
    const response = await fetch(
        `${URL}?client_id=${KEY}&per_page=3&page=${page}`
    );
    const data = await response.json();
    if (response.status >= 400) {
        throw new Error(data.errors);
    }
    return data;
};

export const fetchImagesStats = async id => {
    const response = await fetch(`${URL}/${id}/statistics?client_id=${KEY}`);
    const data = await response.json();
    if (response.status >= 400) {
        throw new Error(data.errors);
    }
    return data;
};

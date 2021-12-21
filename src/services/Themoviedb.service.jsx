//import axios from 'axios'

const url = "https://api.themoviedb.org/3/movie"
const apiKey = "b9f391c5e0ad4375dd9d53cce42d8226"

export const themoviedbService = {
    getPopular
};
/*
function getPopular() {
    const queryString = '?api_key=' + apiKey + "&language=en-US&page=1"
    return axios.get(`${url}/popular${queryString}`)
        .then(res => { console.log(res); return res })
        .catch(err => console.log('Error: ' + err))
};
*/
function getPopular() {
    const queryString = '?api_key=' + apiKey + "&language=en-US&page=1"
    return fetch(`${url}/popular${queryString}`)
        .then((response) => response.json())
        .catch((error) => console.error(error));
}
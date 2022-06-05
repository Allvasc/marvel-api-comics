import axios from 'axios';

const ReverseGeocode = axios.create({
    baseURL: 'https://maps.googleapis.com/maps/api/geocode/',
})

export default ReverseGeocode










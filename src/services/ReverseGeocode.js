import axios from 'axios';

const ReverseGeocode = axios.create({
    baseURL: 'https://maps.googleapis.com/maps/api/geocode/',
    headers:{
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
})

export default ReverseGeocode










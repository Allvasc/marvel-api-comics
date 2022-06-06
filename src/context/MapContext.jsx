import {useEffect, useState, createContext } from 'react'
import { useLoadScript } from '@react-google-maps/api'
import ReverseGeocode from '../services/ReverseGeocode';

export const MapContext = createContext({});

export const MapProvider = ({children}) => {

    const [location, setLocation] = useState(false)
    const [Lat, setLat] = useState(null);
    const [Lng, setLng] = useState(null);

    const [geocodes, setGeocodes] = useState([])

    const apikey = process.env.REACT_APP_API_MAPS_KEY

    useEffect(() => {   
        navigator.geolocation.getCurrentPosition((position) => {
            setLat(position.coords.latitude);
            setLng(position.coords.longitude);
            setLocation(true)
        })
        
        ReverseGeocode
        .get(`json?latlng=${Lat},${Lng}&key=${apikey}`)
        .then(response => { setGeocodes(response.results) })
        .catch(err => console.log('Log erro', err))
    }, [])

    const centro = {
        lat: Lat,
        lng: Lng
    }

console.log(Lat)


    const { isLoaded } = useLoadScript({
        googleMapsApiKey: apikey
    })
//codes

    return (
        <MapContext.Provider value={{centro, isLoaded, Lat, Lng }}>
            {children}
        </MapContext.Provider>
    )
}
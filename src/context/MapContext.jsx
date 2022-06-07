import { useEffect, useState, createContext } from 'react'
import { useLoadScript } from '@react-google-maps/api'

export const MapContext = createContext({});

export const MapProvider = ({ children }) => {

    const [location, setLocation] = useState(false)
    const [Lat, setLat] = useState(null)
    const [Lng, setLng] = useState(null)

    const apikey = process.env.REACT_APP_API_MAPS_KEY

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
            setLat(position.coords.latitude);
            setLng(position.coords.longitude);
            setLocation(true)
        })
    }, [])

    let url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${Lat}, ${Lng}&key=${apikey}`
    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data)
        })
        .catch(err => console.warn(err.message))

    const centro = {
        lat: Lat,
        lng: Lng,
    }

    const { isLoaded } = useLoadScript({
        googleMapsApiKey: apikey
    })
    //codes

    return (
        <MapContext.Provider value={{ centro, isLoaded, Lat, Lng }}>
            {children}
        </MapContext.Provider>
    )
}
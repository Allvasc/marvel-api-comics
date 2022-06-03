import { React, useEffect, useState, createContext } from 'react'
import { useLoadScript } from '@react-google-maps/api'

export const MapContext = createContext({});

export const MapProvider = ({children}) => {

    const [location, setLocation] = useState(false)
    const [Lat, setLat] = useState(null);
    const [Lng, setLng] = useState(null);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
            setLat(position.coords.latitude);
            setLng(position.coords.longitude);
            setLocation(true)
        })
    }, [])

    const centro = {
        lat: Lat,
        lng: Lng
    }

    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.COMIC_APP_API_MAPS_KEY
    })
//codes

    return (
        <MapContext.Provider value={{centro, isLoaded, Lat, Lng }}>
            {children}
        </MapContext.Provider>
    )
}
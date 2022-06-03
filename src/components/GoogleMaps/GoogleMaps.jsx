import { GoogleMap } from '@react-google-maps/api'
import './GoogleMaps.css'
import { MapContext } from '../../context/MapContext'
import { useContext } from 'react'

const GoogleMaps = () => {

    const { isLoaded, Lat, Lng} = useContext(MapContext)  

    if (!isLoaded) {
        return <div>Loading</div>;
    } else {
        return <Map />
    }

    function Map() {
        return <GoogleMap zoom={10} center={{ lat: Lat, lng: Lng }} mapContainerClassName="map-container"></GoogleMap>

    }

}



export default GoogleMaps
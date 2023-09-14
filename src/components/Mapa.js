import { MapContainer, TileLayer, AttributionControl, GeoJSON } from 'react-leaflet'
import data from '../data/datos_toponimos.json';
import cochabamba from '../data/poligono-cb.json';
import MiMarker from './MiMarker'
import MarkerClusterGroup from 'react-leaflet-cluster'
import './Mapa.css';

export default function Mapa() {

    return (

        <MapContainer center={[-17.394, -65.8]} zoom={8} attributionControl={false} className="map-container"
            maxZoom={19}
        >
            <TileLayer
                attribution='Desarrollado por el <a href="https://labtecnosocial.org/">Lab TecnoSocial</a>'
                url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
            />

            <GeoJSON data={cochabamba} />
            <MarkerClusterGroup

                chunkedLoading
                spiderLegPolylineOptions={{ color: '#158AED' }}
                polygonOptions={{ color: '#158AED' }}
            >
                {data.map((item, index) => (
                    <MiMarker key={index} item={item} />
                ))}

            </MarkerClusterGroup>



            <AttributionControl position="bottomright" prefix={false} className="atribucion" />


        </MapContainer>
    )

}


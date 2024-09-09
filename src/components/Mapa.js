import { MapContainer, TileLayer, AttributionControl, GeoJSON } from 'react-leaflet';
import { latLngBounds } from 'leaflet';
import data from '../data/datos_toponimos.json';
import cochabamba from '../data/poligono-cb.json';
import MiMarker from './MiMarker';
import MarkerClusterGroup from 'react-leaflet-cluster';
import './Mapa.css';

export default function Mapa() {
    // Calculate bounds from cochabamba GeoJSON data
    const bounds = latLngBounds(cochabamba.features[0].geometry.coordinates[0].map(coord => [coord[1], coord[0]]));

    return (
        <MapContainer
            center={[-17.394, -65.8]}
            zoom={8}
            attributionControl={false}
            className="map-container"
            maxZoom={18}
            minZoom={8} // Set minZoom to prevent zooming out too far
            maxBounds={bounds} // Set maxBounds to the calculated bounds
            maxBoundsViscosity={1.0} // Prevent zooming out beyond the bounds
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
    );
}
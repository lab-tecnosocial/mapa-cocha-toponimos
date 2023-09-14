import { Marker, Popup } from 'react-leaflet'
import { Icon } from 'leaflet'
import { useState } from 'react';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Captions from "yet-another-react-lightbox/plugins/captions";
import "yet-another-react-lightbox/plugins/captions.css";


const icon = new Icon({
    iconUrl: 'https://labtecnosocial.org/wp-content/uploads/2023/09/marcador-toponimo.png',
    iconSize: [42, 42],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
})

export default function MiMarker({ item }) {

    return (
        <Marker position={item.coord} icon={icon}>
            <Popup>
                <p><b>Nombre actual</b>: {item.nombreActual}</p>
                <p><b>Nombre original</b>: {item.nombreOriginal}</p>
                <p><b>Nombre significado</b>: {item.significado}</p>
                <p><b>Idioma</b>: {item.lengua}</p>
                <p><b>Tipo</b>: {item.tipo}</p>
                {/* <Lightbox
                    styles={{ container: { backgroundColor: "rgba(0, 0, 0, .8)" } }}
                    open={open}
                    close={() => setOpen(false)}

                    slides={[
                        { src: item.imgColUrl, description: '' },
                        { src: item.imgBwUrl, description: '' },
                    ]}
                    plugins={[Captions]}
                    captions={{ descriptionTextAlign: 'center' }}
                /> */}

            </Popup>
        </Marker>
    )
}


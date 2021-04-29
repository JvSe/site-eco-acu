import  React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon } from 'leaflet';
import logoIcon from '../assets/iconMarker.png'

export default function MapLocal() {
    const local = new Icon({
        iconUrl: logoIcon,
        iconSize: [50],
        iconAnchor: [-23, 80],
        popupAnchor: [47, -80],
    });
    const position = [-10.1825328, -48.3389828];
    return(
        <MapContainer center={position} zoom={16} scrollWheelZoom={false} style={{width:'100%', height:'100%', borderRadius:'25px'}} >
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position} icon={local}>
                <Popup>
                    [ADICIONAR UM TEXTO AQUI, CASO QUEIRA]
                </Popup>
            </Marker>
        </MapContainer>
    )
}


/**
 * 
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d293.9893423395656!2d-48.33898281866219!3d-10.182532811269262!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9324cb6acd695c15%3A0xa87b7fe53dfb3878!2sQ.%20103%20Norte%20R%20Pedestre%20No%203%2C%2015%20-%20Arno%2C%20Palmas%20-%20TO%2C%2077001-018!5e0!3m2!1spt-BR!2sbr!4v1618759461522!5m2!1spt-BR!2sbr" style={{width:'100%', height:'100%', border:'0', borderRadius:'55px'}}allowfullscreen="" loading="lazy"></iframe>
 * 
 * 
 */
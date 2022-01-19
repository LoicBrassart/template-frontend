import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import SServiceMap from './style';

export default function ServiceMap() {
  return (
    <SServiceMap>
      <MapContainer center={[50.629, 2.987]} zoom={15} scrollWheelZoom>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[50.629, 2.987]}>
          <Popup>Services</Popup>
        </Marker>
      </MapContainer>
    </SServiceMap>
  );
}

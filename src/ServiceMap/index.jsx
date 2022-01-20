import { MapContainer, TileLayer } from 'react-leaflet';
import LocateUser from '../LocateUser';
import SServiceMap from './style';

export default function ServiceMap() {
  // function handleLocate() {
  //   return setFindUser(!findUser);
  // }

  return (
    <SServiceMap>
      {/* <button type="button" onClick={handleLocate}>
        Se localiser
      </button> */}
      <MapContainer center={[50.629, 2.987]} zoom={15} scrollWheelZoom>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <LocateUser />
      </MapContainer>
    </SServiceMap>
  );
}

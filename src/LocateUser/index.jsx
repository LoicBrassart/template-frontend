import { useEffect, useState } from 'react';
import { Marker, Popup, useMap } from 'react-leaflet';

export default function LocateUser() {
  const [findUser, setFindUser] = useState(null);
  const [position, setPosition] = useState(null);
  const map = useMap();

  useEffect(() => {
    if (findUser) {
      map.locate().on('locationfound', (e) => {
        setPosition(e.latlng);
        map.setView([e.latlng.lat, e.latlng.lng], 14);
      });
      setFindUser(false);
    }
  }, [findUser]);

  return position === null ? null : (
    <Marker position={position}>
      <Popup>Vous êtes ici</Popup>
    </Marker>
  );
}

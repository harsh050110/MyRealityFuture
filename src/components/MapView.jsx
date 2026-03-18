import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

// Fix marker icon issue
const DefaultIcon = L.icon({
  iconUrl: markerIcon,
  iconRetinaUrl: markerIcon2x,
  shadowUrl: markerShadow,
});

L.Marker.prototype.options.icon = DefaultIcon;

export default function MapView({ properties = [], setSelectedLocation }) {
  return (
    <MapContainer
      center={[40.7128, -74.006]}
      zoom={11}
      className="h-full w-full"
    >
      <TileLayer
        attribution="© OpenStreetMap"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {properties.map((home) => (
        <Marker
          key={home.id}
          position={[home.lat, home.lng]}
          eventHandlers={{
            click: () => setSelectedLocation(home),
          }}
        >
          <Popup>
            <div>
              <strong>{home.title}</strong>
              <br />
              {home.price}
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
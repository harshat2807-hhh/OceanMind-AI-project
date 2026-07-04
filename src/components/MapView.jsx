import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

function MapView({ data = [] }) {
  return (
    <div className="rounded-2xl overflow-hidden">
      <MapContainer
        center={[15, 78]}
        zoom={4}
        style={{ height: "500px", width: "100%" }}
      >
        <TileLayer
          attribution='&copy; OpenStreetMap contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {data.map((item, index) => (
          <Marker key={index} position={[item.lat, item.lng]}>
            <Popup>
              <strong>{item.platform}</strong>
              <br />
              Temperature: {item.temp}°C
              <br />
              Salinity: {item.salinity} PSU
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}

export default MapView;
import React from 'react';
import {Map, Marker, Polyline, Popup, TileLayer} from "react-leaflet";

const MapView = ({cities, map}) => {
  const position = [map.lat, map.lng];
  let zoom = 13;
  return (
    <Map center={position} zoom={zoom} animate={true}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        // url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
        url='https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png'
      />
      <Polyline color="lime" positions={map.visitedCities} />
      <Marker position={position}>
        <Popup>
          <span><b>{map.currentCity.name} - {map.currentCity.country}</b><br/> {map.currentCity.lat} - {map.currentCity.lon}</span>
        </Popup>
      </Marker>
    </Map>
  );
};

export default MapView;


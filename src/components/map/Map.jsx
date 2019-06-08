import React from 'react';
import {Map, Marker, Polyline, Popup, TileLayer} from "react-leaflet";
import {findClosestCity} from "../../container/simulation";

const MapView = ({
                   notVisitedCities,
                   map,
                   toggleSimulation,
                   stopSimulation,
                   simulationStarted,
                   startSimulation,
                   simulationState,
                   visitCity
                 }) => {
    if (simulationStarted === true) {
      setTimeout(() => {
        if (notVisitedCities.length === 0) {
          stopSimulation();

          return;
        }

        console.log(simulationState, simulationStarted, notVisitedCities);

        const closestCity = findClosestCity(map.currentCity, notVisitedCities);

        if (!closestCity) {
          stopSimulation();
          return;
        }

        visitCity(closestCity);
      }, 600);
    }

    const position = [map.lat, map.lng];
    let zoom = 12;
    return (
      <div>
        <Map center={position} zoom={zoom} animate={true} style={{height: "100%"}}>
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            // url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
            url='https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png'
          />
          <Polyline color="lime" positions={map.visitedCities}/>
          <Marker position={position}>
            <Popup>
              <span><b>{map.currentCity.name} - {map.currentCity.country}</b><br/> {map.currentCity.lat} - {map.currentCity.lon}</span>
            </Popup>
          </Marker>
        </Map>
        <div className="leaflet-bottom leaflet-right" style={{paddingBottom: '30px', paddingRight: '30px'}}>
          <button className="leafletButton btn" onClick={() => {
            if (simulationStarted) {
              stopSimulation();
            } else {
              startSimulation();
            }
          }}>
            {simulationStarted === false ? <div>Start simulation ></div> : <div>Stop simulation X</div>}
          </button>
        </div>
      </div>
    );
  }
;

export default MapView;


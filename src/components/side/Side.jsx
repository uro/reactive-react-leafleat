import React from 'react';
import CitiesList from "../citiesList/CitiesList";
import FileButton from "../button/FileButton";

const Side = ({cities, importCities, blacklistCities, visitCity}) => {
  function importCity(event) {
    const reader = new FileReader();
    reader.onload = () => importCities(reader.result);
    reader.readAsText(event.target.files[0]);
  }

  function blacklistCity(event) {
    const reader = new FileReader();
    reader.onload = () => blacklistCities(reader.result);
    reader.readAsText(event.target.files[0]);
  }

  return (
    <div className="Side">
      <div>
        <h1>PSM Travel simulator</h1>
        <h2>Arkadiusz Surma</h2>
        {cities.length > 0 && <CitiesList cities={cities} visitCity={visitCity}/>}
      </div>
      <div style={{alignSelf: 'end', marginBottom: '10px'}}>
        {cities.length === 0 &&
        <FileButton name="Import Cities" action={event => importCity(event)}/>
        }
        <FileButton name="Blacklist" action={(event) => blacklistCity(event)}/>
      </div>
    </div>
  );
};

export default Side;
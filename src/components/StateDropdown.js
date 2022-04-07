import React, { Component, useState } from 'react';
import City from './CityDropdown';

function Dropdown(props) {
  const { name, cities } = props;
  const [city, SetCity] = useState(false);

  const handle = (val) => {
    SetCity(val);
  };
  return (
    <ul id="dropdown">
      <p>
        {name} <button onClick={() => handle(!city)}>{'->'}</button>
        {city ? cities.map((val, key) => <City key={key} name={val.name} towns={val.towns} />) : null}
      </p>
    </ul>
  );
}

export default Dropdown;

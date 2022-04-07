import React, { Component, useState } from 'react';
import Dropdown from './StateDropdown';

function NestedDropdown(props) {
  const states = props.states;

  console.log(states);
  return (
    <div id="nesteddropdown">
      <ul id="dropdown">
        {states.map((val, key) => (
          <Dropdown key={key} name={val.name} cities={val.cities} />
        ))}
      </ul>
    </div>
  );
}

export default NestedDropdown;

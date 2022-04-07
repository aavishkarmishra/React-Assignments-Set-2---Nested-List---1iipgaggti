import React, { Component, useState } from 'react';

function City(props) {
  const { name, towns } = props;
  const [town, SetTown] = useState(false);

  const handle = (val) => {
    SetTown(val);
  };
  return (
    <ul>
      <p>
        {name} <button onClick={() => handle(!town)}>{'->>'}</button>
        <ul>{town ? towns.map((val, key) => <li key={key}>{val.name}</li>) : null}</ul>
      </p>
    </ul>
  );
}

export default City;

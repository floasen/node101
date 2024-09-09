import React from 'react';

const Auswertung = ({ richtig, falsch }) => {
  return (
    <div>
      <h2>Auswertung:</h2>
      <p>Richtig: {richtig}</p>
      <p>Falsch: {falsch}</p>
    </div>
  );
}

export default Auswertung;
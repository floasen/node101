import React from 'react';

const FrageAnzeige = ({ frage, antworten }) => {
  return (
    <div>
      <h2>{frage}</h2>
      {antworten.map((antwort, index) => (
        <button key={index}>{antwort}</button>
      ))}
    </div>
  );
}

export default FrageAnzeige;
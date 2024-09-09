// src/pages/SpielAnsicht.jsx

import React from 'react';
import Kategorieauswahl from '../components/Kategorieauswahl';
import FrageAnzeige from '../components/FrageAnzeige';
import Auswertung from '../components/Auswertung';
import Buttons from '../components/Buttons';
import './App.css'

function SpielAnsicht() {
    return (
        <div>
            <h1>Willkommen zum Quiz</h1>
            <Kategorieauswahl />
            <FrageAnzeige />
            <Auswertung />
            <Buttons />
        </div>
    );
}

export default SpielAnsicht;

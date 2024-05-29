import React from 'react';

const Mycomponent = ({ name, anios }) => {
    return (
        <div>
            <h3>Nombre: {name}</h3>
            <p>Años: {anios}</p>
        </div>
    );
};

export default Mycomponent;

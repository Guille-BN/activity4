import React from 'react';
import EquiposForm from '../../components/EquiposForm';

function Home() {
    return (
        <div style={{ textAlign: 'center' }}>
            <h1>Bienvenido a nuestra App</h1>
            <p>Por favor, completa el siguiente formulario para contactarnos:</p>
            <hr />
            <EquiposForm />
        </div>
    );
}

export default Home;
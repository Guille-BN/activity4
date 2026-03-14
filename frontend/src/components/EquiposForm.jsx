import { useState } from 'react';
import { enviarDatosFormulario } from '../services/formService';

const EquiposForm = () => {
    const [formData, setFormData] = useState({
        nombre: '', email: '', telefono: '', asunto: '', mensaje: ''
    });
    const [respuesta, setRespuesta] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await enviarDatosFormulario(formData);
        setRespuesta(res);
    };

    return (
        <div style={{ padding: '20px' }}>
            <h3>Formulario de Contacto</h3>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '300px' }}>
                <input type="text" name="nombre" placeholder="Nombre completo" onChange={handleChange} required />
                <input type="email" name="email" placeholder="Correo electrónico" onChange={handleChange} required />
                <input type="text" name="telefono" placeholder="Teléfono" onChange={handleChange} />
                <input type="text" name="asunto" placeholder="Asunto" onChange={handleChange} />
                <textarea name="mensaje" placeholder="Tu mensaje aquí..." onChange={handleChange}></textarea>
                <button type="submit">Enviar al Backend</button>
            </form>

            {respuesta && (
                <div style={{ marginTop: '20px', padding: '10px', border: '1px solid green' }}>
                    <strong>Respuesta del Backend:</strong>
                    <p>{respuesta}</p>
                </div>
            )}
        </div>
    );
};

export default EquiposForm;
// Manda los datos al API del backend usando JSON, y muestra la respuesta generada por el backend
const API_URL = "http://localhost:8080/api/enviar";

export const enviarDatosFormulario = async (datos) => {
    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(datos)
        });
        // Repuesta del backend
        return await response.text();
    } catch (error) {
        // Al usar 'error' aquí, el mensaje de ESLint desaparece
        console.error("Detalle del error:", error); 
        return "Error al conectar con el backend";
    }
};
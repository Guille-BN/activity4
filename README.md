# Delivery M6 Advanced Web (Francisco)

Este proyecto utiliza Java Spring Boot en el backend para recibir solicitudes HTTP de los envíos del frontend en React, que recopila los datos y los envía al backend mediante un JSON para desplegar en pantalla la respuesta que devuelva el backend.


**Frontend**
- El usuario ingresa información a través de formularios y la envía al backend en un JSON, esperando la respuesta de regreso para desplegarla en pantalla como mensaje de éxito, valida proporcionar la información suficiente para que el backend pueda responder correctamente.

**Backend:**
- Expone un API REST que recibe y procesa las respuestas del usuario en el forms, mandando un mensaje al frontend.

### **Instrucciones para ejecutar:**
- **Frontend:** Para ejecutar el frontend por primera vez es necesario correr, en la carpeta padre que contenga las carpetas [backend](backend) y [frontend](frontend),
```zsh
cd frontend
npm install
npm run dev
```
Todas las siguientes veces, ejecutar:
```zsh
cd frontend
npm run dev
```

- **Backend:** Para ejecutar el backend, en una terminal distinta, correr: 
```zsh 
cd backend
cd demo
./mvnw spring-boot:run
```

Después de ejecutar los comandos correspondientes, entrar en el navegador en http://localhost:5173/ y el proyecto estará corriendo.
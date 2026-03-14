package com.example.demo.services;

import org.springframework.stereotype.Service;

import com.example.demo.controller.FormRequest;

@Service
public class FormService {
    // El service responsable de procesar los datos del forms, regresa un mensaje diciendo que se ha recibido.
    public String procesarFormulario(FormRequest datos) {
        // Mensaje de respuesta al frontend
        return "Servidor dice: ¡Hola " + datos.getNombre() + "! Recibimos tu mensaje sobre '" 
                + datos.getAsunto() + "'. Pronto escribiremos a " + datos.getEmail();
    }
}
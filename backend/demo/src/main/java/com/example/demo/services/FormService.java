package com.example.demo.services;

import org.springframework.stereotype.Service;

import com.example.demo.controller.FormRequest;

@Service
public class FormService {
    public String procesarFormulario(FormRequest datos) {
        // Aquí va la lógica de negocio
        return "Servidor dice: ¡Hola " + datos.getNombre() + "! Recibimos tu mensaje sobre '" 
                + datos.getAsunto() + "'. Pronto escribiremos a " + datos.getEmail();
    }
}
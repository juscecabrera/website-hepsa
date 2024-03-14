import React from "react";
import "../stylesheets/main.css"

function Contact() {
    return(
        <div className="contact-wrapper" id="contactid">
            <h2>
                Contacto
            </h2>
            <div className="contact-textarea-wrapper">
                <textarea placeholder="Nombre"></textarea>
                <textarea placeholder="Apellido"></textarea>
                <textarea placeholder="Empresa"></textarea>
                <textarea placeholder="Correo"></textarea>
                <textarea placeholder="Mensaje"></textarea>
                <button type="submit">Enviar</button>
            </div>
        </div>
    );
};

export default Contact;
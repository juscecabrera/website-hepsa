import React from "react";
import "../stylesheets/main.css"

function Contact() {
    return(
        <div className="contact-wrapper" id="contactid">
            <div className="contact-text-wrapper">
                <h2>Contacto</h2>
                <h3>Teléfono</h3>
                    <p>999999999</p>
                <h3>Correo</h3>
                    <p>ventas@hepsa.com.pe</p>
            </div>
            <div className="contact-input-wrapper">
                <input placeholder="Nombre"></input>
                <input placeholder="Apellido"></input>
                <input placeholder="Empresa"></input>
                <input placeholder="Correo"></input>
                <input placeholder="Mensaje"></input>
                <button type="submit">Enviar</button>
            </div>
        </div>
    );
};

export default Contact;
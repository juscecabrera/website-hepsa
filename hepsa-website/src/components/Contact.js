import React from "react";
import "../stylesheets/main.css"

function Contact() {
    return(
        <div className="contact-wrapper" id="contactid">
            <div className="contact-text-wrapper">
                <h2>Contacto</h2>
                <h3 className="contact-h3-1">Teléfono</h3>
                    <p className="contact-p-1">999999999</p>
                <h3 className="contact-h3-2">Correo</h3>
                    <p className="contact-p-2">ventas@hepsa.com.pe</p>
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
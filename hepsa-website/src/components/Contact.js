import React from "react";
import "../stylesheets/main.css";
import emailjs from 'emailjs-com';

function Contact() {

    function enviarEmail(e){
        e.preventDefault();

        emailjs.sendForm('service_jtslv0e','template_ccgkrvp',e.target,'LoSfAa6xorBEmhRCM').then(res=>{
            console.log(res);
            alert("Mensaje enviado correctamente!")
        })        
    }

    return(
        <div className="contact-wrapper" id="contactid">
            <div className="contact-text-wrapper">
                <h2>CONTACTO</h2>
                <h3 className="contact-h3-1">990 291 981</h3>
                    {/* <p className="contact-p-1">990 291 981</p> */}
                <h3 className="contact-h3-2">ventas@hepsa.com.pe</h3>
                    {/* <p className="contact-p-2">ventas@hepsa.com.pe</p> */}
            </div>
            <form onSubmit={enviarEmail} className="contact-input-wrapper">
                <input type="text" name="nombre" id="nombre" placeholder="Nombre"></input>
                <input type="text" name="apellido" id="apellido" placeholder="Apellido"></input>
                <input type="text" name="empresa" id="empresa" placeholder="Empresa"></input>
                <input type="text" name="correo" id="correo" placeholder="Correo"></input>
                <textarea type="text" name="mensaje" placeholder="Mensaje" id="mensaje"></textarea>
                <button type="submit">Enviar correo</button>
            </form>
        </div>
    );
};

export default Contact;
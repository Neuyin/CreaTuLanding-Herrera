import React, { useState } from 'react'

const Contact = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [mensaje, setMensaje] = useState('')

  return (
    <div className="contact-container"> 
    <h4>Para dudas o consultas podés dejarnos un mensaje y te responderemos a la brevedad</h4>
      <form className="contact-form">
      <div className="form-group">
        <h3>Nombre: {name}</h3> <input type="text" onChange={(event) => setName(event.target.value)}/>
        <h3>Email: {email}</h3> <input type="email" onChange={(event) => setEmail(event.target.value)}/>
        <h3>Telefono: {phone}</h3> <input type="number" onChange={(event) => setPhone(event.target.value)}/>
        <h3>Mensaje: </h3> <textarea value={mensaje} onChange={(event) => setMensaje(event.target.value)} />
        <button type="submit" className="button-contact">Enviar</button>
        </div>
      </form>
    </div>
    )
}

export default Contact
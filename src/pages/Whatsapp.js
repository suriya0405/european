import React from 'react'
import whatsapp from '../img/whatsapp.png'

export const Whatsapp = () => {
  const whatsappNumber = "919962705000"; // Singapore number example
  return (
    <div>
        <a
      href={`https://wa.me/${whatsappNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-link"
    >
      <img src={whatsapp} alt="WhatsApp" style={{ width: '35px', height: '35px' }} />
    </a>
    </div>
  )
}

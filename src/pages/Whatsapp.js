import React from 'react'
import whatsapp from '../img/whatsapp.png'

export const Whatsapp = () => {
  const whatsappNumber = "919962705000"; // Singapore number example
  return (
    <div>
        <a
<<<<<<< HEAD
      href={`https://web.whatsapp.com/send?phone=${whatsappNumber}&text=Hello!`}
=======
      href={`https://wa.me/${whatsappNumber}`}
>>>>>>> 0ffd255e26c3287438be32ec5aa80a67b62a2f02
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-link"
    >
      <img src={whatsapp} alt="WhatsApp" style={{ width: '35px', height: '35px' }} />
    </a>
    </div>
  )
}
<<<<<<< HEAD


=======
>>>>>>> 0ffd255e26c3287438be32ec5aa80a67b62a2f02

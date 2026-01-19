import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook,faGoogle,faLinkedin, faXTwitter } from "@fortawesome/free-brands-svg-icons";

const Options = () => {
  return (
    <div className='flex gap-6 justify-center items-center'>
        <FontAwesomeIcon icon={faFacebook} className="text-blue-700 text-3xl cursor-pointer hover:scale-110 transition " />
        <FontAwesomeIcon icon={faGoogle}
            className="text-red-700 text-3xl cursor-pointer hover:scale-110 transition"
        />
        <FontAwesomeIcon
        icon={faLinkedin}
        className="text-blue-700 text-3xl cursor-pointer hover:scale-110 transition"
        />
        <FontAwesomeIcon
        icon={faXTwitter}
        className="text-black text-3xl cursor-pointer hover:scale-110 transition"
        />

    </div>
  )
}

export default Options
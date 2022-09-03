import React from "react";
import "./styles.css"


const Header = () => {
  return (
    <div className="header">
      <ul className="menu">
        <li className="facebook"><a href="https://www.facebook.com/charley.kllisman"><img src="facebook.png" alt="facebook"/></a></li>
        <li className="instagram"><a href="https://instagram.com/gelattosorveteria2022?igshid=YmMyMTA2M2Y="><img src="instagram.png" alt="instagram" /></a></li>
        <li className="whatsapp">
        <a className="whats-link" href="https://web.whatsapp.com/send?phone=557799267685" target="_blank"><img src="whatsapp.png" alt="whatsapp"/></a>
        </li>
      </ul>
    </div>
  )
}

export default Header
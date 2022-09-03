import React from "react";
import "./styles.css"

const Cards = () => {
  return (
   <> 
    <div className="row">
    <div className="card green">
    <h2>Confira Nossos maravilhosos doces !!</h2>
      <img className="image" src="card1.jpeg" alt="money" />
    </div>

    <div className="card blue">
      <h2>Deliciosos sorvetes para você saborear !</h2>
      <img className="image" src="card2.jpeg" alt="settings" />
    </div>

    <div className="card red">
      <h2>Temos variados tipos de adicionais de frutas !!</h2>
      <img className="image" src="card3.jpeg" alt="article" />
    </div>
  </div>  <div className="row">
    <div className="card green">
    <h2>O que acha dessa tigelinha de delícias, desse  kiwizinho maroto !?</h2>
      <img className="image" src="acai2.jpeg" alt="money" />
    </div>

    <div className="card blue">
      <h2>Também servimos um copão de açaí !!</h2>
      <img className="image-acai4" src="acai4.jpeg" alt="settings" />
    </div>

    <div className="card red">
      <h2>Escolha a sua saborosa sobremesa do seu jeito!</h2>
      <img className="image" src="acai3.jpeg" alt="article" />
    </div>
  </div>
  </>
  )
}
export default Cards
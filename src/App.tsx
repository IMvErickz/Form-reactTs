import { useState } from 'react'
import Logo from './assets/cadastre-se.png'
import './App.css'

function NavBar() {
  

  return (
    <header>
       <nav id='nav'>
    <div className="nav-wrapper">
      <a href="#" className="brand-logo"><img id='logo' src={Logo} alt="" /></a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
      </ul>
    </div>
  </nav>
    </header>
  )
}

function App() {

  function save() {

    const person = {
      //Nome: document.getElementById("first_name2").value,
      //Sobrenome: document.getElementById("first_name").value 
    }

    localStorage.setItem("Pessoa", JSON.stringify(person))
    //let rec = JSON.parse(localStorage.getItem("Pessoa"))

    window.location.href = "/pages/form.html"
  }


  return (
    <body>
      <div id='principal'>
    <fieldset id='camp'>
       <div className="row">
        <div className="input-field col s6">
          <input id="first_name2" type="text" className="validate" />
          <label className="active" htmlFor="first_name2">Nome</label>
        </div>
      </div>
      
      <div className="row">
        <div className="input-field col s6">
          <input id="first_name" type="text" className="validate" />
          <label className="active" htmlFor="first_name2">Sobrenome</label>
        </div>
          </div>
    </fieldset>
          <div>
        <a className="waves-effect waves-light btn" onClick={save}>Enviar</a>
        </div>
      </div>  
    </body>
  )
}

export default {App, NavBar}

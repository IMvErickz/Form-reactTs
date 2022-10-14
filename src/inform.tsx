import { useState } from 'react'
import './assets/inform.css'
import Logo from './assets/cadastre-se.png'


function App() {
    return (
        <header>
            <nav>
              <div className="nav-wrapper">
                <a href="#" className="brand-logo center"><img id='logo' src={Logo} alt="" /></a>
                <ul id="nav-mobile" className="left hide-on-med-and-down">
                  <li><a href="/index.html">Formulário</a></li>
                </ul>
              </div>
            </nav>
        </header>
    )
}

function bod() {

    function show(){
        //let rec = JSON.parse(localStorage.getItem("Pessoa"))
        let spanName = document.getElementById('name')
        let spanLast = document.getElementById('lastName')
        //spanName.innerHTML = rec.Nome
        //spanLast.innerHTML = rec.Sobrenome


    }

    

    return (
        <body>
        <a className="waves-effect waves-light btn" onClick={show}>Mostrar informações</a>

            <fieldset>
                <div>
                    <ul>
                        <li>
                            <span id='name'></span>
                        </li>
                        <li>
                            <span id='lastName'></span>

                        </li>
                    </ul>
                </div>
            </fieldset>
        </body>
    )
}

export default {App, bod}
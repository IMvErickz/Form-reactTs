import { useState } from 'react'

function App() {
    return (
        <header>
            <nav>
              <div className="nav-wrapper">
                <a href="#" className="brand-logo center">Logo</a>
                <ul id="nav-mobile" className="left hide-on-med-and-down">
                  <li><a href="/index.html">Formulário</a></li>
                </ul>
              </div>
            </nav>
        </header>
    )
}

function bod() {
    return (
        <body>
            <fieldset>
                <div>
                    <span id='name'></span>
                    <span id='lastName'></span>
                </div>
            </fieldset>
        </body>
    )
}

export default {App, bod}
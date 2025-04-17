'use strict';

import './styles.css';

import logo from '/src/assets/images/logo.png';

// const navbarModal = function () {
const /* {HTMLElement} */ navbarModal = document.createElement('div');
navbarModal.innerHTML = `
    <div class="navbar-header">
        <div class="leyenda-header">
            <div class="navbar-logo">
                <a href="/"><img class="navbar-logo-img" src="/src/assets/images/logo.png"
                        alt="Reserva de Aculeo" /></a>
            </div>
            <div>
                <span>Unidad Vecinal</span>
                <span>Reserva de Aculeo</span>
            </div>
            </div>
        <div>
      <nav class="navbar-navbar">
        <a href="#" style="--i: 0" data-inicio-btn>Inicio</a>
        <a href="#" style="--i: 1" data-quienes-somos-btn>Quienes Somos</a>
        <a href="#" style="--i: 2" data-contacto-btn>Contacto</a>
        <a href="#" style="--i: 3" data-login-btn>Login</a>
      </nav>
      </div>

      <label for="navbar-check" class="navbar-icons">
        <i class="uil uil-bars" id="navbar-menu-icon"></i>
        <i class="uil uil-times" id="navbar-close-icon"></i>
      </label>
      <input type="checkbox" id="navbar-check" />
    </div>
`;

export { navbarModal };

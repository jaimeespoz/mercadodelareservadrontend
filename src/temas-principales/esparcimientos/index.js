'use strict';

// import '../../globalstyles.css';
import './esparcimientos.css';

const /* {HTMLElement} */ esparcimientosPage = document.createElement('div');
esparcimientosPage.classList.add('temas-esparcimientos');
esparcimientosPage.innerHTML = `
    <div class="temas-esparcimientos-circle">
        <span class="temas-esparcimientos-titulo">Esparcimiento</span>
    </div>
`;

export { esparcimientosPage };

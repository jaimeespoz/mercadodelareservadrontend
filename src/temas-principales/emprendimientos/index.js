'use strict';

// import '../../globalstyles.css';
import './emprendimientos.css';

const /* {HTMLElement} */ emprendimientosPage = document.createElement('div');
emprendimientosPage.classList.add('temas-emprendimientos');
emprendimientosPage.innerHTML = `
    <div class="temas-emprendimientos-circle">
        <span class="temas-emprendimientos-titulo">Emprendimientos</span>
    </div>
`;

export { emprendimientosPage };

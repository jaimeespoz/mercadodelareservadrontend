'use strict';

// import '../../globalstyles.css';
import './propiedades.css';

const /* {HTMLElement} */ propiedadesPage = document.createElement('div');
propiedadesPage.classList.add('temas-propiedades');
propiedadesPage.innerHTML = `
    <div class="temas-propiedades-circle">
        <span class="temas-propiedades-titulo">Propiedades</span>
    </div>
`;

export { propiedadesPage };

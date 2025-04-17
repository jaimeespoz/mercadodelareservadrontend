'use strict';

// import '../../globalstyles.css';
import './gastronomia.css';

const /* {HTMLElement} */ gastronomiaPage = document.createElement('div');
gastronomiaPage.classList.add('temas-gastronomia');
gastronomiaPage.innerHTML = `
    <div class="temas-gastronomia-circle">
        <span class="temas-gastronomia-titulo">Gastronomia</span>
    </div>
`;

export { gastronomiaPage };

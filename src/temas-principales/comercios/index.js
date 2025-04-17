'use strict';

// import '../../globalstyles.css';
import './comercios.css';

const /* {HTMLElement} */ comerciosPage = document.createElement('div');
comerciosPage.classList.add('temas-comercios');
comerciosPage.innerHTML = `
    <div class="temas-comercios-circle">
        <span class="temas-comercios-titulo">Comercios</span>
    </div>
`;

export { comerciosPage };

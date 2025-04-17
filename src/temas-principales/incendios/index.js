'use strict';

// import '../../globalstyles.css';
import './incendios.css';

const /* {HTMLElement} */ incendiosPage = document.createElement('div');
incendiosPage.classList.add('temas-incendios');
incendiosPage.innerHTML = `
    <div class="temas-incendios-circle">
        <span class="temas-incendios-titulo">Incendios</span>
    </div>
`;

export { incendiosPage };

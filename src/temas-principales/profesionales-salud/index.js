'use strict';

// import '../../globalstyles.css';
import './profesionales-salud.css';

const /* {HTMLElement} */ profesionalesSaludPage =
        document.createElement('div');
profesionalesSaludPage.classList.add('temas-profesionales-salud');
profesionalesSaludPage.innerHTML = `
    <div class="temas-profesionales-salud-circle">
        <span class="temas-profesionales-salud-titulo">Profesionales de la Salud</span>
    </div>
`;

export { profesionalesSaludPage };

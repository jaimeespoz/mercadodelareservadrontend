'use strict';

// import '../../globalstyles.css';
import './servicios-publicos.css';

const /* {HTMLElement} */ serviciosPublicosPage = document.createElement('div');
serviciosPublicosPage.classList.add('temas-servicios-publicos');
serviciosPublicosPage.innerHTML = `
    <div class="temas-servicios-publicos-circle">
        <span class="temas-servicios-publicos-titulo">Servicos Publicos</span>
    </div>
`;

export { serviciosPublicosPage };

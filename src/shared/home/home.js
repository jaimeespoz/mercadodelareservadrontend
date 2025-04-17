'use strict';

// import '../../globalstyles.css';
import './home.css';

// import Foto01 from '../../assets/images/11.jpg';

const /* {HTMLElement} */ homeModal = document.createElement('div');
homeModal.classList.add('home-hero-section');
homeModal.innerHTML = `
    <div class="wrapper-mision">
        <div class="frame-mision">
    <div>
      <h2 class="text-headline-large">Sitio abierto</h2>
      <h2 class="text-headline-large">a toda la Comunidad</h2>
      <h2 class="text-headline-large">de Aculeo</h2>
      
      </div>
      <div>
      <p class="text-title-medium mt-4 mb-2">
        Con informacion util de uso frecuente para todos los vecinos.</p>  
       <p class="text-title-medium mt-4 mb-2">Dando expecial cabida a todos los Emprendedores del sector.
      </p>
      </div>
      <div>
      <h3 class="mt-5 mb-6">Gratuito por TODO el año 2025</h3>
      </div>
      <div>
      <button type="button" class="text-body-medium mt-10" data-continuar-btn>Continuar...</button>
    </div>
      </div>
    </div>
`;

export { homeModal };

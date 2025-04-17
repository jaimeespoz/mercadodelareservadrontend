'use strict';

// import '../../globalstyles.css';
import './venta-garage.css';

const /* {HTMLElement} */ ventaGaragePage = document.createElement('div');
ventaGaragePage.classList.add('temas-venta-garage');
ventaGaragePage.innerHTML = `
    <div class="temas-venta-garage-circle">
        <span class="temas-venta-garage-titulo">Ventas de Garage</span>
    </div>
`;

export { ventaGaragePage };

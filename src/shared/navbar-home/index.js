'use strict';

// import '../../globalstyles.css';
import './navbar-home.css';

const /* {HTMLElement} */ navBarHomeModal = document.createElement('div');
navBarHomeModal.classList.add('navbar-home');
navBarHomeModal.innerHTML = `
    <div class="home-logo">
        <span>Mercado de la</span>
        <span>Reserva</span>
    </div>
    <div>
        <ul class="home-menu">
            <li class="home-menu-links" data-navbar-inicio-btn><span class="text-title-medium">Inicio</span></li>
            <li class="home-menu-links" data-navbar-servicios-btn><span class="text-title-medium">Servicios</span></li>
            <li class="home-menu-links" data-navbar-acerca-btn><span class="text-title-medium">Acerca de</span></li>
            <li class="home-menu-links" data-navbar-contacto-btn><span class="text-title-medium">Contacto</span></li>
        </ul>
    </div>
`;

const /** {<HTMLElement} */ $inicioBtn = navBarHomeModal.querySelector(
        '[data-navbar-inicio-btn]'
    );

$inicioBtn.addEventListener('click', function () {
    import('/src/shared/enconstruccion/index.js').then(
        ({ enConstruccionModal }) => {
            const /** {Object} */ modal = enConstruccionModal();
            modal.open();
        }
    );
});

const /** {<HTMLElement} */ $serviciosBtn = navBarHomeModal.querySelector(
        '[data-navbar-servicios-btn]'
    );

$serviciosBtn.addEventListener('click', function () {
    import('/src/shared/enconstruccion/index.js').then(
        ({ enConstruccionModal }) => {
            const /** {Object} */ modal = enConstruccionModal();
            modal.open();
        }
    );
});

const /** {<HTMLElement} */ $acercaBtn = navBarHomeModal.querySelector(
        '[data-navbar-acerca-btn]'
    );

$acercaBtn.addEventListener('click', function () {
    import('/src/shared/enconstruccion/index.js').then(
        ({ enConstruccionModal }) => {
            const /** {Object} */ modal = enConstruccionModal();
            modal.open();
        }
    );
});

const /** {<HTMLElement} */ $contactoBtn = navBarHomeModal.querySelector(
        '[data-navbar-contacto-btn]'
    );

$contactoBtn.addEventListener('click', function () {
    import('/src/shared/enconstruccion/index.js').then(
        ({ enConstruccionModal }) => {
            const /** {Object} */ modal = enConstruccionModal();
            modal.open();
        }
    );
});

export { navBarHomeModal };

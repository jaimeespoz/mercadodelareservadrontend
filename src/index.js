'use strict';

import './globalstyles.css';

import { Tooltip } from './util/Tooltip';
// import { addEventOnElement, addEventOnElements } from './util/util';
import { homeModal } from './shared/home/home';
import { navBarHomeModal } from './shared/navbar-home';
import { carrouselhomeModal } from './shared/carrousel-home';

import '/src/util/theme.js';

const body = document.body;
body.innerHTML = '';
body.appendChild(homeModal);
body.appendChild(navBarHomeModal);

/**
 * Initialize tooltip behavior for all DOM elements with 'data-tooltip' attribute
 */
const /* {Array<HTMLElement>} */ $tooltipElems =
        document.querySelectorAll('[data-tooltip]');
$tooltipElems.forEach(($elem) => Tooltip($elem));

/** Navbar */

const /** {<HTMLElement} */ $continuarBtn = document.querySelector(
        '[data-continuar-btn]'
    );

$continuarBtn.addEventListener('click', function () {
    const body = document.body;
    body.innerHTML = '';
    body.append(carrouselhomeModal);
    //     console.log('continuar');
});

// const /** {<HTMLElement} */ $vermas01Btn = document.querySelector(
//         '[data-vermas-01-btn]'
//     );

// $vermas01Btn.addEventListener('click', function () {
//     import('/src/shared/enconstruccion/index.js').then(
//         ({ enConstruccionModal }) => {
//             const /** {Object} */ modal = enConstruccionModal();
//             modal.open();
//         }
//     );
// });

// const /** {<HTMLElement} */ $contactoBtn = document.querySelector(
//         '[data-contacto-btn]'
//     );
// const /** {<HTMLElement} */ $loginBtn =
//         document.querySelector('[data-login-btn]');

/** Footer */

// const /** {Array<HTMLElement>} */ $dataopcion =
//         document.querySelectorAll('[data-opcion-xx]');

// addEventOnElements($dataopcion, 'click', function () {
//     import('/src/shared/enconstruccion/index.js').then(
//         ({ enConstruccionModal }) => {
//             const /** {Object} */ modal = enConstruccionModal();
//             modal.open();
//         }
//     );
// });

function add(a, b) {
    return a + b;
}

module.exports = { add };

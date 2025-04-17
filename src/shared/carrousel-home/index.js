'use strict';

import '../../globalstyles.css';
import './carrousel-home.css';

import { enConstruccionModal } from '../enconstruccion';
import { comerciosPage } from '../../temas-principales/comercios';
import { emprendimientosPage } from '../../temas-principales/emprendimientos';
import { esparcimientosPage } from '../../temas-principales/esparcimientos';
import { gastronomiaPage } from '../../temas-principales/gastronomia';
import { incendiosPage } from '../../temas-principales/incendios';
import { profesionalesSaludPage } from '../../temas-principales/profesionales-salud';
import { propiedadesPage } from '../../temas-principales/propiedades';
import { serviciosPublicosPage } from '../../temas-principales/servicios-publicos';
import { ventaGaragePage } from '../../temas-principales/venta-garage';

const /* {HTMLElement} */ carrouselhomeModal = document.createElement('div');
carrouselhomeModal.innerHTML = `
    <div class="carousel">
        <div class="list">

            <div class="item">
                <img src="./images/incendios-3.jpg">
                <div class="content">
                    <div class="border">
                        <span class="title">INCENDIOS FORESTALES</span>
                        <span class="topic">Numeros de Emergencia</span>
                        <div>
                            <span class="des">
                                Encuentre aca Grupos de WhatsApp, para tener a la Comunidad informada y coordinada.
                            </span>
                            <ul>
                                <li>
                                    <span class="des">
                                        - SN Altos de Cantillana - Comunidad Contra el Fuego
                                    </span>
                                </li>
                                <li>
                                    <span class="des">
                                        AculeoenAlerta
                                    </span>
                                </li>
                                <li>
                                    <span class="des">
                                        Si falta tu Grupo, otro Grupo, avisanos.
                                    </span>
                                </li>
                            </ul>
                        </div>
                        <button type="button" class="fab" data-vermas-incendios-btn>
                            <span>Ver Mas</span>
                        </button>
                    </div>
                </div>
            </div>
            <div class="item">
                <img src="./images/emprendimientos-2.jpg">
                <div class="content">
                    <div class="border">
                        <span class="title">EMPRENDIMIENTOS</span>
                        <span class="topic">Bienes y Servicios</span>
                        <div>
                            <ul>
                                <li>
                                    <span class="des">Conoce a gente de nuestro Sector que te puede proveer tanto de
                                        bienes y servicios.</span>
                                </li>
                                <li>
                                    <span class="des">Lograremos un beneficio MUTUO al apoyar a personas de nuestra
                                        Comunidad.</span>
                                </li>
                                <li>
                                    <span class="des">Envianos tus datos y el detalle de tu emprendimiento, para
                                        incluirte,
                                        en forma absolutamente gratuita por todo este año.</span>
                                </li>
                            </ul>
                        </div>
                        <button type="button" class="fab" data-vermas-emprendimientos-btn>
                            <span>Ver Mas</span>
                        </button>
                    </div>
                </div>
            </div>
            <div class="item">
                <img src="./images/servicios-publicos.png">
                <div class="content">
                    <div class="border">
                        <span class="title">SERVICIOS PUBLICOS</span>
                        <span class="topic">Locomocion, empresas de servicios publicos</span>
                        <span class="topic">Consultorios, Farmacias, Venta de Gas</span>
                        <div>
                            <ul>
                                <li>
                                    <span class="des">Encuentra con nosotros la informacion que puedes necesitar para
                                        movilizarte, pedir ayuda ante siniestros o temas de seguridad.</span>
                                </li>
                            </ul>
                        </div>
                        <button type="button" class="fab" data-vermas-servicios-publicos-btn>
                            <span>Ver Mas</span>
                        </button>
                    </div>
                </div>
            </div>
            <div class="item">
                <img src="./images/comercios-2.jpg">
                <div class="content">
                    <div class="border">
                        <span class="title">COMERCIOS</span>
                        <span class="topic">Alimentos, Bazares, Combustible, Leña, Verdulerias, Menaje</span>
                        <span class="des">
                            Conoce las diferentes alternativas que disponemos como Comunidad, para
                            satisafacer tu necesidades diarias.</span>
                        <span class="des">
                            Enterate de la ubicacion, de su horarios y la forma de contactarte con ellos, ante consultas
                            variadas.
                        </span>
                        <button type="button" class="fab" data-vermas-comercios-btn>
                            <span>Ver Mas</span>
                        </button>
                    </div>
                </div>
            </div>
            <div class="item">
                <img src="./images/salud-1.jpg">
                <div class="content">
                    <div class="border">
                        <span class="title">PROFESIONALES DE LA SALUD</span>
                        <span class="topic">Medicos, Odontologas, Centros Medicos, Practicantes, Veterinarias, Medicina
                            Alternativa</span>
                        <span class="des">
                            Conoce las diferentes alternativas que disponemos como Comunidad, para tu Salud</span>
                        <span class="des">
                            Enterate de la ubicacion, de su horarios y la forma de contactarte con ellos.
                        </span>
                        <button type="button" class="fab" data-vermas-profesionales-salud-btn>
                            <span>Ver Mas</span>
                        </button>
                    </div>
                </div>
            </div>
            <div class="item">
                <img src="./images/venta-garage.jpg">
                <div class="content">
                    <div class="border">
                        <span class="title">VENTA DE GARAGE</span>
                        <span class="topic">Herramientas, Maquinarias, Muebles, Electromesticos</span>
                        <span class="des">
                            Usamos este termino que todos lo entienden.</span>
                        <span class="des">
                            Vende o Permuta cosas que ya no usas.
                        </span>
                        <button type="button" class="fab" data-vermas-venta-garage-btn>
                            <span>Ver Mas</span>
                        </button>
                    </div>
                </div>
            </div>
            <div class="item">
                <img src="./images/propiedades.jpg">
                <div class="content">
                    <div class="border">
                        <span class="title">PROPIEDADES</span>
                        <span class="topic">Busca - Ofrece tu propiedad</span>
                        <span class="des">
                            Contacta a los potenciales interesados</span>
                        <span class="des">
                            Busca las que te acomoden a tus necesidades.
                        </span>
                        <button type="button" class="fab" data-vermas-propiedades-btn>
                            <span>Ver Mas</span>
                        </button>
                    </div>
                </div>
            </div>
            <div class="item">
                <img src="./images/esparcimiento.jpg">
                <div class="content">
                    <div class="border">
                        <span class="title">ESPARCIMIENTO</span>
                        <span class="topic">Parques, Cafeterias, Restoranes, Juegos Infantiles</span>
                        <span class="des">
                            Accesos a Laguna, Camping</span>
                        <button type="button" class="fab" data-vermas-esparcimientos-btn>
                            <span>Ver Mas</span>
                        </button>
                    </div>
                </div>
            </div>
            <div class="item">
                <img src="./images/gastronomia-1.jpeg">
                <div class="content">
                    <div class="border">
                        <span class="title">GASTRONOMIA</span>
                        <span class="topic">Cafeterias, Restoranes, Puestos de Comida Preparada, Botillerias, Comida a
                            Domicilio</span>
                        <span class="des">
                            Disfruta de las diferentes alternativas gastronomicas de nuestro Sector</span>
                        <button type="button" class="fab" data-vermas-gastronomia-btn>
                            <span>Ver Mas</span>
                        </button>
                    </div>
                </div>
            </div>

        </div>

        <div class="thumbnail">
            <div class="item" data-thumbnail-incendios-btn>
                <img src="./images/incendios-2.jpg">
                <div class="content">
                    <div class="title" data-vermas-btn>
                        Incendios Forestales
                    </div>
                </div>
            </div>
            <div class="item" data-thumbnail-emprendimientos-btn>
                <img src="./images/emprendimientos.jpg">
                <div class="content">
                    <div class="title">
                        Emprendimientos
                    </div>
                </div>
            </div>
            <div class="item" data-thumbnail-servicios-publicos-btn>
                <img src="./images/servicios-publicos.png">
                <div class="content">
                    <div class="title">
                        Servicios Publicos
                    </div>
                </div>
            </div>
            <div class="item" data-thumbnail-comercios-btn>
                <img src="./images/comercios.png">
                <div class="content">
                    <div class="title">
                        Comercios Locales
                    </div>
                </div>
            </div>
            <div class="item" data-thumbnail-profesionales-salud-btn>
                <img src="./images/salud-2.jpeg">
                <div class="content">
                    <div class="title">
                        Profesionales Salud
                    </div>
                </div>
            </div>
            <div class="item" data-thumbnail-venta-garage-btn>
                <img src="./images/venta-garage-2.jpg">
                <div class="content">
                    <div class="title">
                        Ventas de Garaje
                    </div>
                </div>
            </div>
            <div class="item" data-thumbnail-propiedades-btn>
                <img src="./images/propiedades-2.jpg">
                <div class="content">
                    <div class="title">
                        Propiedades
                    </div>
                </div>
            </div>
            <div class="item" data-thumbnail-esparcimiento-btn>
                <img src="./images/esparcimiento-2.jpg">
                <div class="content">
                    <div class="title">
                        Esparcimiento
                    </div>
                </div>
            </div>
            <div class="item" data-thumbnail-gastronomia-btn>
                <img src="./images/gastronomia-2.jpg">
                <div class="content">
                    <div class="title">
                        Gastronomia
                    </div>
                </div>
            </div>

        </div>

        <div class="arrows">
            <button id="prev" data-prev-btn></button>
            <button id="next" data-next-btn></button>
        </div>
        <div class="time"></div>
    </div>
`;

/** */
const /** {<HTMLElement} */ $paginaIncendiosBtn =
        carrouselhomeModal.querySelector('[data-vermas-incendios-btn]');

$paginaIncendiosBtn.addEventListener('click', function () {
    const body = document.body;
    body.innerHTML = '';
    body.append(incendiosPage);

    const /** {Object} */ modal = enConstruccionModal();
    modal.open();
});

const /** {<HTMLElement} */ $paginaEmprendimientosBtn =
        carrouselhomeModal.querySelector('[data-vermas-emprendimientos-btn]');

$paginaEmprendimientosBtn.addEventListener('click', function () {
    const body = document.body;
    body.innerHTML = '';
    body.append(emprendimientosPage);

    const /** {Object} */ modal = enConstruccionModal();
    modal.open();
});

const /** {<HTMLElement} */ $paginaServiciosPublicosBtn =
        carrouselhomeModal.querySelector(
            '[data-vermas-servicios-publicos-btn]'
        );

$paginaServiciosPublicosBtn.addEventListener('click', function () {
    const body = document.body;
    body.innerHTML = '';
    body.append(serviciosPublicosPage);

    const /** {Object} */ modal = enConstruccionModal();
    modal.open();
});

const /** {<HTMLElement} */ $paginaComerciosBtn =
        carrouselhomeModal.querySelector('[data-vermas-comercios-btn]');

$paginaComerciosBtn.addEventListener('click', function () {
    const body = document.body;
    body.innerHTML = '';
    body.append(comerciosPage);

    const /** {Object} */ modal = enConstruccionModal();
    modal.open();
});

const /** {<HTMLElement} */ $paginaProfesionalesSaludBtn =
        carrouselhomeModal.querySelector(
            '[data-vermas-profesionales-salud-btn]'
        );

$paginaProfesionalesSaludBtn.addEventListener('click', function () {
    const body = document.body;
    body.innerHTML = '';
    body.append(profesionalesSaludPage);

    const /** {Object} */ modal = enConstruccionModal();
    modal.open();
});

const /** {<HTMLElement} */ $paginaVentaGarageBtn =
        carrouselhomeModal.querySelector('[data-vermas-venta-garage-btn]');

$paginaVentaGarageBtn.addEventListener('click', function () {
    const body = document.body;
    body.innerHTML = '';
    body.append(ventaGaragePage);

    const /** {Object} */ modal = enConstruccionModal();
    modal.open();
});

const /** {<HTMLElement} */ $paginaPropiedadesBtn =
        carrouselhomeModal.querySelector('[data-vermas-propiedades-btn]');

$paginaPropiedadesBtn.addEventListener('click', function () {
    const body = document.body;
    body.innerHTML = '';
    body.append(propiedadesPage);

    const /** {Object} */ modal = enConstruccionModal();
    modal.open();
});

const /** {<HTMLElement} */ $paginaEsparcimientosBtn =
        carrouselhomeModal.querySelector('[data-vermas-esparcimientos-btn]');

$paginaEsparcimientosBtn.addEventListener('click', function () {
    const body = document.body;
    body.innerHTML = '';
    body.append(esparcimientosPage);

    const /** {Object} */ modal = enConstruccionModal();
    modal.open();
});

const /** {<HTMLElement} */ $paginaGastronomiaBtn =
        carrouselhomeModal.querySelector('[data-vermas-gastronomia-btn]');

$paginaGastronomiaBtn.addEventListener('click', function () {
    const body = document.body;
    body.innerHTML = '';
    body.append(gastronomiaPage);

    const /** {Object} */ modal = enConstruccionModal();
    modal.open();
});

const /** {<HTMLElement} */ $thumbnailIncendiosBtn =
        carrouselhomeModal.querySelector('[data-thumbnail-incendios-btn]');

$thumbnailIncendiosBtn.addEventListener('click', function () {
    const body = document.body;
    body.innerHTML = '';
    body.append(incendiosPage);

    const /** {Object} */ modal = enConstruccionModal();
    modal.open();
});
/** */
const /** {<HTMLElement} */ $thumbnailEmprendimientosBtn =
        carrouselhomeModal.querySelector(
            '[data-thumbnail-emprendimientos-btn]'
        );

$thumbnailEmprendimientosBtn.addEventListener('click', function () {
    const body = document.body;
    body.innerHTML = '';
    body.append(emprendimientosPage);

    const /** {Object} */ modal = enConstruccionModal();
    modal.open();
});
/** */
const /** {<HTMLElement} */ $thumbnailServiciosPublicosBtn =
        carrouselhomeModal.querySelector(
            '[data-thumbnail-servicios-publicos-btn]'
        );

$thumbnailServiciosPublicosBtn.addEventListener('click', function () {
    const body = document.body;
    body.innerHTML = '';
    body.append(serviciosPublicosPage);

    const /** {Object} */ modal = enConstruccionModal();
    modal.open();
});
/** */
const /** {<HTMLElement} */ $thumbnailComerciosBtn =
        carrouselhomeModal.querySelector('[data-thumbnail-comercios-btn]');

$thumbnailComerciosBtn.addEventListener('click', function () {
    const body = document.body;
    body.innerHTML = '';
    body.append(comerciosPage);

    const /** {Object} */ modal = enConstruccionModal();
    modal.open();
});
/** */
const /** {<HTMLElement} */ $thumbnailProfesionalesSaludBtn =
        carrouselhomeModal.querySelector(
            '[data-thumbnail-profesionales-salud-btn]'
        );

$thumbnailProfesionalesSaludBtn.addEventListener('click', function () {
    const body = document.body;
    body.innerHTML = '';
    body.append(profesionalesSaludPage);

    const /** {Object} */ modal = enConstruccionModal();
    modal.open();
});
/** */
const /** {<HTMLElement} */ $thumbnailVentaGarageBtn =
        carrouselhomeModal.querySelector('[data-thumbnail-venta-garage-btn]');

$thumbnailVentaGarageBtn.addEventListener('click', function () {
    const body = document.body;
    body.innerHTML = '';
    body.append(ventaGaragePage);

    const /** {Object} */ modal = enConstruccionModal();
    modal.open();
});
/** */
const /** {<HTMLElement} */ $thumbnailPropiedadesBtn =
        carrouselhomeModal.querySelector('[data-thumbnail-propiedades-btn]');

$thumbnailPropiedadesBtn.addEventListener('click', function () {
    const body = document.body;
    body.innerHTML = '';
    body.append(propiedadesPage);

    const /** {Object} */ modal = enConstruccionModal();
    modal.open();
});
/** */
const /** {<HTMLElement} */ $thumbnailEsparcimientoBtn =
        carrouselhomeModal.querySelector('[data-thumbnail-esparcimiento-btn]');

$thumbnailEsparcimientoBtn.addEventListener('click', function () {
    const body = document.body;
    body.innerHTML = '';
    body.append(esparcimientosPage);

    const /** {Object} */ modal = enConstruccionModal();
    modal.open();
});
/** */
const /** {<HTMLElement} */ $thumbnailGastronomiaBtn =
        carrouselhomeModal.querySelector('[data-thumbnail-gastronomia-btn]');

$thumbnailGastronomiaBtn.addEventListener('click', function () {
    const body = document.body;
    body.innerHTML = '';
    body.append(gastronomiaPage);

    const /** {Object} */ modal = enConstruccionModal();
    modal.open();
});
/** */
// const /** {<HTMLElement} */ $vermas01Btn = carrouselhomeModal.querySelector(
//         '[data-vermas-01-btn]'
//     );

// $vermas01Btn.addEventListener('click', function () {
//     const /** {Object} */ modal = enConstruccionModal();
//     modal.open();
// });

let nextDom = carrouselhomeModal.querySelector('[data-next-btn]');
let prevDom = carrouselhomeModal.querySelector('[data-prev-btn]');

let carouselDom = carrouselhomeModal.querySelector('.carousel');
let SliderDom = carouselDom.querySelector('.carousel .list');
let thumbnailBorderDom = carrouselhomeModal.querySelector(
    '.carousel .thumbnail'
);
let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item');
let timeDom = carrouselhomeModal.querySelector('.carousel .time');

thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
let timeRunning = 3000;
let timeAutoNext = 8000;

nextDom.addEventListener('click', function () {
    showSlider('next');
});

prevDom.addEventListener('click', function () {
    showSlider('prev');
});

let runTimeOut;
let runNextAuto = setTimeout(() => {
    nextDom.click();
}, timeAutoNext);
function showSlider(type) {
    let SliderItemsDom = SliderDom.querySelectorAll('.carousel .list .item');
    let thumbnailItemsDom = document.querySelectorAll(
        '.carousel .thumbnail .item'
    );

    if (type === 'next') {
        SliderDom.appendChild(SliderItemsDom[0]);
        thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
        carouselDom.classList.add('next');
    } else {
        SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
        thumbnailBorderDom.prepend(
            thumbnailItemsDom[thumbnailItemsDom.length - 1]
        );
        carouselDom.classList.add('prev');
    }

    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
        carouselDom.classList.remove('next');
        carouselDom.classList.remove('prev');
    }, timeRunning);

    clearTimeout(runNextAuto);
    runNextAuto = setTimeout(() => {
        nextDom.click();
    }, timeAutoNext);
}

export { carrouselhomeModal };

/**-------------------------MENU RESPONSIVE--------------------------- */
const botonMenuResponsive = document.querySelector('.boton-menu-hamburguesa');

botonMenuResponsive.addEventListener('click', ()=>{
    const navegacionMobil = document.querySelector('.navegacion-mobil');

    navegacionMobil.classList.toggle('mostrar-menu');
})

/**---------------------------ANIMACIONES------------------------------------ */
const seccionInicio = document.querySelector('.main-hero');
const seccionSkills = document.querySelector('.seccion-skills');
const seccionProyectos = document.querySelector('.seccion-proyectos');
const seccionContacto = document.querySelector('.seccion-contacto');

const cargarSeccionInicio = (entradas, observador) =>{
    entradas.forEach((entrada) => {
        //console.log(entrada);
        if(entrada.isIntersecting){
            //console.log('entrada');
            entrada.target.classList.add('visible-hero');
        }else {
			entrada.target.classList.remove('visible-hero');
		}
    });
}

const observador = new IntersectionObserver(cargarSeccionInicio, {
    root: null,
    rootMargin: '0px 0px 0px 0px',
    threshold: 0.2
})

observador.observe(seccionInicio);
observador.observe(seccionSkills);
observador.observe(seccionProyectos);
observador.observe(seccionContacto);

/**---------------------------NAVEGACION TABS------------------------------------ */

//botones
let tabWebDev = document.getElementById('tab-webdev');
let tabWebDes = document.getElementById('tab-webdes');
let tabOtro = document.getElementById('tab-otro');

//contenedores
let contWebDev = document.getElementById('proyectos-webdev');
let contWebDes = document.getElementById('proyectos-webdes');
let contOtro = document.getElementById('proyectos-otro');

tabWebDev.addEventListener('click', ()=>{
    //manejo color de botones
    tabWebDev.classList.add('tab-selected');
    tabWebDes.classList.remove('tab-selected');
    tabOtro.classList.remove('tab-selected');

    //manejo de los contenedores
    contWebDev.classList.remove('oculto');
    contWebDes.classList.add('oculto');
    contOtro.classList.add('oculto');
})

tabWebDes.addEventListener('click', ()=>{
    //manejo color de botones
    tabWebDes.classList.add('tab-selected');
    tabWebDev.classList.remove('tab-selected');
    tabOtro.classList.remove('tab-selected');

    //manejo de los contenedores
    contWebDev.classList.add('oculto');
    contWebDes.classList.remove('oculto');
    contOtro.classList.add('oculto');
})

tabOtro.addEventListener('click', ()=>{
    //manejo color de botones
    tabOtro.classList.add('tab-selected');
    tabWebDev.classList.remove('tab-selected');
    tabWebDes.classList.remove('tab-selected');

    //manejo de los contenedores
    contWebDev.classList.add('oculto');
    contWebDes.classList.add('oculto');
    contOtro.classList.remove('oculto');
})
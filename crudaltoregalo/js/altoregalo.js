// MENU HAMBURGUESA

const abrir = document.getElementById('abrir')
const cerrar = document.getElementById('cerrar')
const nav = document.getElementById('nav')

abrir.addEventListener('click', () => {
    nav.classList.add('visible')
    abrir.classList.add('visible')
})

cerrar.addEventListener('click', () => {
    nav.classList.remove('visible')
    abrir.classList.remove('visible')
})


//Javacript for img slider navigation
const btns = document.querySelectorAll(".nav-btn");
const slides = document.querySelectorAll(".img-slide");
const contents = document.querySelectorAll(".content");

var sliderNav = function (manual) {
    btns.forEach((btn) => {
    btn.classList.remove("active");
    });

    slides.forEach((slide) => {
    slide.classList.remove("active");
    });

    contents.forEach((content) => {
    content.classList.remove("active");
    });

    btns[manual].classList.add("active");
    slides[manual].classList.add("active");
    contents[manual].classList.add("active");
}

btns.forEach((btn, i) => {
    btn.addEventListener("click", () => {
    sliderNav(i);
    });
});


/* MODAL Y VALIDACION DE FORMULARIO */

const openModal = document.querySelector('.btn_suscripcion');
const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.modal__close');

openModal.addEventListener('click', (e) => {
    e.preventDefault();
    modal.classList.add('modal--show');
});

closeModal.addEventListener('click', (e) => {
    e.preventDefault();
    modal.classList.remove('modal--show');
});


let form = document.getElementById("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let mail = document.getElementById("mail").value;

    let nombre_valido = validacionTexto(nombre)
    let apellido_valido = validacionTexto(apellido)
    let mail_valido = validacionEmail(mail)

    if (nombre_valido && apellido_valido && mail_valido) {
        document.getElementById("form").submit();
    } else {
        alerta()
    }
})

function validacionTexto(values) {
    let valido = true;
    let pat = /^[A-ZÑa-zñ:\s.-]+$/;
    let pat2 = /^[\s]+$/;

    if (values != null && values != '' && values.length >= 3) {
        if (values.match(pat)) {

            if (values.match(pat2)) {
                valido = false;
            }

        } else {

            valido = false;
        }
    } else {

        valido = false;
    }

    return valido;
}

function validacionEmail(values) {
    valido = true;
    let patMail = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;

    if (values != null && values != '') {
        if (!values.match(patMail)) {
            valido = false;
        }

    } else {
        valido = false;
    }

    return valido;
}

/* MUESTRA CARTEL SI ALGO ESTA MAL */

function alerta() {
    modal.classList.remove('modal--show');
    Swal.fire({
        title: '¡INFO!',
        text: 'Faltan datos o fueron mal ingresados en el formulario',
        icon: 'error',
        confirmButtonText: 'Aceptar',
        confirmButtonColor: 'red',
        customClass: {
            container: 'apple-green-bg'
        }
    })
}



// ANIMACION TEXTO

const typed = new Typed('.typed', {
	strings: [
		'<i class="mascota">las experiencias</i>',
		'<i class="mascota">compartir</i>',
		'<i class="mascota">explorar</i>',
		'<i class="mascota">vivir más</i>'
	],

	//stringsElement: '#cadenas-texto', // ID del elemento que contiene cadenas de texto a mostrar.
	typeSpeed: 75, // Velocidad en mlisegundos para poner una letra,
	startDelay: 300, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
	backSpeed: 75, // Velocidad en milisegundos para borrrar una letra,
	smartBackspace: true, // Eliminar solamente las palabras que sean nuevas en una cadena de texto.
	shuffle: false, // Alterar el orden en el que escribe las palabras.
	backDelay: 1500, // Tiempo de espera despues de que termina de escribir una palabra.
	loop: true, // Repetir el array de strings
	loopCount: false, // Cantidad de veces a repetir el array.  false = infinite
	showCursor: true, // Mostrar cursor palpitanto
	cursorChar: '|', // Caracter para el cursor
	contentType: 'html', // 'html' o 'null' para texto sin formato
});






var _0xa463 = ["\x2E\x6D\x79\x53\x77\x69\x70\x65\x72", "\x2E\x73\x77\x69\x70\x65\x72\x2D\x70\x61\x67\x69\x6E\x61\x74\x69\x6F\x6E", "\x2E\x73\x77\x69\x70\x65\x72\x2D\x62\x75\x74\x74\x6F\x6E\x2D\x6E\x65\x78\x74", "\x2E\x73\x77\x69\x70\x65\x72\x2D\x62\x75\x74\x74\x6F\x6E\x2D\x70\x72\x65\x76"];
var swiper = new Swiper(_0xa463[0], {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false
    },
    pagination: {
        el: _0xa463[1],
        clickable: true
    },
    navigation: {
        nextEl: _0xa463[2],
        prevEl: _0xa463[3]
    }
})


// MODAL Y VALIDACION DE FORMULARIO 

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

/* MIESTRA CARTEL SI ALGO ESTA MAL */
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
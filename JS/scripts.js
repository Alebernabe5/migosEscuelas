// SLIDESHOW AUTOMATICO HERO

var counter=0;
function slideShow(){
    var listaImg= [
    //    "url('../img/1.png')",
    //    "url('../img/2.png')" 
       "url('../img/fondo.jpg')" ,
       "url('../img/fondo2.jpg')" 

    ];

    // Aumentar el contador 
    counter++;

    if(counter==listaImg.length){
        counter = 0;
    }

    document.getElementById("portada").style.backgroundImage = "linear-gradient(rgba(0,0,0,0.3), rgba(0, 0, 0, 0.3))," + listaImg[counter];
}

// Codigo SlideShow automático con animacion

    // var counterNext = 0;
    // var counterMain= 0;

    // function slideShowAnim (){
    //     var listaImbAnim =document.getElementsByClassName("fondosHero");
        
    //     counterNext++;
    //     counterMain = counterNext-1;

    //     listaImbAnim[i].classList.add("nextSlide");
    //     listaImbAnim[i].classList.add("mainSlide");
    //     listaImbAnim[i].classList.add("hiddenSlide");

    //     if(counterNext==listaImbAnim.length){
    //         counterNext=0;
    //     }

    //     if(counterMain <0){
    //         counterMain=listaImbAnim.length-1;
    //     }

    //     for( var i=0; i< listaImbAnim.length;i++){
    //         if(i==counterNext){
    //             listaImbAnim[i].classList.add("nextSlide");
                
    //         }
    //         else if (i==counterMain){
    //             listaImbAnim[i].classList.add("mainSlide");

    //         }
    //         else {
    //             listaImbAnim[i].classList.add("hiddenSlide");

    //         }
    //     }
    // }

// Código del modal reserva 

function modalBienvenida (){
    document.getElementById("modalBienvenida").style.display="block";
    // Pausar animacion 
    document.getElementById("tituloEncabezado").style.animationPlayState = "paused";
    document.getElementById("subtituloEncabezado").style.animationPlayState = "paused";
    // Bloquear scroll 
    document.documentElement.style.overflow="hidden";
}

function cerrarMBB (){
    document.getElementById("modalBienvenida").style.display="none";
    // Pausar animacion 
    document.getElementById("tituloEncabezado").style.animationPlayState = "running";
    document.getElementById("subtituloEncabezado").style.animationPlayState = "running";
    // Bloquear scroll 
    document.documentElement.style.overflow="auto";
    
}

function modalReserva (){
    document.getElementById("modalReserva").style.display="block";   
    // Bloquear scroll 
    document.documentElement.style.overflow="hidden";

    var hijo = document.getElementById("formHijo").value;
    var nombre = document.getElementById("formNombre").value;
    var fecha = document.getElementById("formFecha").value;
    var numero = document.getElementById("formNumero").value;
    
    var mensaje;

    // chek de validacion 
    (function fornCheck(){
        if (!document.getElementById("formHijo").checkValidity()){
             mensaje= "Introduce el nombre de su hijo/a.";
             document.getElementById("mensajeReserva").innerHTML = mensaje;

         }
         else if(!document.getElementById("formNombre").checkValidity()){
             mensaje= "Introduce un nombre.";
             document.getElementById("mensajeReserva").innerHTML = mensaje;
            }
            else if(!document.getElementById("formFecha").checkValidity()){
               mensaje= "Introduce la fecha.";
               document.getElementById("mensajeReserva").innerHTML = mensaje;
           }
         else if(!document.getElementById("formNumero").checkValidity()){
            mensaje= "Introduce un número de teléfono.";
            document.getElementById("mensajeReserva").innerHTML = mensaje;
        }

         else{
             mensaje = nombre + " ,confirmamos la recepción para inscribir a su hijo " + hijo + " a día " + fecha+ " .Nos pondremos en contacto al Nº "+numero+ ".";
             document.getElementById("mensajeReserva").innerHTML = mensaje;
         }
    })();
   
    }

function cerrarMBR(){
     document.getElementById("modalReserva").style.display="none";   
    // Desbloquear scroll 
document.documentElement.style.overflow="auto";
    //Vaciar cajas
document.getElementById("formHijo").value = "";
document.getElementById("formNombre").value = "";
document.getElementById("formFecha").value = "";
document.getElementById("formNumero").value = "";
document.getElementById("formComentenos").value = "";

    nombre="";

}

// Codigo para el menu 

var posPreviaScroll = document.documentElement.scrollTop;

window.onscroll = function() {esconderMostrarMenu()};

function esconderMostrarMenu(){
    
    var posActualScroll = document.documentElement.scrollTop;

    if (posPreviaScroll > posActualScroll) {
        //cuando subimos mostrar menu
        document.getElementById("navbar").style.top="0";
        
        if (posActualScroll > 200) {
            document.getElementById("navbar").style.height="50px";
            document.getElementById("navbar").style.fontSize="1.75rem";
            document.getElementById("menu").style.lineHeight="50px";
            document.getElementById("submenu").style.top="50px";
            document.getElementById("logocancha").style.padding="10px";
          

        }
        else{
            document.getElementById("navbar").style.height="150px";
            document.getElementById("navbar").style.fontSize="2rem";
            document.getElementById("menu").style.lineHeight="150px";
            document.getElementById("submenu").style.top="90px";
            document.getElementById("logocancha").style.padding="0px";


        }
    }
    else{
        //cuando bajamos NO mostrar menu
        if (posActualScroll < 200) {
            document.getElementById("navbar").style.height="50px";
            document.getElementById("navbar").style.fontSize="1.75rem";
            document.getElementById("menu").style.lineHeight="50px";


        }
        else{
            document.getElementById("navbar").style.top="-150px";

        }
    }

    posPreviaScroll = posActualScroll;  
}

// CODIGO PARA LAS PESTAÑAS DE LOS EQUIPOS

    function marcarPestana(contenedorAMostrar, tabClicada){

        var listaConPestanas = document.getElementsByClassName("contenedorEquipos");

        for (var i=0; i<listaConPestanas.length; i++){
            listaConPestanas[i].style.display="none";
        }
        
        document.getElementById(contenedorAMostrar).style.display="block";
        
        var tabLinks = document.getElementsByClassName('etiqueta');
        
        for (var i=0; i<tabLinks.length; i++){
           tabLinks[i].classList.remove("pestanaActiva");
        }

        document.getElementById(tabClicada).classList.add("pestanaActiva");

        // ANIMACION 
        var equipos = document.getElementsByClassName('equipo');
        
        for (var i=0; i<equipos.length; i++){
            equipos[i].classList.remove("equipoAnimado");
        }

        var equiposC = document.getElementById(contenedorAMostrar).children;
        

        for(var i=0; i<equiposC.length;i++){
            equiposC[i].classList.add(equipoAnimado);
        }
    }






// Codigo del lightbox 
// function modalLightboxG(){
//     document.getElementById("modalLightboxG").style.display="block";
//     document.documentElement.style.overflow='hidden';

//     var listaImgGal = document.getElementsByClassName("imgGal");
    
//     for (var i=0; i < listaImgGal.length; i++) {
        
//         listaRutaImgGal.push(listaImgGal[i].src);
//     }
//     // console.log (listaImgGal);

//     document.getElementById("imageToShow").innerHTML="<img class='imageLightB' src='img/galeria/1.JPG'>";
// }


var listaRutaImgGal = [];
var numeroImg = 0 ;

// ABRIR GALERIA 
function realLightbox(){
    var listaImgGal = document.getElementsByClassName("imgGal");
    
    for (var i=0; i < listaImgGal.length; i++) {
        
        listaRutaImgGal.push(listaImgGal[i].src);
    }
    
    for (var i=0; i < listaImgGal.length; i++) {
        
        listaImgGal[i].addEventListener('click', openLigthbox);
       
    }


    function  openLigthbox(event){

        var rutaImgClicada = event.currentTarget.src;
        numeroImg = listaRutaImgGal.indexOf(rutaImgClicada);

        document.getElementById("imageToShow").innerHTML="<img class='imageLightB' src=" + listaRutaImgGal[numeroImg] +">";
        
        document.getElementById("modalLightboxG").style.display="block";
        document.documentElement.style.overflow='hidden';
        closeLightbox();
    }
    
    // CERRAR GALERIA 
    function closeLightbox(){
        window.addEventListener('click', function(event){

            if(!event.target.matches(".imageLightB") && !event.target.matches(".imgGal") && !event.target.matches(".lbButtons") && !event.target.matches(".fa-solid")){
                document.getElementById("modalLightboxG").style.display="none";
                document.documentElement.style.overflow='auto';
            }
        });
    }
    
}


// DELANTE ATRAS IMG 

function nextImgGal(){
    numeroImg++;

    if (numeroImg == listaRutaImgGal.length) {
        numeroImg =0;
    }

    document.getElementById("imageToShow").innerHTML="<img class='imageLightB' src=" + listaRutaImgGal[numeroImg] +">";

}
function prevImgGal(){
    numeroImg--;

    if (numeroImg < 0 ) {
        numeroImg =listaRutaImgGal.length-1;
    }

    document.getElementById("imageToShow").innerHTML="<img class='imageLightB' src=" + listaRutaImgGal[numeroImg] +">";

}



// Rotar imagenes de la sesion HORARIOS 
document.addEventListener("DOMContentLoaded", function() {
    var slides = document.querySelectorAll("#contenedorH .slide");
    var SlideH = 0;
    
    function nextSlide() {
        slides[SlideH].classList.remove("active");
        SlideH = (SlideH + 1) % slides.length;
        slides[SlideH].classList.add("active");
    }
    
    setInterval(nextSlide, 4000); // Cambia de slide cada 4 segundos
});



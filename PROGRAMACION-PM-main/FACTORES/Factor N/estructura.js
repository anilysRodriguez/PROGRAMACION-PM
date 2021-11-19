 

 //Ejecutar función en el evento click
document.getElementById("btn_open").addEventListener("click", open_close_menu);

//Declaramos variables
var side_menu = document.getElementById("menu_side");
var btn_open = document.getElementById("btn_open");
var body = document.getElementById("body");

//Evento para mostrar y ocultar menú
    function open_close_menu(){
        body.classList.toggle("body_move");
        side_menu.classList.toggle("menu__side_move");
    }

//Si el ancho de la página es menor a 760px, ocultará el menú al recargar la página

if (window.innerWidth < 760){

    body.classList.add("body_move");
    side_menu.classList.add("menu__side_move");
}

//Haciendo el menú responsive(adaptable)

window.addEventListener("resize", function(){

    if (window.innerWidth > 760){

        body.classList.remove("body_move");
        side_menu.classList.remove("menu__side_move");
    }

    if (window.innerWidth < 760){

        body.classList.add("body_move");
        side_menu.classList.add("menu__side_move");
    }

});
//RELOJ//
let horas = 0;
let minutos = 6;
let segundos = 0;
cargarSegundo();

//Definimos y ejecutamos los segundos
function cargarSegundo(){
    let txtSegundos;

    if(segundos < 0){
        segundos = 59; 
    }

    //Mostrar Segundos en pantalla
    if(segundos < 10){
        txtSegundos = `0${segundos}`;
    }else{
        txtSegundos = segundos;
    }
    document.getElementById('segundos').innerHTML = txtSegundos;
    segundos--;

    cargarMinutos(segundos);
}

//Definimos y ejecutamos los minutos
function cargarMinutos(segundos){
    let txtMinutos;

    if(segundos == -1 && minutos !== 0){
        setTimeout(() =>{
            minutos--;
        },500)
    }else if(segundos == -1 && minutos == 0){
        setTimeout(() =>{
            minutos = minutos;
        },500)
    }

    //Mostrar Minutos en pantalla
    if(minutos < 10){
        txtMinutos = `0${minutos}`;
    }else{
        txtMinutos = minutos;
    }
    document.getElementById('minutos').innerHTML = txtMinutos;
    cargarHoras(segundos,minutos);
}

//Definimos y ejecutamos las horas
function cargarHoras(segundos,minutos){
    let txtHoras;

    if(segundos == -1 && minutos == 0 && horas !== 0){
        setTimeout(() =>{
            horas--;
        },500)
    }else if(segundos == -1 && minutos == 0 && horas == 0){
        setTimeout(() =>{
            horas = 0;
        },500)
    }

    //Mostrar Horas en pantalla
    if(horas < 10){
        txtHoras = `0${horas}`;
    }else{
        txtHoras = horas;
    }
    document.getElementById('horas').innerHTML = txtHoras;
}

//Ejecutamos cada segundo
setInterval(cargarSegundo,1000); 


//submit//

 //Hola a la persona que este leyendo esto, es Venus :D//
 //Era para mencionar que esta parte de submit es para cuando ingresen la respuesta que crean correcta le den a submit//
 //y como no se puede ver la respuesta si esta bien o mal puse un console.log para que al usar el inspeccionar se pueda ver que puso para luego verificar a las personas encargadas de eso//
 //gracias por leer, suerte xd//
 

//Tabla #1//

function boton1() {

    var primero = document.getElementById("resultadoA").value;
    var arreglo1 = new Array()
    arreglo1.push(primero);
    console.log(arreglo1)

}

function boton2() {

    var segundo = document.getElementById("resultadoB").value;
    var arreglo2 = new Array()
    arreglo2.push(segundo);
    console.log(arreglo2)

}

function boton3() {

    var tercero = document.getElementById("resultadoC").value;
    var arreglo3 = new Array()
    arreglo3.push(tercero);
    console.log(arreglo3)

}

function boton4() {

    var cuarto = document.getElementById("resultadoD").value;
    var arreglo4 = new Array()
    arreglo4.push(cuarto);
    console.log(arreglo4)

}

function boton5() {

    var quinto = document.getElementById("resultadoE").value;
    var arreglo5 = new Array()
    arreglo5.push(quinto);
    console.log(arreglo5)

}

//Tabla #2//

function boton6() {

    var sexto = document.getElementById("resultadoF").value;
    var arreglo6 = new Array()
    arreglo6.push(sexto);
    console.log(arreglo6)

}

function boton7() {

    var septimo = document.getElementById("resultadoG").value;
    var arreglo7 = new Array()
    arreglo7.push(septimo);
    console.log(arreglo7)

}

function boton8() {

    var octavo = document.getElementById("resultadoH").value;
    var arreglo8 = new Array()
    arreglo8.push(octavo);
    console.log(arreglo8)

}

function boton9() {

    var noveno = document.getElementById("resultadoI").value;
    var arreglo9 = new Array()
    arreglo9.push(noveno);
    console.log(arreglo9)

}

function boton10() {

    var decimo = document.getElementById("resultadoJ").value;
    var arreglo10 = new Array()
    arreglo10.push(decimo);
    console.log(arreglo10)

}

//Tabla #3//

function boton11() {

    var undecimo = document.getElementById("resultadoK").value;
    var arreglo11 = new Array()
    arreglo11.push(undecimo);
    console.log(arreglo11)

}

function boton12() {

    var duodecimo = document.getElementById("resultadoL").value;
    var arreglo12 = new Array()
    arreglo12.push(duodecimo);
    console.log(arreglo12)

}

function boton13() {

    var decimotercero = document.getElementById("resultadoM").value;
    var arreglo13 = new Array()
    arreglo13.push(decimotercero);
    console.log(arreglo13)

}
function boton14() {

    var decimocuarto = document.getElementById("resultadoN").value;
    var arreglo14 = new Array()
    arreglo14.push(decimocuarto);
    console.log(arreglo14)

}
function boton15() {

    var decimoquinto = document.getElementById("resultadoÑ").value;
    var arreglo15 = new Array()
    arreglo15.push(decimoquinto);
    console.log(arreglo15)

}

//Tabla #4//

function boton16() {

    var decimosexto = document.getElementById("resultadoO").value;
    var arreglo16 = new Array()
    arreglo16.push(decimosexto);
    console.log(arreglo16)

}

function boton17() {

    var decimoseptimo = document.getElementById("resultadoP").value;
    var arreglo17 = new Array()
    arreglo17.push(decimoseptimo);
    console.log(arreglo17)

}

function boton18() {

    var decimooctavo = document.getElementById("resultadoQ").value;
    var arreglo18 = new Array()
    arreglo18.push(decimooctavo);
    console.log(arreglo18)

}



function boton19() {

    var decimonoveno = document.getElementById("resultadoR").value;
    var arreglo19 = new Array()
    arreglo19.push(decimonoveno);
    console.log(arreglo19)

}

function boton20() {

    var vigesimo = document.getElementById("resultadoS").value;
    var arreglo20 = new Array()
    arreglo20.push(vigesimo);
    console.log(arreglo20)

}

















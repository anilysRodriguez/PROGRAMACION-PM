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
let horas = 5;
let minutos = 0;
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
            minutos = 59;
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
            horas = 2;
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

//Función de las respuestas
let resultados = 0;
function preguntaI(){
    var pregunta1 = document.getElementById("pregunta1").value;
    switch(pregunta1){
    case "3":
        resultados++
        break;
    }
}
function preguntaII(){
    var pregunta2 = document.getElementById("pregunta2").value;
    switch(pregunta2){
    case "4":
        resultados++
        break;
    }
}
function preguntaIII(){
    var pregunta3 = document.getElementById("pregunta3").value;
    switch(pregunta3){
    case "1":
        resultados++
        break;
    }
}
function preguntaIV(){
    var pregunta4 = document.getElementById("pregunta4").value;
    switch(pregunta4){
    case "1":
        resultados++
        break;
    }
}
function preguntaV(){
    var pregunta5 = document.getElementById("pregunta5").value;
    switch(pregunta5){
    case "4":
        resultados++
        break;
    }
}
function preguntaVI(){
    var pregunta6 = document.getElementById("pregunta6").value;
    switch(pregunta6){
    case "3":
        resultados++
        break;
    }
}
function preguntaVII(){
    var pregunta7 = document.getElementById("pregunta7").value;
    switch(pregunta7){
    case "6":
        resultados++
        break;
    }
}
function preguntaVIII(){
    var pregunta8 = document.getElementById("pregunta8").value;
    switch(pregunta8){
    case "2":
        resultados++
        alert("puntaje= "+ resultados + "/8");

        break;
    }
}

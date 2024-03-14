//alert("Hola este es mi Javascript");
/*const minombre="Milagros";

console.log(minombre)

//SELECCIONAR ELEMENTOS
let contenidoTitulo="Acerca de mi";

let titulo=document.querySelector("h1")
titulo.innerHTML=contenidoTitulo

//CONDICIONALES
let textoTitulo=titulo.innertext;
console.log(textoTitulo)
if(textoTitulo="Acerca de mi"){
    titulo.innerHTML="Sobre mi"
}
else{console.log("no se cumple")}*/s

//FUNCIONES

/*let name2 ="Alexandra";
let universidad ="Universidad Peruana de Ciencias Aplicadas";
let verbo ="pertenezco";

let parrafo=document.querySelector(".acerca-texto");

function cambiarTexto(name2, universidad, verbo){
    let contenido=`Mi nombre es ${name2} Nuñez, soy estudiante de la carrera de Ingeniería de Gestión Empresarial en la ${universidad}. Dentro de mis mayores logros es ser becaria de Patronato BCP y pertenecer al grupo de Alto rendimiento de la universidad donde ${verbo}. Actualmente me interesa mucho el mundo de la programación por lo que a siguiente página es fruto de lo que aprendo en el curso de  Programación Web Full Stack de EGG.`;
    /*se usa comillas invertidas no simples(`) sino no sale

    return contenido}

parrafo.innerText=cambiarTexto(name2, universidad, verbo)*/

//Menú mobile en Javascript
    /*modificar el CSS anterior para que se adapte al script.*/
let menu_responsive = document.querySelector(".checkbtn");
menu_responsive.onclick = function () {
  navBar = document.querySelector(".navbar");
  navBar.classList.toggle("active");
};

/*Formulario*/
const form = document.getElementById("form");
const nombre = document.getElementById("nombre");
const parrafo = document.getElementById("alertas");

function validarFormulario() {
  let warnings = "";
  let valido = true;
  parrafo.innerHTML = "";

  if (nombre.value.length<4) {
    warnings += `El nombre debe contener más de 4 carcateres`;
    valido = false;
  }

  if (!valido) {
    parrafo.innerHTML = warnings;
  } else {
    parrafo.innerHTML = "Enviado";
  }
  return valido;
}

form.addEventListener("submit", (e) => {
  if (validarFormulario()) {
    // Si la validación es exitosa, puedes enviar el formulario
    formulario.submit();
  } else {
    e.preventDefault(); // Evita que el formulario se envíe automáticamente
  }
})
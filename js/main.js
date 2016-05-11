// traer mensaje de input
function getInputValue(){
	var mensaje= document.getElementById("caja-texto");
	return mensaje.value;
}
//Recibir mensaje de input y llevarlo a lista incluyendo tachar y eliminar.
function AccionToDo(texto){
	//crear lista
	var lista= document.getElementById("lista");
	//crear caja de tarea
	var caja= document.createElement("div");
	//incluir accion
	var elemento= document.createElement("span")
	elemento.className="text";
	elemento.innerHTML= texto;
	//crea boton con icono
	var boton= document.createElement("button");
	boton.className="eliminar";
	var icon= document.createElement("i");
	icon.className="glyphicon glyphicon-trash"
	//cuando se haga click en el boton se eliminara el div. lista del elemento padre caja.
	boton.onclick= function(){
		lista.removeChild(caja);
	}
	//crea input checkbox para marcar la accion
	var check= document.createElement("input");
	check.type="checkbox";
	//si el chekbox se marqua. tachar el texto
	check.onchange= function(){
		if(check.checked==true){
			elemento.innerHTML=texto.strike();
		}
		else{
			elemento.innerHTML=texto;
		}
	}
	//el icono esta dentro del boton
	boton.appendChild(icon);
	// el chek esta dentro de la caja
	caja.appendChild(check);
	// el elemento esta dentro de la caja
	caja.appendChild(elemento);
	// el boton esta dentro de la caja
	caja.appendChild(boton);
	// la caja esta dentro de la lista
	lista.appendChild(caja);
}
//limpia el textarea 
function limpiarCaja() {
    var mensaje = document.getElementById("caja-texto");
    //valor de la caja (vacia)
    mensaje.value = "";
    //caja activa para escribir otra vez
    mensaje.focus();
}
// Realiza la funcion de verificar y agregar la tarea
function Funcion(){
    var mensaje= getInputValue();
    // si es diferente de vacion realiza la accion 
    if(mensaje!==""){
        AccionToDo(mensaje);
        limpiarCaja();
    }
}




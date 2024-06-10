function mostrarNombreCompleto() {
    let nombre1, nombre2, apellido1, apellido2;
    nombre1 = document.getElementById("pri_nombre").value;
    nombre2 = document.getElementById("seg_nombre").value;
    apellido1 = document.getElementById("pri_apellido").value;
    apellido2 = document.getElementById("seg_apellido").value;
    
    document.getElementById("nom_completo").value = nombre1+" "+nombre2+" "+apellido1+" "+apellido2;
}

function ultimoDigito() {
    let dni = document.getElementById("dni").value;
    document.getElementById("digito").value = dni[7];
}

function getEdad() {
    let dato = document.getElementById("fech_naci").value;

    let fechaNaci = new Date(dato);
    let hoy = new Date();
    let edad = hoy.getFullYear() - fechaNaci.getFullYear();
    const mes = hoy.getMonth() - fechaNaci.getMonth();
  
    if (mes < 0 || (mes === 0 && hoy.getDate() < fechaNaci.getDate())) {
      edad--;
    }
    document.getElementById("edad").value = edad;
}

function procesar(){
    mostrarNombreCompleto();
    ultimoDigito();
    getEdad();
}



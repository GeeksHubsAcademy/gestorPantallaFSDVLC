

const cambiarPantalla = (pantallaDestino) => {

    //Primer paso, generamos array con todas las fases

    let arrayDeFases = ["1","2","3","4"];

    //Filtramos el array que contiene las fases, le quitamos el valor que corresponde
    //a la pantalla de destino
    arrayDeFases = arrayDeFases.filter(iterador => !pantallaDestino.includes(iterador));

    //Asignamos el valor de estilo block al display de aquella section que queremos
    //que sea visible
    document.getElementById(pantallaDestino).style.display = "block";

    for (let cadaPosicion of arrayDeFases) {
        
        document.getElementById(cadaPosicion).style.display = "none";

    }
    
}

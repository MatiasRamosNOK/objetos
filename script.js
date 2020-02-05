
var nave = {
    tipoDeNave : "espacial",
    pais : "argentina",
    cantidadDeTripulantes : 3,
    tripulantes : ["Mati","Ivan","Diego"],
    estado : "usada",
    despegar : function despegue(){
        console.log(
            "Despegue en 3, 2, 1 … OH NO, ESPEREN, ALGO SE ROMPIÓ!"
        )

        alert("BOOOM!")
    }
}

function mostrarNave(){
    return nave
}
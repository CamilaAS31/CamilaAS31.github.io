function resultado(){
    let persona = document.getElementById("seleccionPersona").value
    let cantidad = document.getElementById("cantidad").value
    if(persona === "Estudiante"){
        let res= cantidad*200*0.2
        document.getElementById("precio").innerHTML=res
    } else if (persona === "Trainee") {
        let res= cantidad*200*0.5
        document.getElementById("precio").innerHTML=res
    } else{
        let res= cantidad*200*0.85
        document.getElementById("precio").innerHTML=res
    }
}

function xFunc() {
    document.getElementById("precio").innerHTML="";
}
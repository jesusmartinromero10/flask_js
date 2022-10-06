//aqui esta todo comportamiento

peticion_todos = new XMLHttpRequest()//crea una nueva instancia con el mandato new creamos la peticion

function peticion_todos_handler(){
    if (this.readyState === 4){ //se a termonado la peticion es el 4
        if (this.status === 200){
            alert(this.responseText)//trae los datos
            los_datos = JSON.parse(this.responseText)//esto hace que los datos pasen a ser una lista de diccionarios

            //const texto = document.querySelector("#entrada").value//cogemos valor del input
    
            const tabla = document.querySelector('#movements_table')//con esto seleccionamos la tabla

            for (let i = 0; i < los_datos.data.length; i++){
                const fila = document.createElement("tr")//crea la fila
                const celda = document.createElement("td")//crea la celda
                const celda2 = document.createElement("td")
                const celda3 = document.createElement("td")
                celda.innerHTML = los_datos.data[i].date //["date"] //mete el texto del input en la celda
                celda2.innerHTML = los_datos.data[i].concept//["concept"]
                celda3.innerHTML = los_datos.data[i].quantity//["quantity"]
                
                fila.appendChild(celda)//cualga la celda en la fila
                fila.appendChild(celda2)
                fila.appendChild(celda3)
                tabla.appendChild(fila)//aparece la fila en la tabla
            }   
        }
        }else {
            alert("Se ha producido un error")
        }
    }
//esta funcion recoge si la peticion esta acabada el estado 4 es que ya esta acabado

//esto se ejecuta cuando la pagina se carge
window.onload = function(){
    peticion_todos.open("GET", "http://localhost:5001/api/v1.0/all", true)//open es como request de python- 1º el metodo 2º la ruta 3º true o false true es una peticion asincrona no se queda esperando la pagina parada
    peticion_todos.onload = peticion_todos_handler //onload es decirle que cuando acabes la peticion te va a procesar la funcion peticion todos handler aqui recibe lo de arriba
    peticion_todos.onerror = function() { alert("no se ha podido completar la peticion de movimientos")}//si hay errores imprime eso
    peticion_todos.send()//envia


}

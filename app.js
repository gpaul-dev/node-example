

let controller=require("./controller");
let userInput=require('readline-sync');
var opcion;


do{
    controller.mostrarAyuda();

    opcion=userInput.question("elija una opcion \n").trim();
    switch(opcion) {
        case "listar": 
            controller.listar();
            break;
        case "agregar":
            controller.agregarTarea();
            break;
        case "cargar":
            controller.cargar();
            break;
        case "guardar":
            controller.guardar();
            break;
        case "":
            controller.alerta();
            break;
        default:
            controller.mostrarAyuda();
        }
} while(opcion!="salir");

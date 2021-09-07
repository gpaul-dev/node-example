let controller= {

    tarea:require('./tarea.js'),
    fs:require('fs'),
    userInput:require('readline-sync'),
    tareas : [],

    listar: function  (){
        if(this.tareas.length==0)
            console.log("No hay tareas cargadas aun");
        else{
            this.tareas.forEach(function(element,index){
            console.log("Tarea numero "+(index+1)+"\nTitulo: "+element.titulo+"\nestado: "+element.estado+"\n\n")
            })
        }

    },
    mostrarAyuda: function(){
        console.log("Los parametros aceptados son:\nlistar - Lista las tareas disponibles\nCargar - Carga las tareas guardadas\nAgregar - Agrega tareas nuevas\nGuardar - Guarda las tareas actuales\nSalir - Sale de la aplicacion");

    },
    alerta: function(){
        console.log("No ha introducido ningun parametro");

    },

    cargar: function(){

        let tareasFromFile=JSON.parse(this.fs.readFileSync('./tareas.json','UTF-8'));
        tareasFromFile.forEach(element => this.tareas.push(new this.tarea(element.titulo,element.estado)));
        
        

    },

    agregarTarea: function(){
        let titulo=this.userInput.question("ingrese el titulo de la tarea\n").trim();
        let estado=this.userInput.question("ingrese el estado de la tarea\n").trim();
        let tareaNueva=new this.tarea(titulo,estado);
        this.tareas.push(tareaNueva);


    },

    guardar: function(){
        this.fs.writeFileSync('./tareas.json',JSON.stringify(this.tareas));
        
    }
}

module.exports=controller;

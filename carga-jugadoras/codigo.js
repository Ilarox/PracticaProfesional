$(document).ready(function(){     
  $("#myTable").dynamicTable({
        //definimos las columnas iniciales    
        columns: [{
              text: "Nombre",
              key: "nombre"
          },
          {
              text: "Apellido",
              key: "apellido"
          },
          {
              text: "Teléfono",
              key: "telefono"
          },
          {
              text: "DNI",
              key: "dni"
          },        
        ],
 
        //carga de datos
       /* data: 
       [{
              nombre: 'Ana',
              apellido: 'Perez',
              telefono: '1532222222',
              dni: '40500500'    
              },],*/

        //definición de botones
        buttons: {
            addButton: '<input type="button" value="Agregar" class="btn btn-success" />',
            cancelButton: '<input type="button" value="Cancelar" class="btn btn-primary" />',
            deleteButton: '<input type="button" value="Borrar" class="btn btn-danger" />',
            editButton: '<input type="button" value="Editar" class="btn btn-primary" />',
            saveButton: '<input type="button" value="Guardar" class="btn btn-success" />',
        },
        showActionColumn: true,
        //condicionales
        getControl: function (columnKey) {
            if (columnKey == "age") {
              return '<input type="number" class="form-control" />';
            }

            if (columnKey == "gender") {
              return '<select class="form-control"><option value="M">Masculino</option><option value="F">Femenino</option></select>';
            }

            return '<input type="text" class="form-control" />';
        }

    });	    
});    
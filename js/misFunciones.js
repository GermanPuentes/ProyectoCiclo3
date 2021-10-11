function traerInformacion(){
    $.ajax({
        url:"https://g1cf1ba101f90a1-db202109231847.adb.us-phoenix-1.oraclecloudapps.com/ords/admin/client/client",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
           pintarRespuesta(respuesta.items);
        }
    });

}

function pintarRespuesta(items){

    let myTable="<table>";

    myTable+="<tr>";
    myTable+="<th width='25%'>" +"Id" +"</th>";
    myTable+="<th>" +"Target" +"</th>";
    myTable+="<th>" +"Capacity" +"</th>";
    myTable+="<th>" +"Category_id" +"</th>";
    myTable+="<th>" +"Name" +"</th>";
    myTable+="</tr>";
    for(i=0; i<items.length;i++){
        myTable+="<tr>";
        myTable+="<td>" +items[i].id +"</td>";
        myTable+="<td>" +items[i].target+ "</td>";
        myTable+="<td>" +items[i].capacity+ "</td>";
        myTable+="<td>" +items[i].category_id+ "</td>";
        myTable+="<td>" +items[i].name+ "</td>";
        myTable+="<td><button onclick='borrarElemento("+items[i].id+")'>Borrar</button>";
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultado").append(myTable);
}

function saveData(){

    let myData={
        id:$("#id").val(),
        name:$("#target").val(),
        brand:$("#capacity").val(),
        model:$("#category_id").val(),
        category_id:$("#name").val(),
    };
    let dataTosend=JSON.stringify(myData);
    $.ajax({
        url:"https://g1cf1ba101f90a1-db202109231847.adb.us-phoenix-1.oraclecloudapps.com/ords/admin/client/client",
        type:"POST",
        data:myData,
        datatype:"JSON",
        success:function(respuesta){
            //limpiar los campos de la tablar
            $("#resultado").empty();
            $("#id").val("");
            $("#target").val("");
            $("#capacity").val("");
            $("#category_id").val("");
            $("#name").val("");
            traerInformacion();
            alert("Se ha guardado")
        }
    });
}

function updateData(){
    let myData={
        id:$("#id").val(),
        name:$("#target").val(),
        brand:$("#capacity").val(),
        model:$("#category_id").val(),
        category_id:$("#name").val(),
    };
    let dataTosend=JSON.stringify(myData);
    $.ajax({
        url:"https://g1cf1ba101f90a1-db202109231847.adb.us-phoenix-1.oraclecloudapps.com/ords/admin/client/client",
        type:"PUT",
        data:dataTosend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            $("#id").val("");
            $("#target").val("");
            $("#capacity").val("");
            $("#category_id").val("");
            $("#name").val("");
            traerInformacion();
            alert("Se ha actualizado el producto")
        }
    });
}

function borrarElemento(idElemento){
    let myData={
        id:idElemento
    };
    let dataTosend=JSON.stringify(myData);
    $.ajax({
        url:"https://g1cf1ba101f90a1-db202109231847.adb.us-phoenix-1.oraclecloudapps.com/ords/admin/client/client",
        type:"DELETE",
        data:dataTosend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            traerInformacion();
            alert("se ha eliminado")
        }       
    });
}

myTable+="<tr>";
myTable+="<th >" +"Id" +"</th>";
myTable+="<th>" +"Target" +"</th>";
myTable+="<th>" +"Capacity" +"</th>";
myTable+="<th>" +"Category_id" +"</th>";
myTable+="<th>" +"Name" +"</th>";
myTable+="</tr>";
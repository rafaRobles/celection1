selectAllEquipos()

function selectAllEquipos()
{
		ajax = new XMLHttpRequest();
		//ajax.open('GET','http://celection.esy.es/getUsers.php',true);
		//ajax.open('GET','localhost/celection/getUsers.php',true);
		//ajax.open('GET','getEquipos.php',true);
		ajax.open('GET','http://celection.esy.es/getEquipos.php',true);
		ajax.setRequestHeader("Content-type", "application/json; charset=utf-8");
		ajax.setRequestHeader("Data-type", "jsonp");
		//ajax.setRequestHeader("Access-Control-Allow-Origin");
		ajax.send();
		ajax.onreadystatechange = function(){
			if(ajax.readyState == 4 && ajax.status==200){
					data =JSON.parse(ajax.responseText)
					console.log(data)
					var mostrarDatos ="";

					for (var i = 0; i < data.valores.length; i++)
					{
					mostrarDatos +=	'<div class="equipo">'+
										'<div class="imagen">'+
											'<img src="'+data.valores[i].imgRuta+'">'+	
										'</div>'+
										'<div class="infoEquipo">'+
											'<p>Modelo:</p> <p>'+ data.valores[i].modelo_equipo +'</p>'+
											'<p>Marca:</p> <p>'+ data.valores[i].marca_equipo +'</p>'+
											'<p>Precio:</p> <p>'+ data.valores[i].precio +'</p>'+
											'<p>Camara:</p> <p>'+ data.valores[i].camara_px +'</p>'+
											'<p>Camara Frontal:</p> <p>'+ data.valores[i].camara_frontal_px +'</p>'+
											'<p>Memoria Interna:</p> <p>'+ data.valores[i].memoria_interna +'</p>'+
											'<p>Memoria Externa:</p> <p>'+ data.valores[i].memoria_externa +'</p>'+
											'<p>Ram:</p> <p>'+ data.valores[i].ram +'</p>'+
											'<p>Tamaño:</p> <p>'+ data.valores[i].tamaño +'</p>'+
											'<p>Resolucion de Pantalla:</p> <p>'+ data.valores[i].resolucion_pantalla +'</p>'+
											'<p>Gama:</p> <p>'+ data.valores[i].gama +'</p>'+
										'</div>'+	
									'</div>'		
					}
					//console.log(mostrarDatos)
					document.getElementById('contenido').innerHTML = mostrarDatos
			}
		}
}
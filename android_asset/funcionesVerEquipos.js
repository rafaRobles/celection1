selectAllEquipos()

function selectAllEquipos()
{
		ajax = new XMLHttpRequest();
		//ajax.open('GET','http://celection.esy.es/getUsers.php',true);
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
											'<p class="pEstatico">Modelo:</p> <p class="pDinamico">'+ data.valores[i].modelo_equipo +'</p>'+
											'<p class="pEstatico">Marca:</p> <p class="pDinamico">'+ data.valores[i].marca_equipo +'</p>'+
											'<p class="pEstatico">Precio:</p> <p class="pDinamico">'+ data.valores[i].precio +'</p>'+
											'<p class="pEstatico">Camara:</p> <p class="pDinamico">'+ data.valores[i].camara_px +'</p>'+
											'<p class="pEstatico">Camara Frontal:</p> <p class="pDinamico">'+ data.valores[i].camara_frontal_px +'</p>'+
											'<p class="pEstatico">Memoria Interna:</p> <p class="pDinamico">'+ data.valores[i].memoria_interna +'</p>'+
											'<p class="pEstatico">Memoria Externa:</p> <p class="pDinamico">'+ data.valores[i].memoria_externa +'</p>'+
											'<p class="pEstatico">Ram:</p> <p class="pDinamico">'+ data.valores[i].ram +'</p>'+
											'<p class="pEstatico">Tamaño:</p> <p class="pDinamico">'+ data.valores[i].tamaño +'</p>'+
											'<p class="pEstatico">Resolucion de Pantalla:</p> <p class="pDinamico">'+ data.valores[i].resolucion_pantalla +'</p>'+
											'<p class="pEstatico">Gama:</p> <p class="pDinamico">'+ data.valores[i].gama +'</p>'+
										'</div>'+	
									'</div>'		
					}
					//console.log(mostrarDatos)
					document.getElementById('contenido').innerHTML = mostrarDatos
			}
		}
}
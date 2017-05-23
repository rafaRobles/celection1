selectEquipos()

function selectEquipos()
{
	var data =""
	var presupuesto =""
	var calidadCamara =""
	var memoria =""
	var desempeno = ""
	var valores = ""

	presupuesto = localStorage.getItem('presupuesto')
	calidadCamara = localStorage.getItem('calidadCamara')
	memoria = localStorage.getItem('memoria')
	desempeno = localStorage.getItem('desempeño')


	valores = 'getEquiposFiltro.php?presupuesto='+presupuesto+'&calidadCamara='+calidadCamara+"&memoria="+memoria+"&desempeño="+desempeno
	console.log(valores)
		ajax = new XMLHttpRequest();
		ajax.open('GET','http://celection.esy.es/'+valores,true);
		//ajax.open('GET',valores,true);
		ajax.setRequestHeader("Content-type", "application/json; charset=utf-8");
		ajax.setRequestHeader("Data-type", "jsonp");
		//ajax.setRequestHeader("Access-Control-Allow-Origin");
		ajax.send();
		ajax.onreadystatechange = function(){			
			if(ajax.readyState == 4 && ajax.status==200){
					data =JSON.parse(ajax.responseText)
					console.log(data)
					var mostrarDatos ="";

					if(data.valores.length == 0)
					{
						mostrarDatos += "<h2>Lo sentimos, ningun celular se acopla a tus caracterizticas</h2>"+
										"<button onclick=redirigir()>Regresar</button>"

					}
					else
					{


					
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

					}
					
					//console.log(mostrarDatos)
					document.getElementById('contenido').innerHTML = mostrarDatos
			}
		}
}


function redirigir()
{
	window.location.assign('formulario.html')
}
function sendDatos()
{
	var presupuesto="";
	var calidadCamara ="";
	var memoria ="";
	var desempeño = "";

	presupuesto = document.getElementById('presupuesto').value;


	if(document.getElementById('calidad1').checked == true)
	{
		calidadCamara = document.getElementById('calidad1').value 
	}
	else if(document.getElementById('calidad2').checked == true)
	{
		calidadCamara = document.getElementById('calidad2').value 
	}
	else if (document.getElementById('calidad3').checked == true)
	{
		calidadCamara = document.getElementById('calidad3').value 
	}


	if(document.getElementById('memoria1').checked == true)
	{
		memoria = document.getElementById('memoria1').value 
	}
	else if(document.getElementById('memoria2').checked == true)
	{
		memoria = document.getElementById('memoria2').value 
	}
	else if (document.getElementById('memoria3').checked == true)
	{
		memoria = document.getElementById('memoria3').value 
	}

	if(document.getElementById('desempeño1').checked == true)
	{
		desempeño = document.getElementById('desempeño1').value
	}
	else if(document.getElementById('desempeño2').checked == true)
	{
		desempeño = document.getElementById('desempeño2').value
	}
	else if (document.getElementById('desempeño3').checked == true)
	{
		desempeño = document.getElementById('desempeño3').value
	}


	//console.log(presupuesto)
	//console.log(calidadCamara)
	//console.log(memoria)
	//console.log(desempeño)

	localStorage.setItem('presupuesto' , presupuesto)
	localStorage.setItem('calidadCamara' , calidadCamara)
	localStorage.setItem('memoria' , memoria)
	localStorage.setItem('desempeño', desempeño)

	console.log(localStorage.getItem('presupuesto'))

	window.location.href='verEquiposFiltro.html'

	//localStorage.setItem('pregunta', numeroPregunta)
	//localStorage.getItem('puntos')

}
function sendDatos()
{
	var presupuesto="";
	var calidadCamara ="";
	var memoria ="";
	var desempeño = "";

	if(document.getElementById('presupuesto1').checked == true)
	{
		presupuesto = document.getElementById('presupuesto1').value 
	}
	else if(document.getElementById('presupuesto2').checked == true)
	{
		presupuesto = document.getElementById('presupuesto2').value 
	}
	else if (document.getElementById('presupuesto3').checked == true)
	{
		presupuesto = document.getElementById('presupuesto3').value 
	}


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



	
	if(presupuesto=="" || calidadCamara =="" || memoria =="" || desempeño == "" )
	{
		document.getElementById('bg2').style.display = "block"
		document.getElementById('msj2').style.display = "block"
		return
	}


	//console.log(presupuesto)
	//console.log(calidadCamara)
	//console.log(memoria)
	//console.log(desempeño)

	localStorage.setItem('presupuesto' , presupuesto)
	localStorage.setItem('calidadCamara' , calidadCamara)
	localStorage.setItem('memoria' , memoria)
	localStorage.setItem('desempeño', desempeño)

	console.log(localStorage.getItem('desempeño'))

	window.location.href='verEquiposFiltro.html'

	//localStorage.setItem('pregunta', numeroPregunta)
	//localStorage.getItem('puntos')

}
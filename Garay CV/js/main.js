$(document).ready(function(){

	// Slider
	if(window.location.href.indexOf('index') > -1){
	  
	  $('.galeria').bxSlider({
	    mode: 'fade',
	    captions: false,
	    slideWidth: 1200,
	    responsive: true,
	    pager: true
	  });

	}


	// Posts
	if(window.location.href.indexOf('index') > -1){
		var posts = [
			{
				title: 'APTITUDES',
				date: 'Publicado el dia ' + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
				content: 'Me considero una persona adaptable a las diferentes situaciones que puedan surgir. Con gran capacidad de creatividad y trabajo en equipo. Gran capacidad de resoluión de problemas y toma de desiciones. Centro mi labor en el conocimiento y el pensamiento crítico, apuntando siempre a la productividad y a crear climas de trabajo armónicos pero manteniendo la competitividad que hace a la calidad.'},
			{
				title: 'A DESTACAR',
				date: 'Publicado el dia ' + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
				content: 'Manejo del inglés (oral).Capacidad para negociar, tomar decisiones y resolver problemas. Puntualidad y responsabilidad. Que sean innovadores. Habilidades de comunicación. Que sepan trabajar equipo y de forma individual. Capacidad de análisis e investigación. Manejo de paquetería Office. Capacidad de organización y planificación del trabajo (priorizar actividades)'	},
			
			{
				title: '¡QUIERES SABER MAS DE MÍ?',
				date: 'Publicado el dia ' + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
				content: 'Te invito a recorrer el Curriculum para que puedas conocer mis datos de interés.'	},
			
		];
		

		posts.forEach((item, index) => {
			var post = `
				<article class="post">
					<h2>${item.title}</h2>
					<span class="date">${item.date}</span>
					<p>
						${item.content}
					</p>
					
				</article>
			`;

			$("#posts").append(post);
		});
	}


	// Selector de tema
	var theme = $("#theme");

	$("#to-green").click(function(){
		theme.attr("href", "css/green.css");
	});
	
	$("#to-red").click(function(){
		theme.attr("href", "css/red.css");
	});
	
	$("#to-blue").click(function(){
		theme.attr("href", "css/blue.css");
	});

	
	// Scroll arriba de la web
	$('.subir').click(function(e){
		e.preventDefault();

		$('html, body').animate({
			scrollTop: 0
		}, 500);

		return false;
	});

	// Login falso

	$("#login form").submit(function(){
		var form_name = $("#form_name").val();

		localStorage.setItem("form_name", form_name);

	});

	var form_name = localStorage.getItem("form_name");

	if(form_name != null && form_name != "undefined"){
		var about_parrafo = $("#about p");

		about_parrafo.html("<br><strong>Bienvenido, "+form_name+"</strong> ");
		about_parrafo.append("<a href='#' id='logout'>Cerrar sesión</a>");

		$("#login").hide();

		$("#logout").click(function(){
			localStorage.clear();
			location.reload();
		});

	}


	// Acordeon

	$(".accordion-titulo").click(function(){
		
		var contenido=$(this).next(".accordion-content");
				 
		if(contenido.css("display")=="none"){ //open		
		   contenido.slideDown(250);			
		   $(this).addClass("open");
		}
		else{ //close		
		   contenido.slideUp(250);
		   $(this).removeClass("open");	
	   }
								 
	 });

	// Reloj
	if(window.location.href.indexOf('reloj') > -1){

		setInterval(function(){
				var reloj = moment().format("hh:mm:ss");
				$('#reloj').html(reloj);
		}, 1000);
		
	
	}

	// Validación
	if(window.location.href.indexOf('contact') > -1){
	
		$("form input[name='date']").datepicker({
			dateFormat: 'dd-mm-yy'
		});

		$.validate({
		    lang: 'es',
		    errorMessagePosition: 'top',
		    scrollToTopOnError: true
		});

	}

	

});
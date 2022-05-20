////////////
///PASO 2
//para hacer la referencia al lienzo
canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");


//cambiaremos el tamaño del rover (imagen)
rover_width = 100;
rover_height = 90;


//agregamos la imagen de fondo
background_image = "mars.jpg";

//agregaremos la imagen del rover
rover_image = "rover.png";

//damos las coordenadas del rover
rover_x = 10;
rover_y = 10;

///////////////////////
//PASO 3
//creamos la función de carga
function add() {
	//el nombre de esta variable puede cambiar
	//estableceremos una nueva imagen a la variable
	background_imgTag = new Image(); //define una variable con la imagen nuevae
	//nombre de funcion declarada despues
	background_imgTag.onload = uploadBackground; // establece la función para cargar esta variable
	background_imgTag.src = background_image;   // carga la imagen

	rover_imgTag = new Image(); //define una variable para la imagen nueva
	//nombra el nombre de la funcion que se describe a continuacion
	rover_imgTag.onload = uploadrover; // establece la función para cargar esta variable
	rover_imgTag.src = rover_image;   // carga la imagen
}

///////////
//PASO 4
//descripcion de las funciones llamadas anteriormente
//para subir la imagen de fondo
function uploadBackground() {
	ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}
//usamos las variables que se crearon al inicio
function uploadrover() {
	ctx.drawImage(rover_imgTag, rover_x, rover_y, rover_width, rover_height);
}




///////////////////////////////////////////
///////////////////////////////////////////
///////////////////////////////////////////
///////////////////////////////////////////
///PAUSA para mostrar valores ASCII
///////////////////////////////////////////
///////////////////////////////////////////
///////////////////////////////////////////

//window: 
//revisaremos cuando se presione la tecla estando en ualquier lugar de la pantalla
//para que podamos obtener el valor ASCII de la tecla que se ha presionado
window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	//dccreamos la variables para verificar la tecla que se ha presionado
	keyPressed = e.keyCode;
	//mostraremos en la consola el código de la tecla presionada
	console.log(keyPressed);



	//////////////
	///////////////////////////////////////////
	////////hacer pruebas de los distintos códigos de las teclas
	///////////////////////////////////////////
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
}
//termina C84
///////////////////////////////////////////
///////////////////////////////////////////
///////////////////////////////////////////
///////////////////////////////////////////
///////////////////////////////////////////
//Hasta aqui termina C84
function up()
{
	if(rover_y >=0)
	{
		rover_y = rover_y - 10;
		console.log("When up arrow is pressed,  x = " + rover_x + " | y = " +rover_y);
		 uploadBackground();
		 uploadrover();
	}
}
function down()
{
	if(rover_y <=500)
	{
		rover_y =rover_y+ 10;
		console.log("When down arrow is pressed,  x = " + rover_x + " | y = " +rover_y);
		uploadBackground();
		 uploadrover();
	}
}
function left()
{
	if(rover_x >= 0)
	{
		rover_x =rover_x - 10;
		console.log("When left arrow is pressed,  x = " + rover_x + " | y = " +rover_y);
		uploadBackground();
		 uploadrover();
	}
}
function right()
{
	if(rover_x <= 700)
	{
		rover_x =rover_x + 10;
		console.log("When right arrow is pressed,  x = " + rover_x + " | y = " +rover_y);
		uploadBackground();
		uploadrover();
   }
}
	
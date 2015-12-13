window.onload = function(){

// Faire apparaitre a des temps aléatoire des carré boost mais qui dure X seconds
// Faire des bonus de vitesse, de taille, de vie, de score
// Faire apparaitre des triangles avec direction qui game over si contact




/*  Ici Déclaration des objets   */


	/*  creation de bubble   */
var bubble = new Path.Circle({
		center: view.center,
		radius: 20,
		fillColor : 'red',
		
	});
	/*  creation de l'effet blanc   */
	var ombre = new Path.Circle({
		center: view.center,
		radius: 8,
		fillColor : 'white',
		shadowColor: new Color(250, 250, 250),
		shadowBlur: 10,
		shadowOffset: new Point(5, 5)
		
	});
	
	/*  creation de carre   */
	var carre = new Path.Rectangle({
		point: Point.random()* view.size,
		size: [15, 15],
		strokeColor: 'black',
		fillColor : 'black' // Si option de bonus, faire des couleurs aléatoire
	});
	
	
	/*  creation de triangle   */
	
	
	
	
	
	
	
	
	
	
	
	
	
	/*  Ici manipulations des objets   */
	
	
	
	
	
	
	
	
	
	ombre.opacity = 0.4;
	
	// si carre trop proche du bord le décalé
	
	
	
	
	
	
		
	
	
	
	
	
	/*  Ici gestion des évenements   */

	
	
	 /*  gestion de la redimension de l'écran   */
	function onResize(event) {
		bubble.position = view.center;
		ombre.position = view.center;
		ombre.position += new Point(-5, -5);
		carre.point = Point.random()* view.size;
	}
	
	
	/*  gestion du mouvement de la souris   */
	function onMouseMove(event) {
	
		var destination = event.point; 				//detecter la position de la mouse
		var vector = destination - bubble.position; // Generer le vecteur de direction
		vector.length = 50; 						// Donner une taille fixe au vecteur pour une vitesse fixe
		bubble.position += vector / 30;				// Assigné le changement de position
		ombre.position += vector / 30;
		
		
		bubble.fillColor.hue += 1;
	}
	
	/*  gestion de collision carre et bubble   */
	
	

	
	
	
	
	
	
	
	
	
	/*  gestion du mouvement du triangle   */
	
	
	
	
	
	
	
	
	
	
	
	/*  gestion de collision triangle et bubble   */
	
	
	
	
	
	
	
	
	
	
	
};
function GameMapConstructor(wallSrc, cocoSrc, floorSrc, fruitSrc) {
    this.gameAreaMatrix = [                                                     // límite horizontal
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 4, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 1, 2, 2, 3, 4, 1],
      [1, 2, 1, 1, 1, 1, 1, 2, 1, 1, 1, 2, 1, 2, 1, 1, 1, 2, 1, 1, 1, 2, 1, 2, 1, 2, 2, 2, 2, 1],
      [1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 1, 2, 1, 2, 2, 2, 2, 1],
      [1, 1, 1, 1, 1, 2, 1, 1, 1, 2, 1, 1, 1, 2, 1, 1, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 2, 2, 2, 1],
      [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 2, 1, 2, 1, 2, 2, 2, 2, 1],
      [1, 2, 1, 1, 1, 2, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 2, 1, 2, 1, 2, 2, 2, 2, 1],
      [1, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 1, 2, 1, 2, 1, 2, 1, 2, 2, 2, 2, 1],
      [1, 2, 1, 2, 1, 1, 1, 1, 2, 1, 2, 2, 4, 2, 1, 2, 1, 1, 1, 2, 1, 2, 1, 2, 1, 2, 2, 2, 2, 1],
      [1, 2, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 4, 1, 2, 2, 2, 2, 1],
      [1, 2, 1, 2, 1, 2, 1, 2, 2, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 2, 1, 1, 1, 1, 2, 2, 2, 2, 1],
      [1, 2, 1, 2, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1],
      [1, 2, 1, 2, 1, 2, 1, 2, 1, 1, 1, 2, 1, 2, 1, 1, 1, 1, 1, 1, 1, 2, 1, 2, 1, 2, 2, 2, 2, 1],
      [1, 2, 2, 2, 1, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 1, 2, 2, 2, 2, 1],
      [1, 2, 1, 1, 1, 2, 1, 2, 1, 2, 1, 1, 1, 2, 1, 2, 1, 2, 1, 1, 1, 1, 1, 2, 1, 2, 2, 2, 2, 1],
      [1, 4, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 3, 1, 2, 2, 2, 4, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    ]
    this.numColumns = 25;
    this.numRows = 17;
    //Parámetros que determinan anchura/altura del rectángulo basico para dibujar el mapa
    this.basicWidth = gameArea.canvas.width/this.numColumns;
    this.basicHeight = gameArea.canvas.height/this.numRows;
    this.basicColor = "green"
    this.wall = new Image();
    this.wall.src = wallSrc;
    this.coco = new Image();
    this.coco.src = cocoSrc;
    this.cocoStyle = "white";
    this.floor = new Image();
    this.floor.src = floorSrc;
    this.fruit = new Image();
    this.fruit.src = fruitSrc;
    this.updateMap = function(ctx) {
        ctx.drawImage(this.floor, j*Math.floor(this.basicWidth), i*Math.floor(this.basicHeight), this.basicWidth, this.basicHeight);
        for(var i=0; i<this.numRows; i++){
            for(var j=0; j<this.numColumns; j++){
                if(this.gameAreaMatrix[i][j]==1){ //dibujamos pared
                    ctx.fillStyle = this.basicColor;
                    ctx.drawImage(this.wall, j*Math.floor(this.basicWidth), i*Math.floor(this.basicHeight), this.basicWidth, this.basicHeight);
                    //ctx.fillRect(j*Math.floor(this.basicWidth), i*Math.floor(this.basicHeight), this.basicWidth, this.basicHeight);
                }else if (this.gameAreaMatrix[i][j]==2) {//coco pequeño
                    ctx.fillStyle =this.cocoStyle;
                    ctx.fillRect(j*Math.floor(this.basicWidth)+8, i*Math.floor(this.basicHeight)+8, this.basicWidth/4, this.basicHeight/4);
                }else if (this.gameAreaMatrix[i][j]==3) {//cocazo
                    ctx.fillStyle =this.cocoStyle;
                    ctx.fillRect(j*Math.floor(this.basicWidth)+4, i*Math.floor(this.basicHeight)+4, this.basicWidth/2, this.basicHeight/2);
                }else if (this.gameAreaMatrix[i][j]==4) {//cherry rica
                    ctx.fillStyle =this.cocoStyle;
                    ctx.drawImage(this.fruit, j*Math.floor(this.basicWidth)-0, i*Math.floor(this.basicHeight)-0, 30, 30);
                }
            }
        }
    }
}

function Sound(src) {
    this.Sound = document.createElement("audio");
    this.Sound.src = src;
    this.Sound.setAttribute("preload", "auto");
    this.Sound.setAttribute("controls", "none");
    this.Sound.style.display = "none";
    document.body.appendChild(this.Sound);
    this.play = function(){
        this.Sound.play();
    }
    this.stop = function(){
        this.Sound.pause();
    }
}

var change="";
var pacman;
var countingInterval = 0;
var seconds = 0;
var minutes = 0;
var hours = 0;
var totaltime = 0;
var pause = false;
var soundtrack;
var reload = 0;
var maxTime = 120;
var maxScore = 60;
var miStorage = localStorage;


function start_counting(){
  totaltime = seconds + 60 * minutes + 3600 * hours;
  var counter = hours + ":" + minutes + ":" + seconds;
  seconds += 1;
  if (seconds == 60) {
		minutes += 1;
		seconds = 0;
		if (minutes == 60){
			hours += 1;
			minutes = 0;
		}
	}
	document.getElementById("counter").innerHTML = counter;

};

function component(width, height, color, x, y) {
    this.width = width;
    this.height = height;
    this.speedX = 0;
    this.speedY = 0;
    this.x = x;
    this.y = y;
    this.update = function(ctx) {
        ctx.fillStyle = color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
    this.newPos = function() {
        this.x += this.speedX;
        this.y += this.speedY;
    }
}

// Letra de las puntuaciones.
function TextComponent(size, font, x , y, color) {
    this.size = size; // en pixeles
    this.font = font;
    this.x = x;
    this.y = y;
    this.text = "";
    this.update = function() {
        gameArea.ctx.font = this.size + " " + this.font;
        gameArea.ctx.fillStyle = color;
        gameArea.ctx.fillText(this.text, this.x, this.y);
    }
}

function DynamicElemt(width, height, x , y) {
    this.gameElement = new Image();
    this.gameElement.src = "nave.png";
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.speed = 0;
    this.acceleration = 0;
    this.xSpeed = 0;
    this.ySpeed = 0;
    this.maxSpeed = 6;
    this.minSpeed = -6;
    this.angle = 0;
    this.viewAngle = 0;
    this.vectorX = Math.cos(this.angle);
    this.vectorY = Math.sin(-this.angle);
    this.update = function() {
        gameArea.ctx.save();
        gameArea.ctx.translate(this.x, this.y);
        gameArea.ctx.rotate(this.viewAngle);
        gameArea.ctx.drawImage(this.gameElement, this.width / -2, this.height / -2, this.width, this.height);
        gameArea.ctx.restore();
    }
    this.move = function() {
        this.x += this.speed * this.vectorX;
        this.y += this.speed * this.vectorY;
    }
    this.rote = function() {
        this.vectorX = Math.cos(this.angle);
        this.vectorY = Math.sin(-this.angle); //seno es impar
    }
}

var gameArea = {
    canvas:  document.getElementById("game"),
    start: function() {
        //clearInterval(countingInterval);
        //Contexto, control movimiento player, y creacion de objeto para mapa del juego
        this.ctx = this.canvas.getContext('2d');
        window.addEventListener("keydown", function(event){keyHandler(event, pacman)}, false);
        var gameMatrix = new GameMapConstructor("vaporWall.jpg", "cocoNeon.png", "vaporFloor.jpg", "guinda.png");
        //Creamos pacman a partir de Dynamic element y completamos su objeto con funciones específicas
        pacman = new DynamicElemt(27, 27, 100, 100); // tamaño y posición
        pacman.gameElement.src = "pacman.png"
        pacman.fruit = false; //control poder de fruta


        pacman.closeMouth = function() {
            pacman.gameElement.src = "pacman2.png"
            if (change != ""){
              pacman.gameElement.src = change + ".png"
            }
            setTimeout(pacman.openMouth, 300)
        }
        pacman.openMouth = function() {
            pacman.gameElement.src = "pacman.png"
            if (change != ""){
              pacman.gameElement.src = change + "2.png"
            }
            setTimeout(pacman.closeMouth, 300)
        }
        pacman.closeMouth();

        //Parte dedicada a la creación de los fantasmas a partir de DynamicElemt
        //Tomamos posición central mapa
        var mapWidthCenter = gameMatrix.numColumns*gameMatrix.basicWidth/2;
        var mapHeightCenter = gameMatrix.numRows*gameMatrix.basicHeight/2;
        var blueGhost = new DynamicElemt(32, 32, 250, 328);

        blueGhost.gameElement.src = "blueGhost.png";
        var redGhost = new DynamicElemt(32, 32, 100, 200);
        redGhost.angle = Math.PI/2; //Math.PI/2 para movimiento hacia arriba y abajo
        redGhost.gameElement.src = "redGhost.png";
        var pinkGhost = new DynamicElemt(32, 32, 150, 154);
        pinkGhost.gameElement.src = "pinkGhost.png";
        var clydeGhost = new DynamicElemt(32, 32, 500, 50);
        clydeGhost.angle = Math.PI/2;
        clydeGhost.gameElement.src = "clydeGhost.png";
        var ghostsArray = [blueGhost, redGhost, pinkGhost, clydeGhost];
        ghostsArray.forEach(function(element){
            element.speed = 1.5;
            element.weak = false; //control de debilidad
            element.alive = true; // ¿se lo comieron?
        });

        var score = new TextComponent("30px", "Arial", 0, 27, "pink"); // contador de puntos
        pacman.scoreCount = 0; //añadimos scoreCount a pacman, facilidad posterior en choques
        score.text = "SCORE: " + pacman.scoreCount;

        soundtrack = new Sound("soundtrack1.mp3");
        soundtrack.play();

        this.updateGamupdateGameeInterval = setInterval(function(){if (!pause){updateGame(gameMatrix, pacman, ghostsArray, score)}}, 20);
        countingInterval = setInterval(function(){if (!pause){start_counting()}}, 1000);
    },

    clear: function() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    },
    stop : function() {
      clearInterval(this.updateGameInterval);
      clearInterval(countingInterval);
      totaltime = 0;
      seconds = 0;
      hours = 0;
      minutes = 0;
    }
}

function buttonStart (){
  leerpuntuaciones();
    if (reload>0){//para que solo lo inicie la primera vez
      location.reload(true);

    }else{
      gameArea.stop();
      gameArea.start();
    }
    reload+=1;
}

function buttonPause (){

    if (!pause){
      pause = true;
      soundtrack.stop();
    }else{
      pause = false;
      soundtrack.play();
    }

}

function keyHandler(event, pacman) { // Aquí cambiamos la velocidad del Pacman

    switch(event.key) {
        case "ArrowUp":
            pacman.speed = 2;
            pacman.angle = Math.PI/2;
            pacman.viewAngle = -Math.PI/2;
            pacman.rote();
            break;
        case "ArrowDown":
            pacman.speed = 2;
            pacman.angle = -Math.PI/2;
            pacman.viewAngle = Math.PI/2;
            pacman.rote()
            break;
        case "ArrowLeft":
            pacman.speed = 2;
            pacman.angle = Math.PI;
            pacman.viewAngle = Math.PI;
            pacman.rote()
            break;
        case "ArrowRight":
            pacman.speed = 2;
            pacman.angle = 0;
            pacman.viewAngle = 0;
            pacman.rote()
            break;
        case " ":
            break;
        default:
            console.log("Key not handled");
    }
}

function crash(whoCrash, theCrashed) {
    var myleft = whoCrash.x;
    var myright = whoCrash.x + (whoCrash.width/1.35);
    var mytop = whoCrash.y;
    var mybottom = whoCrash.y + (whoCrash.height/1.35);
    var otherleft = theCrashed.x;
    var otherright = theCrashed.x + (theCrashed.width/1.35);
    var othertop = theCrashed.y;
    var otherbottom = theCrashed.y + (theCrashed.height/1.35);
    var crash = true;
    if ((mybottom < othertop) ||
           (mytop > otherbottom) ||
           (myright < otherleft) ||
           (myleft > otherright)) {
       crash = false;
    }
    return crash;
}

function crashWithMapControl(mapa, obj, isPlayer) {
    /*
    Controla si el objeto dinámico pasado por parámetro ha colisionado con mapa
    y toma medidas al respecto para su control. Además devuelve boolean para
    indicar si se produjo choque y poder tomar otras acciones extra.
    */
    var crashed = false;
    var mapValue = mapa.gameAreaMatrix[Math.floor((obj.y+5)/mapa.basicHeight)][Math.floor((obj.x)/mapa.basicWidth)];
    if(mapValue == 1){
        obj.speed *= -1;
        obj.move();
        obj.speed *= -1;

        crashed = true;
    }else if((mapValue == 2 || mapValue == 3) && isPlayer) {
        mapa.gameAreaMatrix[Math.floor((obj.y+5)/mapa.basicHeight)][Math.floor((obj.x)/mapa.basicWidth)] = 0;
        obj.scoreCount += 10;
        if (mapValue == 3){
            obj.scoreCount += 20;
            var points = new TextComponent("45px", "italic", obj.x, obj.y, "yellow");
            points.text = "+30";
            for (var i=0; i<1550; i++){
                points.update();
            }
        }
    }
    if(mapValue == 4 && isPlayer) {
        var height = [Math.floor((obj.y+5)/mapa.basicHeight)];
        var width = [Math.floor((obj.x)/mapa.basicWidth)];
        mapa.gameAreaMatrix[Math.floor((obj.y+5)/mapa.basicHeight)][Math.floor((obj.x)/mapa.basicWidth)] = 0;
        obj.fruit = true; // hace que los antasmas cambien a azul.
        var p = document.createElement("p");
        var message = document.createTextNode("HUNT THE GHOSTS!!!!");
        var fruitSound = new Sound("soundfruit.mp3");
        fruitSound.play();
        var num = Math.floor(Math.random() * 10);
        setTimeout(function mens(){ // eliminamos mensaje "Hunt the ghost"
          p.removeChild(message);
          mapa.gameAreaMatrix[height][width] = 4;
        },(1000 * num))
        p.appendChild(message);
        p.setAttribute('id', 'message')
        p.style.color = "green";
        document.body.appendChild(p);
        //console.log(p.childNodes[0])
        p.childNodes[0].value = message; // Ni idea de esto.
    }
    return crashed;
}

function returnGhost (a){
  setTimeout(function jejejej(){
    a[0].gameElement.src = "./blueGhost.png"; // aquí le pasamos la dirección de los fantasmas.
    a[1].gameElement.src = "./redGhost.png";
    a[2].gameElement.src = "./pinkGhost.png";
    a[3].gameElement.src = "./clydeGhost.png";
    a[0].weak = false;
    a[1].weak = false;
    a[2].weak = false;
    a[3].weak = false;
  },5000); // 5 segundos tardan en volver al estado normal los fantasmas.
}

function updateGame(mapa, pacman, ghostsArray, score) {
    //Actualizamos fondo, mapa y score
    var fondo = new component(gameArea.canvas.width, gameArea.canvas.height, "black", 0,0);
    fondo.update(gameArea.ctx);
    gameArea.ctx.drawImage(mapa.floor, 0,0, gameArea.canvas.width, gameArea.canvas.height);
    mapa.updateMap(gameArea.ctx);
    score.text = "SCORE: " + pacman.scoreCount;
    score.update()

    //movimiento y dibujado pacman
    pacman.move();
    crashWithMapControl(mapa, pacman, true)
    pacman.update();
    //control y dibujado de los fantasmas
    ghostsArray.forEach(function(element){
        element.move();

        if (crashWithMapControl(mapa, element, false)) {
            var direction = Math.floor(Math.random() * 4)
            element.angle += Math.PI/2 * direction;
            element.rote();
        }
        if (pacman.fruit && !element.weak){
            element.angle += Math.PI; // cambio de sentido
            element.rote();
            element.gameElement.src = "oldGhost.gif";
            element.weak = true;
            returnGhost(ghostsArray);

        }

        if (crash(element, pacman)){
            if (element.weak){
                element.alive = false;
            }else{
                gameArea.stop()
                var loser = document.createElement("img");
                loser.src = "loser.gif";
                loser.id = "winner";
                loser.width = window.innerWidth;
                loser.height = window.innerHeight;
                //win.setAttribute("onclick", "hideimage()");
                document.getElementById("slider").appendChild(loser);
                if (window.confirm("Perdiste, ¿Quieres volver a jugar?") == true) {
                    location.reload(true);
                }
                else{
                  location.reload(true);
                }
            }
        }
        if (element.alive){
            element.update();
        }
    });
    pacman.fruit = false;

    if (pacman.scoreCount == maxScore){ // Puntuación máxima -> 2170
      var puntuacionextra = maxTime - totaltime;
      pacman.scoreCount += puntuacionextra;
      var nickname = prompt("Write your name", "Your Name");

      if (localStorage.getItem(localStorage.key(0)) < pacman.scoreCount){
        localStorage.setItem(nickname, pacman.scoreCount);
        document.getElementById("highscore_local").innerHTML = localStorage.key(0) + "->" + localStorage.getItem(nickname);
      }

      sessionStorage.setItem(nickname, pacman.scoreCount);
      document.getElementById("highscore_sesion").innerHTML = sessionStorage.key(0) + "->" + sessionStorage.getItem(nickname);

      gameArea.stop();
      soundtrack.stop();

      var win = document.createElement("img");
      win.src = "winner.gif";
      win.id = "winner";
      win.width = window.innerWidth;
      win.height = window.innerHeight;
      //win.setAttribute("onclick", "hideimage()");
      document.getElementById("slider").appendChild(win);

      if(window.confirm("¡GANASTE! ¿Quieres volver a jugar?") == true){
        location.reload(true);
        //gameArea.start();
      }
      else{
        location.reload(true);
      }
    }

    if (totaltime >= maxTime){ // Tiempo máximo de juego en segundos
      gameArea.stop()
      var timegif = document.createElement("img");
      timegif.src = "time.gif";
      timegif.id = "winner";
      timegif.width = window.innerWidth;
      timegif.height = window.innerHeight;
      //win.setAttribute("onclick", "hideimage()");
      document.getElementById("slider").appendChild(timegif);
      if (window.confirm("¡Se te acabó el tiempo! ¿Juegas de nuevo?") == true) {
        location.reload(true);
      }
      else{
        location.reload(true);
      }
    }
}

function leerpuntuaciones(){
  if (typeof(Storage) !== "undefined"){
    if (sessionStorage.key(0)!= null ){
      document.getElementById("highscore_sesion").innerHTML = "HIGHSCORE LOCAL: " + sessionStorage.key(0) + "->" + sessionStorage.getItem(sessionStorage.key(0));

    }else{
      document.getElementById("highscore_sesion").innerHTML = "HIGHSCORE LOCAL: No hay datos";
    }
    if (localStorage.key(0)!= null ){
      document.getElementById("highscore_local").innerHTML = "HIGHSCORE LOCAL: " + localStorage.key(0) + "->" + localStorage.getItem(localStorage.key(0));
    }else{
      document.getElementById("highscore_local").innerHTML = "HIGHSCORE LOCAL: No hay datos";
    }

  }else{
    document.getElementById("highscore_total").innerHTML = "Tu navegador no lo soporta";
  }

}

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {

    var anterior = document.getElementById("drag4").src;
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
    change = ev.target.appendChild(document.getElementById(data)).src;
    document.getElementById("drag4").src = change;
    change = change.split("/");
  	change = change[change.length-1].split(".")[0];

    var input = document.createElement("img");
    input.setAttribute("id", data);
    input.setAttribute("draggable", "true");
    input.setAttribute("ondragstart", "drag(event)");
    input.setAttribute("src", anterior);
    input.setAttribute("width", "100px");
    input.setAttribute("height", "100px");
    $(".añadidos").appendChild(input);
    function $ (selector){
      return document.querySelector(selector);
    }
}

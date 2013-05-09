  var canvas = null;
	var img = null;
	var imageReady = false;
	var frame = 0;
	var xpos = 0; 
	var ypos = 40;
	var coinArray = [];
	var background = null;
	
	document.write("<script src='./keyhandler.js' type='text/javascript'></script>");
	
	function dist(p, q)
    {	
    	//calculating distance using two points - this function works
    	var f1 = (p[0] - q[0])*(p[0] - q[0]);
    	var f2 = (p[1] - q[1])*(p[1] - q[1]);
    	var distance = Math.sqrt(f1 + f2);
    	return distance
	}
	function myCoin(image, x, y)
	{
		//this.img.src = './coin.png';
		this.img = new Image();
		this.img.src = image;
		this.coord = [x, y];
		this.center = [x + 10, y - 10];
		this.radius = 10;

	}
	
	function myGuy(image, xpos, ypos)
	{
		
		//not calling this function anywhere at the moment
		//justrunningguy.png is 376 x 94 and the window is 94 x 94
		this.img = new Image();
		this.img.src = image;
		this.coord= [xpos, ypos]
		this.center = [xpos + 47, ypos - 47]
		this.radius = 47
		this.xpos = xpos;
		this.ypos = ypos;
	}
	
	function initCoinPlacement()
	{
		//coin.png is 20 x 20
		var x1 = 100;
		var y1 = 100;
		for (i=0;i<10;i++) {
			var coin = new myCoin('./coin.png', x1, y1);
			coinArray.push(coin)
			x1 = x1 + 60
			}
	}
	function collect_program() {
    	canvas = document.getElementById('gameCanvas');
		resize();
		initCoinPlacement();
		img = new Image();
		img.src = './justrunningguy.png';
		background = new Image();
		background.src = './islandbackground.png';
		img.onload = loaded();
		redraw()
	}
	
	
    function onload() {
    	canvas = document.getElementById('gameCanvas');
		resize();
		initCoinPlacement();
		img = new Image();
		img.src = './justrunningguy.png';
		background = new Image();
		background.src = './islandbackground.png';
		img.onload = loaded();
		redraw()
	}
	function loaded() {
		imageReady = true;
//		setTimeout( update, 1000 / 60 );
//	  redraw();
	}
	function update() {
		redraw();
		frame++;
	 	if (frame >= 3) frame = 0;
//		setTimeout( update, 2000 / 60 );
	}
	function resize() {
		canvas.width = canvas.parentNode.clientWidth;
	  	canvas.height = canvas.parentNode.clientHeight;
      	redraw();
    }
	function redraw() {
		var ctx = canvas.getContext("2d");
		//ctx.fillStyle = '#000000';
		//ctx.fillStyle = '#ffffff';
		
//	      ctx.fillRect(0, 0, canvas.width, canvas.height);
//	      ctx.fillStyle = '#333333';
//	      ctx.fillRect(canvas.width / 3, canvas.height / 3,
//	                   canvas.width / 3, canvas.height / 3);
		if (imageReady)  
		{	
//			ctx.drawImage(img, canvas.width/2 - (img.width/2), canvas.height/2 - (img.height/2));
			
			// in this one, frame is the x position of the picture
//			ctx.drawImage(img, frame, canvas.height/2 - (img.height/2));
//			ctx.drawImage(img, 0, 0, 96, 54, canvas.width/2 - 48, canvas.height/2 - 48, 96, 54);

			// in this one, frame*94 is the leftmost position of the frame on the strip
			ctx.drawImage(background, 0 , 0);
			ctx.drawImage(img, frame*94, 0, 94, 94, xpos, ypos, 94, 94);

//			xpos +=10;
//			if (xpos >= canvas.width)
//				xpos = 0;

			//drawing an array of coins - need to loop through them instead of 
			for (i=0;i<10;i++) {
				ctx.drawImage(coinArray[i].img, coinArray[i].coord[0], coinArray[i].coord[1]);
			}
		}
	}

	function isCollision(coin)
	{
		if (xpos == 100)
		{
			var snd = new Audio("jump.wav"); // buffers automatically when created
			snd.play();	
		}
		if (xpos == 200)
		{
			var snd = new Audio("jump.wav"); // buffers automatically when created
			snd.play();
		}
		
		/* for (i=0;i<10;i++) {
			if (coinArray[i].xpos == xpos+47) 	// replace with distance calc
				snd.play();
		}
		*/
	}
/*	
	function keydownhandler(evtobj) {
		//var evtobj=window.event? event : e //distinguish between IE's explicit event object (window.event) and Firefox's implicit.
		var unicode=evtobj.charCode? evtobj.charCode : evtobj.keyCode
		if (unicode == 39) //right arrow
		{
			xpos += 5;
			if (xpos >= canvas.width)
				xpos = 0;
			update();
		}
		if (unicode == 37) // left arrow
		{
			xpos -=5;
			if (xpos <=0)
			{
				// if we get to the left, stop moving and play a sound
				//xpos = canvas.width;
				var snd = new Audio("explosion.wav"); // buffers automatically when created
				snd.play();
				// to be done - find out whether we are running IE or an older browser that can't play
				// need additional logic to figure out how to play depending on browser / version
				//var snd = (new Audio()).canPlayType("audio/ogg; codecs=vorbis")
				xpos = 0;
			}
			update();
		}
		if (unicode == 40)//up arrow
		{
			ypos += 5;
			if (ypos >=canvas.height)
				ypos = 0;
			update();
		}
		if (unicode == 38)//down arrow
		{
			ypos -= 5;
			if (ypos <=0)
				ypos = canvas.height;
			update();
		}
		isCollision(coinArray[7]);
	}
*/	


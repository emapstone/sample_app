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

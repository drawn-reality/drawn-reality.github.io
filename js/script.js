document.addEventListener('DOMContentLoaded',function() {
	var context;
	var adjCanvasHeight, adjCanvasWidth, draw, numSquares, squareSize;

	squareSize = 20.0;

	context = document.getElementById('acanvas').getContext('2d');
	context.canvas.width = window.innerWidth;
	context.canvas.height = window.innerHeight;

	adjCanvasWidth = Math.ceil(context.canvas.width / squareSize);
	adjCanvasHeight = Math.ceil(context.canvas.height / squareSize);

	numSquares = adjCanvasWidth * adjCanvasHeight;

	window.onresize = function() {
		context.canvas.width = window.innerWidth;
		context.canvas.height = window.innerHeight;
	
		adjCanvasWidth = Math.ceil(context.canvas.width / squareSize);
		adjCanvasHeight = Math.ceil(context.canvas.height / squareSize);

		numSquares = adjCanvasWidth * adjCanvasHeight;
		return true;
	};

	draw = function() {
	  var color, i, topLeftX, topLeftY, _i, _results;
	  for (i = _i = 0; 0 <= numSquares ? _i <= numSquares : _i >= numSquares; i = 0 <= numSquares ? ++_i : --_i) {
	    topLeftX = squareSize * Math.floor(Math.random() * adjCanvasWidth);
	    topLeftY = squareSize * Math.floor(Math.random() * adjCanvasHeight);
	    color = Math.floor(255 * (0.95 + 0.05 * Math.random()));
	    context.fillStyle = "rgb(" + color + "," + color + "," + color + ")";
	    context.fillRect(topLeftX, topLeftY, squareSize, squareSize)
	  }
	};
	setInterval(draw, 100);
});
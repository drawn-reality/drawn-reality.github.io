$(document).ready(function() {
	var context;
	var adjCanvasHeight, adjCanvasWidth, draw, numSquares, squareSize;

	squareSize = 20.0;

	context = document.getElementById('acanvas').getContext('2d');
	context.canvas.width = window.innerWidth;
	context.canvas.height = window.innerHeight;

	adjCanvasWidth = Math.ceil(context.canvas.width / squareSize);
	adjCanvasHeight = Math.ceil(context.canvas.height / squareSize);

	numSquares = adjCanvasWidth * adjCanvasHeight;

	$(window).resize(function() {
		context = $('#acanvas')[0].getContext('2d');
		context.canvas.width = window.innerWidth;
		context.canvas.height = window.innerHeight;
	
		adjCanvasWidth = Math.ceil(context.canvas.width / squareSize);
		adjCanvasHeight = Math.ceil(context.canvas.height / squareSize);

		numSquares = adjCanvasWidth * adjCanvasHeight;
	});

	draw = function() {
	  var color, ctx, i, topLeftX, topLeftY, _i, _results;
	  ctx = document.getElementById('acanvas').getContext('2d');
	  for (i = _i = 0; 0 <= numSquares ? _i <= numSquares : _i >= numSquares; i = 0 <= numSquares ? ++_i : --_i) {
	    topLeftX = squareSize * Math.floor(Math.random() * adjCanvasWidth);
	    topLeftY = squareSize * Math.floor(Math.random() * adjCanvasHeight);
	    color = Math.floor(255 * (0.95 + 0.05 * Math.random()));
	    ctx.fillStyle = "rgb(" + color + "," + color + "," + color + ")";
	    ctx.fillRect(topLeftX, topLeftY, squareSize, squareSize)
	  }
	};
	setInterval(draw, 100);
});
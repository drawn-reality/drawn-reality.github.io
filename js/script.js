$(document).ready(function() {
	var context;
	context = $('#acanvas')[0].getContext('2d');
	context.canvas.width = window.innerWidth;
	context.canvas.height = window.innerHeight;
	return $(window).resize(function() {
		context = $('#acanvas')[0].getContext('2d');
		context.canvas.width = window.innerWidth;
		return context.canvas.height = window.innerHeight;
	});
});
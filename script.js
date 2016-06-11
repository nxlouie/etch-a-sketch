$(document).ready(function(){

	createNewGrid(32,32);
});

function clearFunction(){
	$('#container').empty();
	var length = prompt("Length:");
	var width  = prompt("Width:");

	createNewGrid(length, width);
}


function createNewGrid(length, width){
	var addRow = '<div class="row"></div>';
	var addBox = '<div class="box"></div>';

	var boxDim = 960 / length;

	if((960 / width) < boxDim){
		boxDim = 960/width;
	};



	for(var i = 0; i < length; i++){
		$('#container').append(addRow);
	}
	for(var j = 0; j < width; j++){
		$('.row').append(addBox);
	}

	$('.box').css('height',boxDim + "px");
	$('.box').css('width',boxDim + "px");

	$(".box").hover(function(){
		$(this).css("background-color","black");
	});
}

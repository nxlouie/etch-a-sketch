$(document).ready(function(){
	var addRow = '<div class="row"></div>';
	var addBox = '<div class="box"></div>';

	for(var i = 0; i < 32; i++){
		$('#container').append(addRow);
	}
	for(var j = 0; j < 32; j++){
		$('.row').append(addBox);
	}


	$(".box").hover(function(){
	$(this).css("background-color","black");
	});

})


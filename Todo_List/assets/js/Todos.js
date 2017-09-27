$('ul').on('click','li',function(){
	$(this).toggleClass('completed');
})


$('ul').on('click','span',function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	event.stopPropagation();
});

$('input').on('keypress',function(event){
	//Check the value for the enter key is 13
	if (event.which === 13){
		var Todos = $(this).val();
		$(this).val('');
		var New_todo = '<li><span><i class="fa fa-certificate" aria-hidden="true"></i></span> ' + Todos + '</li>';
		$('ul').append(New_todo);
	}
})


$('#add_new_todo').on('click',function(){
	$('input').fadeToggle();
});
var searchInput=$('#search');
var content=searchInput.val();
searchInput.focus(function(){
	if(content==searchInput.val()){
	$(this).val("");
	}
});
searchInput.blur(function(){
	if ($(this).val()==""){
		$(this).val(content);
	}
});



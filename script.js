unction goToByScroll(id){
    $('html,body').animate({scrollTop:
	$("#"+id).offset().top}, .001);
    return false;
}

$('.dropdown-item').click(function(event){
    event.preventDefault();
});
$('.nav-item').click(function(event){
    event.preventDefault();
});

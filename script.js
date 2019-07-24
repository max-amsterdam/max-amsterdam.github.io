function goToByScroll(id){
    $('html,body').animate({scrollTop:
	$("#"+id).offset().top -50}, .001);
    return false;
}

$('body').scrollspy({ target: '', offset: 50});

$('.dropdown-item').click(function(event){
    event.preventDefault();
});
$('.nav-item').click(function(event){
    event.preventDefault();
});

//$(document).ready(function() {
//    checkSize();
//
//    $(window).resize(checkSize);
//
//});
//
//function checkSize(){
//    if($('#dropdown').css("display") == "block"){
//	$('#main-content').toggleClass('offset-4');
//    }
//}

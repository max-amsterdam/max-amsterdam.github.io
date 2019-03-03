function goToByScroll(id){
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

//scroll animate
$('.page-scroll').on('click',function(e){
	var tujuan=$(this).attr('href');

	var elemenTujuan=$(tujuan);

	$('body').animate({
	scrollTop:elemenTujuan.offset().top
	},{easing:'swing'});
});

$('#tombol').click(function(){
	console.log($("body").scrollTop(300));
	$('body').animate({height:250,width:400},{easing:'swing'});

});

//password Birthday
function passwordBdButton(){
	var passbdasli="anjaymabar";
	var inputPassBd=document.getElementById('BdInput').value;
	if(inputPassBd==passbdasli){
		alert("Correct");
		window.open("https://asqallani.github.io/bday","_blank");
	}
	else{
		alert("Salah");
}}


//showhide Birthday password
$('#BdForm').hide();

$('#birthday').each(function(){
	$(this).click(function(){
	var boolBirthday=true;
	$('#BdForm').toggle();
	$('#BdForm').animate({height:250,width:300},{easing:'swing'});
});
});


//about
	$(window).on('load',function(){
		$('.pKiri').addClass('muncul');
		$('.pKanan').addClass('muncul');
	});


//parallax
$(window).scroll(function(){

	//jumbotron
	var wScroll=$(this).scrollTop();

	$('.jumbotron img').css({
		'transform' : 'translate(0px,'+ wScroll/4 +'%)'
	});

	$('.jumbotron h1').css({
		'transform' : 'translate(0px,'+ wScroll*3 +'%)'
	});

	$('.jumbotron p').css({
		'transform' : 'translate(0px,'+ wScroll*5 +'%)'
	});







	//portfolio
	if(wScroll>$('.portfolio').offset().top -250){
		$('.portfolio .img-thumbnail').each(function(i){
			setTimeout(function(){
				$('.portfolio .img-thumbnail').eq(i).addClass('muncul');

			},350*i+1);
			
		});
		
	}


	//contact
	if(wScroll>$('.contact').offset().top -250){
		$('.formparallax').each(function(i){
			setTimeout(function(){
				$('.formparallax').eq(i).addClass('muncul');
			},350*i+1);
			
		});
		
	}
});





//last
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


//last
//scroll animate
$('.page-scroll').on('click',function(e){
	var tujuan=$(this).attr('href');

	var elemenTujuan=$(tujuan);

	$('body').scrollTop(elemenTujuan.offset().top);
	
});


//password Birthday
function passwordBdButton(){
	var passbdasli="anjaymabar";
	var inputPassBd=document.getElementById('BdInput').value;
	if(inputPassBd==passbdasli){
		location.href="https://asqallani.github.io/bday";
	}
	else{
		alert("Salah Njing");	
}}


//showhide Birthday password
$('#BdForm').hide();
$('#birthday').on('click',function(){
	$('#BdForm').toggle();
});




//last
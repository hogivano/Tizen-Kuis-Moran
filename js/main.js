var id = '1';
var count = 0; // dalam detik

/*$(document).ready(function(){
	if ($("body").attr("id") == "#main"){
		$("music").attr("src", "./lagu/background.mp3");
		$("#music").attr("autoplay", "true");
		$("#music").attr("preload", "auto");
		var oke = tizen.application.getCurrentApplication();
		console.log(oke);
	}
})*/

function test(){
	if ($("body").attr("id") == "#main"){
		/*$("music").attr("src", "./lagu/background.mp3");*/
		$("#music").attr("autoplay", "true");
		/*$("#music").attr("preload", "auto");*/
		var oke = tizen.application.getCurrentApplication();
		console.log(oke);
	}
}

function soalTidur(){
/*	var random = [1,2,3,4];	
	var jawab = ['c', 'a', 'a', 'c'];
*/	/*$('#1').on('click', function (){
	});*/
	id = '#' + id;	
	$(id).fadeIn("slow");
	count = 30;
	countDown();
	/*$('.btn-jawaban').addClass('.jawaban1');*/
	/*if (id == '#1' && ){
	}*/
	$('.jawaban1').on('click', function(){
		if($(this).attr('id') === 'c'){
			$("#musiksoal").attr("src","../lagu/benar.mp3");
			$(id).css('display','none');
			id = '#2';
			$(id).fadeIn("slow");
		} else{
			$(id).fadeTo("slow",0.1);
			$("#waktu").fadeTo("slow",0.1);
			$("#tatacara").fadeTo("slow",0.1);
			$("#musiksoal").attr("src","../lagu/salah.mp3");
			$(".btn-jawaban").prop({disabled:true});
			$("#salah").fadeIn('slow');
			redirect(3,"../play.html");
			/*$("#salah").css("display", "block");*/
			/*alert('salah');*/
		}
	});
	
	$('.jawaban2').on('click', function (){
		if ($(this).attr('id') === 'a'){
			$("#musiksoal").attr("src","../lagu/benar.mp3");
			$(id).css('display', 'none');
			id = '#3';
			$(id).fadeIn("slow");
		} else {
			$(id).fadeTo("slow",0.1);
			$("#waktu").fadeTo("slow",0.1);
			$("#tatacara").fadeTo("slow",0.1);
			$("#musiksoal").attr("src","../lagu/salah.mp3");
			$(".btn-jawaban").prop({disabled:true});
			$("#salah").fadeIn('slow');	
			redirect(3,"../play.html");
		}
	});
	
	$('.jawaban3').on('click', function (){
		if($(this).attr('id') === 'a'){
			$("#musiksoal").attr("src","../lagu/benar.mp3");
			$(id).css('display', 'none');
			id = '#4';
			$(id).fadeIn("slow");
		} else {
			$(id).fadeTo("slow",0.1);
			$("#waktu").fadeTo("slow",0.1);
			$("#tatacara").fadeTo("slow",0.1);
			$("#musiksoal").attr("src","../lagu/salah.mp3");
			$(".btn-jawaban").prop({disabled:true});
			$("#salah").fadeIn('slow');
			redirect(3,"../play.html");
		}
	});
	
	$('.jawaban4').on('click', function (){
		if($(this).attr('id') === 'c'){
			$(id).fadeTo("slow", 0.1);
			$("#waktu").fadeTo("slow",0.1);
			$("#tatacara").fadeTo("slow",0.1);
			$("#musiksoal").attr("src","../lagu/menang.mp3");
			$(".btn-jawaban").prop({disabled:true});
			$("#selesai").fadeIn('slow');
			redirect(5,"../play.html");
		} else {
			$(id).fadeTo("slow",0.1);
			$("#waktu").fadeTo("slow",0.1);
			$("#tatacara").fadeTo("slow",0.1);
			$("#musiksoal").attr("src","../lagu/salah.mp3");
			$(".btn-jawaban").prop({disabled:true});
			$("#salah").fadeIn('slow');
			redirect(3,"../play.html");
		}
	});
}

function soalBermain(){
	id = '#' + id;	
	$(id).fadeIn("slow");
	count = 30;
	countDown();
	
	$('.jawaban1').on('click', function(){
		if($(this).attr('id') === 'd'){
			$("#musiksoal").attr("src","../lagu/benar.mp3");
			$(id).css('display','none');
			id = '#2';
			$(id).fadeIn("slow");
		} else{
			$(id).fadeTo("slow",0.1);
			$("#waktu").fadeTo("slow",0.1);
			$("#tatacara").fadeTo("slow",0.1);
			$("#musiksoal").attr("src","../lagu/salah.mp3");
			$(".btn-jawaban").prop({disabled:true});
			$("#salah").fadeIn('slow');
			redirect(3,"../play.html");
			/*$("#salah").css("display", "block");*/
			/*alert('salah');*/
		}
	});
	
	$('.jawaban2').on('click', function (){
		if ($(this).attr('id') === 'b'){
			$("#musiksoal").attr("src","../lagu/benar.mp3");
			$(id).css('display', 'none');
			id = '#3';
			$(id).fadeIn("slow");
		} else {
			$(id).fadeTo("slow",0.1);
			$("#waktu").fadeTo("slow",0.1);
			$("#tatacara").fadeTo("slow",0.1);
			$("#musiksoal").attr("src","../lagu/salah.mp3");
			$(".btn-jawaban").prop({disabled:true});
			$("#salah").fadeIn('slow');	
			redirect(3,"../play.html");
		}
	});
	
	$('.jawaban3').on('click', function (){
		if($(this).attr('id') === 'a'){
			$("#musiksoal").attr("src","../lagu/benar.mp3");
			$(id).css('display', 'none');
			id = '#4';
			$(id).fadeIn("slow");
		} else {
			$(id).fadeTo("slow",0.1);
			$("#waktu").fadeTo("slow",0.1);
			$("#tatacara").fadeTo("slow",0.1);
			$("#musiksoal").attr("src","../lagu/salah.mp3");
			$(".btn-jawaban").prop({disabled:true});
			$("#salah").fadeIn('slow');
			redirect(3,"../play.html");
		}
	});
	
	$('.jawaban4').on('click', function (){
		if($(this).attr('id') === 'a'){
			$(id).fadeTo("slow", 0.1);
			$("#waktu").fadeTo("slow",0.1);
			$("#tatacara").fadeTo("slow",0.1);
			$("#musiksoal").attr("src","../lagu/menang.mp3");
			$(".btn-jawaban").prop({disabled:true});
			$("#selesai").fadeIn('slow');
			redirect(5,"../play.html");
		} else {
			$(id).fadeTo("slow",0.1);
			$("#waktu").fadeTo("slow",0.1);
			$("#tatacara").fadeTo("slow",0.1);
			$("#musiksoal").attr("src","../lagu/salah.mp3");
			$(".btn-jawaban").prop({disabled:true});
			$("#salah").fadeIn('slow');
			redirect(3,"../play.html");
		}
	});
}

function soalMakan(){
	id = '#' + id;	
	$(id).fadeIn("slow");
	count = 30;
	countDown();
	
	$('.jawaban1').on('click', function(){
		if($(this).attr('id') === 'c'){
			$("#musiksoal").attr("src","../lagu/benar.mp3");
			$(id).css('display','none');
			id = '#2';
			$(id).fadeIn("slow");
		} else{
			$(id).fadeTo("slow",0.1);
			$("#waktu").fadeTo("slow",0.1);
			$("#tatacara").fadeTo("slow",0.1);
			$("#musiksoal").attr("src","../lagu/salah.mp3");
			$(".btn-jawaban").prop({disabled:true});
			$("#salah").fadeIn('slow');
			redirect(3,"../play.html");
			/*$("#salah").css("display", "block");*/
			/*alert('salah');*/
		}
	});
	
	$('.jawaban2').on('click', function (){
		if ($(this).attr('id') === 'b'){
			$("#musiksoal").attr("src","../lagu/benar.mp3");
			$(id).css('display', 'none');
			id = '#3';
			$(id).fadeIn("slow");
		} else {
			$(id).fadeTo("slow",0.1);
			$("#waktu").fadeTo("slow",0.1);
			$("#tatacara").fadeTo("slow",0.1);
			$("#musiksoal").attr("src","../lagu/salah.mp3");
			$(".btn-jawaban").prop({disabled:true});
			$("#salah").fadeIn('slow');	
			redirect(3,"../play.html");
		}
	});
	
	$('.jawaban3').on('click', function (){
		if($(this).attr('id') === 'd'){
			$("#musiksoal").attr("src","../lagu/benar.mp3");
			$(id).css('display', 'none');
			id = '#4';
			$(id).fadeIn("slow");
		} else {
			$(id).fadeTo("slow",0.1);
			$("#waktu").fadeTo("slow",0.1);
			$("#tatacara").fadeTo("slow",0.1);
			$("#musiksoal").attr("src","../lagu/salah.mp3");
			$(".btn-jawaban").prop({disabled:true});
			$("#salah").fadeIn('slow');
			redirect(3,"../play.html");
		}
	});
	
	$('.jawaban4').on('click', function (){
		if($(this).attr('id') === 'a'){
			$(id).fadeTo("slow", 0.1);
			$("#waktu").fadeTo("slow",0.1);
			$("#tatacara").fadeTo("slow",0.1);
			$("#musiksoal").attr("src","../lagu/menang.mp3");
			$(".btn-jawaban").prop({disabled:true});
			$("#selesai").fadeIn('slow');
			redirect(5,"../play.html");
		} else {
			$(id).fadeTo("slow",0.1);
			$("#waktu").fadeTo("slow",0.1);
			$("#tatacara").fadeTo("slow",0.1);
			$("#musiksoal").attr("src","../lagu/salah.mp3");
			$(".btn-jawaban").prop({disabled:true});
			$("#salah").fadeIn('slow');
			redirect(3,"../play.html");
		}
	});
}

function soalBelajar(){
	id = '#' + id;	
	$(id).fadeIn("slow");
	count = 30;
	countDown();
	
	$('.jawaban1').on('click', function(){
		if($(this).attr('id') === 'b'){
			$("#musiksoal").attr("src","../lagu/benar.mp3");
			$(id).css('display','none');
			id = '#2';
			$(id).fadeIn("slow");
		} else{
			$(id).fadeTo("slow",0.1);
			$("#waktu").fadeTo("slow",0.1);
			$("#tatacara").fadeTo("slow",0.1);
			$("#musiksoal").attr("src","../lagu/salah.mp3");
			$(".btn-jawaban").prop({disabled:true});
			$("#salah").fadeIn('slow');
			redirect(3,"../play.html");
			/*$("#salah").css("display", "block");*/
			/*alert('salah');*/
		}
	});
	
	$('.jawaban2').on('click', function (){
		if ($(this).attr('id') === 'a'){
			$("#musiksoal").attr("src","../lagu/benar.mp3");
			$(id).css('display', 'none');
			id = '#3';
			$(id).fadeIn("slow");
		} else {
			$(id).fadeTo("slow",0.1);
			$("#waktu").fadeTo("slow",0.1);
			$("#tatacara").fadeTo("slow",0.1);
			$("#musiksoal").attr("src","../lagu/salah.mp3");
			$(".btn-jawaban").prop({disabled:true});
			$("#salah").fadeIn('slow');	
			redirect(3,"../play.html");
		}
	});
	
	$('.jawaban3').on('click', function (){
		if($(this).attr('id') === 'b'){
			$("#musiksoal").attr("src","../lagu/benar.mp3");
			$(id).css('display', 'none');
			id = '#4';
			$(id).fadeIn("slow");
		} else {
			$(id).fadeTo("slow",0.1);
			$("#waktu").fadeTo("slow",0.1);
			$("#tatacara").fadeTo("slow",0.1);
			$("#musiksoal").attr("src","../lagu/salah.mp3");
			$(".btn-jawaban").prop({disabled:true});
			$("#salah").fadeIn('slow');
			redirect(3,"../play.html");
		}
	});
	
	$('.jawaban4').on('click', function (){
		if($(this).attr('id') === 'd'){
			$(id).fadeTo("slow", 0.1);
			$("#waktu").fadeTo("slow",0.1);
			$("#tatacara").fadeTo("slow",0.1);
			$("#musiksoal").attr("src","../lagu/menang.mp3");
			$(".btn-jawaban").prop({disabled:true});
			$("#selesai").fadeIn('slow');
			redirect(5,"../play.html");
		} else {
			$(id).fadeTo("slow",0.1);
			$("#waktu").fadeTo("slow",0.1);
			$("#tatacara").fadeTo("slow",0.1);
			$("#musiksoal").attr("src","../lagu/salah.mp3");
			$(".btn-jawaban").prop({disabled:true});
			$("#salah").fadeIn('slow');
			redirect(3,"../play.html");
		}
	});
}

function soalSekolah(){
	id = '#' + id;	
	$(id).fadeIn("slow");
	count = 30;
	countDown();
	
	$('.jawaban1').on('click', function(){
		if($(this).attr('id') === 'b'){
			$("#musiksoal").attr("src","../lagu/benar.mp3");
			$(id).css('display','none');
			id = '#2';
			$(id).fadeIn("slow");
		} else{
			$(id).fadeTo("slow",0.1);
			$("#waktu").fadeTo("slow",0.1);
			$("#tatacara").fadeTo("slow",0.1);
			$("#musiksoal").attr("src","../lagu/salah.mp3");
			$(".btn-jawaban").prop({disabled:true});
			$("#salah").fadeIn('slow');
			redirect(3,"../play.html");
			/*$("#salah").css("display", "block");*/
			/*alert('salah');*/
		}
	});
	
	$('.jawaban2').on('click', function (){
		if ($(this).attr('id') === 'a'){
			$("#musiksoal").attr("src","../lagu/benar.mp3");
			$(id).css('display', 'none');
			id = '#3';
			$(id).fadeIn("slow");
		} else {
			$(id).fadeTo("slow",0.1);
			$("#waktu").fadeTo("slow",0.1);
			$("#tatacara").fadeTo("slow",0.1);
			$("#musiksoal").attr("src","../lagu/salah.mp3");
			$(".btn-jawaban").prop({disabled:true});
			$("#salah").fadeIn('slow');	
			redirect(3,"../play.html");
		}
	});
	
	$('.jawaban3').on('click', function (){
		if($(this).attr('id') === 'c'){
			$("#musiksoal").attr("src","../lagu/benar.mp3");
			$(id).css('display', 'none');
			id = '#4';
			$(id).fadeIn("slow");
		} else {
			$(id).fadeTo("slow",0.1);
			$("#waktu").fadeTo("slow",0.1);
			$("#tatacara").fadeTo("slow",0.1);
			$("#musiksoal").attr("src","../lagu/salah.mp3");
			$(".btn-jawaban").prop({disabled:true});
			$("#salah").fadeIn('slow');
			redirect(3,"../play.html");
		}
	});
	
	$('.jawaban4').on('click', function (){
		if($(this).attr('id') === 'b'){
			$(id).fadeTo("slow", 0.1);
			$("#waktu").fadeTo("slow",0.1);
			$("#tatacara").fadeTo("slow",0.1);
			$("#musiksoal").attr("src","../lagu/menang.mp3");
			$(".btn-jawaban").prop({disabled:true});
			$("#selesai").fadeIn('slow');
			redirect(5,"../play.html");
		} else {
			$(id).fadeTo("slow",0.1);
			$("#waktu").fadeTo("slow",0.1);
			$("#tatacara").fadeTo("slow",0.1);
			$("#musiksoal").attr("src","../lagu/salah.mp3");
			$(".btn-jawaban").prop({disabled:true});
			$("#salah").fadeIn('slow');
			redirect(3,"../play.html");
		}
	});
}

function soalRumah(){
	id = '#' + id;	
	$(id).fadeIn("slow");
	count = 30;
	countDown();
	
	$('.jawaban1').on('click', function(){
		if($(this).attr('id') === 'c'){
			$("#musiksoal").attr("src","../lagu/benar.mp3");
			$(id).css('display','none');
			id = '#2';
			$(id).fadeIn("slow");
		} else{
			$(id).fadeTo("slow",0.1);
			$("#waktu").fadeTo("slow",0.1);
			$("#tatacara").fadeTo("slow",0.1);
			$("#musiksoal").attr("src","../lagu/salah.mp3");
			$(".btn-jawaban").prop({disabled:true});
			$("#salah").fadeIn('slow');
			redirect(3,"../play.html");
			/*$("#salah").css("display", "block");*/
			/*alert('salah');*/
		}
	});
	
	$('.jawaban2').on('click', function (){
		if ($(this).attr('id') === 'a'){
			$("#musiksoal").attr("src","../lagu/benar.mp3");
			$(id).css('display', 'none');
			id = '#3';
			$(id).fadeIn("slow");
		} else {
			$(id).fadeTo("slow",0.1);
			$("#waktu").fadeTo("slow",0.1);
			$("#tatacara").fadeTo("slow",0.1);
			$("#musiksoal").attr("src","../lagu/salah.mp3");
			$(".btn-jawaban").prop({disabled:true});
			$("#salah").fadeIn('slow');	
			redirect(3,"../play.html");
		}
	});
	
	$('.jawaban3').on('click', function (){
		if($(this).attr('id') === 'c'){
			$("#musiksoal").attr("src","../lagu/benar.mp3");
			$(id).css('display', 'none');
			id = '#4';
			$(id).fadeIn("slow");
		} else {
			$(id).fadeTo("slow",0.1);
			$("#waktu").fadeTo("slow",0.1);
			$("#tatacara").fadeTo("slow",0.1);
			$("#musiksoal").attr("src","../lagu/salah.mp3");
			$(".btn-jawaban").prop({disabled:true});
			$("#salah").fadeIn('slow');
			redirect(3,"../play.html");
		}
	});
	
	$('.jawaban4').on('click', function (){
		if($(this).attr('id') === 'a'){
			$(id).fadeTo("slow", 0.1);
			$("#waktu").fadeTo("slow",0.1);
			$("#tatacara").fadeTo("slow",0.1);
			$("#musiksoal").attr("src","../lagu/menang.mp3");
			$(".btn-jawaban").prop({disabled:true});
			$("#selesai").fadeIn('slow');
			redirect(5,"../play.html");
		} else {
			$(id).fadeTo("slow",0.1);
			$("#waktu").fadeTo("slow",0.1);
			$("#tatacara").fadeTo("slow",0.1);
			$("#musiksoal").attr("src","../lagu/salah.mp3");
			$(".btn-jawaban").prop({disabled:true});
			$("#salah").fadeIn('slow');
			redirect(3,"../play.html");
		}
	});
}

function countDown() {
    if (count >= 0) {
        $('#timer').text(count);
        count--;
        switch (count % 4){
        	case 1:
        		$(".count").css("border-right", "2px solid red");
        		$(".count").css("border-top","transparent");
        		break;
        	case 0:
        		$(".count").css("border-bottom", "2px solid red");
        		$(".count").css("border-right","transparent");
        		break;
        	case 3:
        		$(".count").css("border-left", "2px solid red");
        		$(".count").css("border-bottom","transparent");
        		break;
        	case 2:
        		$(".count").css("border-top", "2px solid red");
        		$(".count").css("border-left","transparent");
        		break;
        }
        setTimeout("countDown()", 1000);
    } else {
    	$(id).fadeTo("slow", 0.33);
    	$("#musiksoal").attr("src","../lagu/salah.mp3");
    	$(".btn-jawaban").prop({disabled:true});
        $("#waktuhabis").fadeIn("slow");
        redirect(3,"../play.html");
    }
}

function redirect (waktu, url){
	var interval = setInterval(function(){
		waktu--;
		if(waktu == 0){
			clearInterval(interval);
			window.location = url;
		}
	}, 1000);
}

$("#keluar").on('click', function(){
	try {
        tizen.application.getCurrentApplication().exit();
    } catch (ignore) {
    	
    }
});
	
$("#tentang").on('click', function(){
	$("#pageawal").css("display", "none");
	$("#pagetentang").fadeIn("slow");
});
/*window.onload = function() {
    // TODO:: Do your initialization job

    // add eventListener for tizenhwkey
    document.addEventListener('tizenhwkey', function(e) {
        if (e.keyName === "back") {
            try {
                tizen.application.getCurrentApplication().exit();
            } catch (ignore) {
            	
            }
        }
    });

    // Sample code
    var mainPage = document.querySelector('#main');

    mainPage.addEventListener("click", function() {
        var contentText = document.querySelector('#content-text');

        contentText.innerHTML = (contentText.innerHTML === "Basic") ? "Tizen" : "Basic";
    });
};*/
( function () {
    window.addEventListener( 'tizenhwkey', function( ev ) {
        if( ev.keyName === "back" ) {
        	var pageid = $("body").attr("id");
        	var onid = $("div").attr("id");
        	onid = "#" + onid;
        	var display = $(onid).css("display");
        	var cek = false;
        	
        	if (onid == "#pageawal" && display == "none"){
        		cek = true;
        	}
        	
        	console.log(cek);
        	
        	if(cek == false && (pageid === "main" || pageid === "keluar")) {
                try {
                    tizen.application.getCurrentApplication().exit();
                } catch (ignore) {
                	
                }
            } else {
            	if(pageid === "soal"){
            		window.location.href="../play.html";
            		/*window.history.back();
            		$("#pageawal").css("display", "none");*/
            		/*alert("selesaikan soalnya!!!");*/
            	}
            	else if (cek == true){
            		cek == false;
            		$("#pagetentang").css("display", "none");
            		$("#pageawal").fadeIn("slow");
            	}
            	else if (pageid === "permainan"){
            		$("#permainan").fadeOut("slow");
            		window.location.href="index.html";
            		$("#pageawal").fadeIn("slow");
            	}             	
            }	
            /*window.location.href="index.html";*/
        }
    } );
} () );
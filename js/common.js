// Cloud Float...
var $main = $cloud = mainwidth = null;
var offset1 = 450;
var offset2 = 0;

var offsetbg = 0;

$(document).ready(function(){
    $('.mainlevel').not('.Selected').hover(function(){
        $(this).addClass("Selected");
//	    $(this).find('ul').slideDown();
    },
    function(){
        $(this).removeClass("Selected");
//        $(this).find('ul').slideUp();
    });
	jQuery.navlevel2 = function(level1,dytime) {
		
	  $(level1).mouseenter(function(){
		  varthis = $(this);
		  //alert(varthis.html())
		 // varthis.find('a').css("color");
		  delytime=setTimeout(function(){
			  varthis.addClass("Selected");
			varthis.find('ul').slideDown();
			
		},dytime);
		
	  });
	  $(level1).mouseleave(function(){
		 clearTimeout(delytime);
         
		 //$(this).find('li').eq(0).removeClass("Selected");
		 if(!varthis.is('.Selected'))varthis.removeClass("Selected");
		 $(this).find('ul').slideUp();
		 
	  });
	  
	};
  $.navlevel2("li.mainlevel",200);
  
  $.focus("#focus001");

});


$(document).ready(


	function () {
		$main = $("#mainBody");
		$body = $("body");
		$cloud1 = $("#cloud1");
		$cloud2 = $("#cloud2");
		mainwidth = $main.outerWidth();  
	}
);

/// 飘动
setInterval(function flutter() {
	if (offset1 >= mainwidth) {
		offset1 =  -580;
	}

	if (offset2 >= mainwidth) {
		 offset2 =  -580;
	}
	offset1 += 2.1;
	offset2 += 2;
	$cloud1.css("background-position", offset1 + "px 10px")
	
	$cloud2.css("background-position", offset2 + "px 180px")
}, 70);
/*setInterval(function bg() {
	if (offsetbg >= mainwidth) {
		offsetbg =  -580;
	}
	offsetbg += 0.6;
	$body.css("background-position", -offsetbg + "px 0")
}, 90 );*/

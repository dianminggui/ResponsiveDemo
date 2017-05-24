$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
  	items:1,
  	loop:true,
  	autoplay:true,
  	autoplayTimeout:1000,
  	autoplayHoverPause:true
  });

  function imageResponsive() {
  	var width =$(window).width();
  	var imgs =$('.ad-item>img');
  	if (width <= 480){
  		imgs.each(function(index,element){
  			var pic = ((index+1)%3);
  			if(pic == 0) pic=3;
  			this.src = 'image/ad00'+ pic + '.png'
  		});
  		}
  	else if(width <= 800){
  		imgs.each(function(index,element){
  			var pic = ((index+1)%3);
  			if(pic == 0) pic=3;
  			this.src = 'image/ad00'+ pic + '-m.png';
  		});
  		}
  	else{
  		imgs.each(function(index,element){
  			var pic = ((index+1)%3);
  			if(pic == 0) pic=3;
  			this.src = 'image/ad00'+ pic + '-l.png';
  		});
  	}
  }

  $(window).on('resize load',imageResponsive);
});
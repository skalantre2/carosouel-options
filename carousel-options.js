
$.fn.CarouselOptions = function( options ) {
	 $.fn.CarouselOptions.defaults = {
	    Indicators: "true",
	    NextPrevButtons: "true",
	    Next: "Next :",
	    Prev: "Previous :",
	    Nxt_Prv_InsertInTo: "", 
	    NextPrevButtons_Position: "bottom",   
	    TitleTag: "h3",	
	    TitleLength: "false"    
	};
    var opts = $.extend( {}, $.fn.CarouselOptions.defaults, options );
    var Bullets = opts.Indicators.toLowerCase();
    var Buttons = opts.NextPrevButtons.toLowerCase();
    var Nxt_Prv_InsertInTo = opts.Nxt_Prv_InsertInTo.toLowerCase();
    var NextPrevButtons_Position = opts.NextPrevButtons_Position.toLowerCase();
    var TitleTag = opts.TitleTag.toLowerCase();
    var TitleLength = opts.TitleLength;
    var Next = opts.Next;
    var Prev = opts.Prev;
 	var Insert_Item_ID = $(this).attr('id');
 	var Carousel_ID = '#'+$(this).attr('id');

	if(Bullets=='true'){
		$(Carousel_ID).append('<ol class="carousel-indicators">');
		$(Carousel_ID+' .carousel-inner .item').each(function(index){
			$(Carousel_ID+" .carousel-indicators").append('<li data-target="'+Carousel_ID+'" data-slide-to="'+index+'"></li>');
			if(index==0){ $(Carousel_ID+" .carousel-indicators li").addClass('active');}
		});
		$(Carousel_ID).append('</ol>');
	}
	if(Buttons=='true'){
		$(Carousel_ID+' .carousel-inner .item').each(function(index){
			$(this).attr("id", Insert_Item_ID+"_"+$(this).index());
			var This_ID = '#'+$(this).attr("id");	
			var Next_title = $(this).next().find(TitleTag+":first").text();
			var Prev_title = $(this).prev().find(TitleTag+":first").text();

			Next_Slide_Number = index;
			Prev_Slide_Number = index;
		 	if(Next_title){
		 		Next_Slide_Number++;
		 		if(TitleLength<Next_title.length){ Next_title = Next_title.substring(0,TitleLength)+'...';}
		 		if(NextPrevButtons_Position=="top"){
		 		$(This_ID+" "+Nxt_Prv_InsertInTo).prepend('<a data-target="'+Carousel_ID+'" class="SlideNext" data-slide-to="'+Next_Slide_Number+'">'+Next+' '+Next_title+' »</a>');
		 		}
		 		if(NextPrevButtons_Position=="bottom"){
		 		$(This_ID+" "+Nxt_Prv_InsertInTo).append('<a data-target="'+Carousel_ID+'" class="SlideNext" data-slide-to="'+Next_Slide_Number+'">'+Next+' '+Next_title+' »</a>');
		 		}
		 	}
		 	if(Prev_title){
		 		Prev_Slide_Number--;
		 		if(TitleLength<Prev_title.length){ Prev_title = Prev_title.substring(0,TitleLength)+'...';}
		 		if(NextPrevButtons_Position=="top"){
		 		$(This_ID+" "+Nxt_Prv_InsertInTo).prepend('<a data-target="'+Carousel_ID+'" class="SlidePrevious" data-slide-to="'+Prev_Slide_Number+'">« '+Prev+' '+Prev_title+'</a>');
		 		}
				if(NextPrevButtons_Position=="bottom"){
		 		$(This_ID+" "+Nxt_Prv_InsertInTo).append('<a data-target="'+Carousel_ID+'" class="SlidePrevious" data-slide-to="'+Prev_Slide_Number+'">« '+Prev+' '+Prev_title+'</a>');
		 		}
		 	}
		});
	}
};
 $(document).ready(function(){
    // Blast the text apart by word or letter.
    $(".one").blast({ delimiter: "word" });
    $(".three").find(".phrase-one").blast({ delimiter: "letter" });
    $(".three").find(".phrase-two").blast({ delimiter: "letter" });
    $(".five").find(".phrase-text").blast({ delimiter: "letter" });

    var mon = $(".money-container").toArray();
    var revMon = mon.reverse();

    var tlComplete = function(arg){ 
        bgTl.restart(); 
        tl.restart(); 
    }

    var bgTl = new TimelineMax({    
        onUpdate: updateSlider                
    });

    var tl = new TimelineMax({                    
        onComplete:tlComplete,
        onCompleteParams:null,
        onUpdate: updateSlider
    });            


    bgTl.add(TweenMax.to(".one", 11, {ease:Back.easeInOut, "background-position":"50% 0%"}) )    
        .add(TweenMax.to(".two", 6, {"background-position":"0% 40%"}) )
        .add(TweenMax.to(".three", 10, {"background-position":"40% 40%"}) )
        .add(TweenMax.to(".four", 10, {"background-position":"0% 0%"}) )
        .add(TweenMax.to(".five", 12, {"background-position":"100% 25%"}) )            
        .add(TweenMax.to(".six", 10, {"background-position":"0% 80%"}) );
     
    tl.add(TweenMax.to($(".one").find(".phrase-info"), 1, {opacity:1}))            
   .add(TweenMax.to($(".one").find(".phrase-info"), 1, {ease:Back.easeOut, rotationY:"360deg"}))            
   .add(TweenMax.to($(".one").find(".phrase-info"), 1, {ease:Bounce.easeOut, left:"0%"}))            
   .add(TweenMax.to($(".one").find(".phrase-text"), 0.1, {display:"block"}))            
   .add(TweenMax.to($(".one").find(".phrase-one"), 0.5, {ease:Elastic.easeOut.config(2, 0.3), top:20}))            
   .add(TweenMax.to($(".one").find(".phrase-two"), 0.5, {ease:Elastic.easeOut.config(2, 0.3), top:20}))            
   .add(TweenMax.staggerTo($(".one").find(".blast"), 1, {                    
        opacity:1,
    }, 0.5) )
   .add(TweenMax.to($(".one").find(".phrase-info"), 0.5, {delay:1.5, left:"-150px"}))            
   .add(TweenMax.to($(".one").find(".phrase-text"), 1, {                    
        top:"-250px",
        ease:Back.easeIn                   
    }) )
   .add(TweenMax.to($(".one").find(".phrase-one"), 0.5, {top:150}))            
   .add(TweenMax.to($(".one").find(".phrase-two"), 0.5, {top:-150}))            
   .add(TweenMax.to(".one", 0.5, {opacity:0}))            
   .add(TweenMax.to(".two", 0.1, {display:"block"}))            
   .add(TweenMax.to(".two", 1, {opacity:1}))            
   .add(TweenMax.fromTo($(".two").find(".phrase-info"), 0.1, {
        margin:0,
        opacity:1                      
   },{
        width:"100px",
        position:"absolute",
        "margin-left":"40px"                                                        
   }))            
   .add(TweenMax.to(".money-base", 0.5, {ease:Back.easeOut, "top":"50px"}))            
   .add(TweenMax.to(".money-middle", 0.5, {ease:Back.easeOut, "top":"30px"}))            
   .add(TweenMax.to(".money-top", 0.5, {ease:Back.easeOut, "top":"10px"}))                           
   .add(TweenMax.to($(".two").find(".phrase-text"), 0.1, {display:"block"}))
   .add(TweenMax.fromTo($(".two").find(".phrase-text"), 0.5, {
        top:"-120px"
    },{
        top:"0px",
        ease:Back.easeOut 
    }))
    .add(TweenMax.staggerTo(revMon, 1, {
        delay:1, 
        ease:Back.easeIn, 
        "left":"-140px"
    }, 0.5))
    .add(TweenMax.to($(".two").find(".phrase-text"), 0.5, { ease:Back.easeIn, right:"-650px"}))
    .add(TweenMax.to(".two", 0.5, {opacity:0}))            
    .add(TweenMax.to(".three", 0.1, {display:"block"}))         
    .add(TweenMax.to([$(".three").find(".phrase-info")], 1, {opacity:1}))            
    .add(TweenMax.to([".money-bag", ".money-give"], 1.5, {ease:Back.easeOut, top:"-=180px", right:"+=120px"} ))
    .add(TweenMax.to($(".three").find(".phrase-text"), 0.1, {display:"block"} ))
    .add(TweenMax.staggerTo($(".three").find(".phrase-one").find(".blast"), 0.5, {                    
            opacity:1,
        }, 0.1) )
    .add(TweenMax.to(".money-take", 1, {ease:Back.easeOut, right:"-30px"} ))
    .add(TweenMax.to([".money-bag", ".money-give"], 1, {ease:Back.easeOut, top:"-=50px", right:"-=160px"} ))
    .add(TweenMax.staggerTo($(".three").find(".phrase-two").find(".blast"), 0.1, {                                            
            opacity:1
        }, 0.1) )                
    .add(TweenMax.to(".money-bag", 1, {ease:Bounce.easeOut, top:"+=40px"} ))
    .add(TweenMax.to([".money-bag", ".money-take"], 1, {ease:Back.easeIn, right:"-=200px"} ))
    .add(TweenMax.to($(".three").find(".phrase-text"), 0.5, {ease:Back.easeInOut, left:"60px"} ))                                
    .add(TweenMax.to($(".three").find(".phrase-text"), 0.5, {opacity:0} ))
    .add(TweenMax.to(".three", 0.5, {opacity:0}))            
    .add(TweenMax.to(".four", 0.1, {display:"block"}))            
    .add(TweenMax.to(".four", 1, {opacity:1}))
    .add(TweenMax.to($(".four").find(".phrase-info"), 0.1, {opacity:1}))
    .add(TweenMax.to(".globe", 2, {ease:Bounce.easeOut, "background-position":"200% 0%"}))            
    .add(TweenMax.to($(".four").find(".phrase-text"), 0.1, {display:"block"}))
    .add(TweenMax.to($(".four").find(".phrase-one"), 1, {left:-100, ease:Back.easeOut}))
    .add(TweenMax.to($(".four").find(".phrase-two"), 1, {right:-80, ease:Back.easeOut}))
    .add(TweenMax.to($(".four").find(".phrase-one"), 0.5, {rotationX:"-360deg", ease:Bounce.easeOut}))
    .add(TweenMax.to($(".four").find(".phrase-two"), 0.5, {rotationX:"360deg", ease:Bounce.easeOut}))
    .add(TweenMax.to($(".four").find(".phrase-one"), 0.5, {delay:1, opacity:0}))
    .add(TweenMax.to($(".four").find(".phrase-two"), 0.5, {opacity:0}))
    .add(TweenMax.to($(".four").find(".phrase-info"), 1, {top:"-120px"}))              
    .add(TweenMax.to(".four", 0.5, {opacity:0}))                            
    .add(TweenMax.to(".five", 0.1, {display:"block"}))            
    .add(TweenMax.to(".five", 1, {opacity:1}))
    .add(TweenMax.to($(".five").find(".phrase-info"), 0.1, {opacity:1}))
    .add(TweenMax.to($(".five").find(".phrase-text"), 0.1, {display:"block"}))
    .add(TweenMax.to(".mobile-container", 2, {ease:Back.easeOut, "top":"-110px"}) )
    .add(TweenMax.staggerTo($(".five").find(".blast"), 0.1, {                    
            opacity:1,
        }, 0.1) )
    .add(TweenMax.to(".cursor", 0.1, {color:"#000","text-shadow":"0px 0px 0px #000", yoyo:true, repeat:8, repeatDelay:0.1}) )
    .add(TweenMax.staggerTo($(".five").find(".blast").toArray().reverse(), 0.1, {                    
            opacity:0,
        }, 0.1) )
    .add(TweenMax.to(".mobile-container", 2, {ease:Back.easeIn, "top":"150px"}) )
    .add(TweenMax.to(".five", 0.5, {opacity:0}))                        
    .add(TweenMax.to(".six", 0.1, {display:"block"}))            
    .add(TweenMax.to(".six", 0.4, {opacity:1}))
    .add(TweenMax.to($(".six").find(".phrase-text"), 0.1, {display:"block"}))            
    .add(TweenMax.to($(".six").find(".secure"), 0.5, {ease:Back.easeOut, top:"5px"}))
    .add(TweenMax.to($(".six").find(".phrase-one"), 0.5, {ease:Back.easeOut, top:"-105px"}))
    .add(TweenMax.to($(".six").find(".virus"), 0.5, {ease:Back.easeOut, top:"5px"}))
    .add(TweenMax.to($(".six").find(".phrase-two"), 0.5, {ease:Back.easeOut, top:"-105px"}))
    .add(TweenMax.to([$(".six").find(".secure"), $(".six").find(".phrase-one")], 0.5, {delay:1,ease:Back.easeIn, top:"-250px"}))
    .add(TweenMax.to([$(".six").find(".virus"), $(".six").find(".phrase-two")], 0.5, {ease:Back.easeIn, top:"150px"}))
    .add(TweenMax.to(".six", 0.5, {opacity:0}));   

    $("#slider").slider({
      range: false,
      min: 0,
      max: 100,
      step:.1,
      slide: function ( event, ui ) {
        tl.pause();
        //adjust the timeline’s progress() based on slider value
        tl.progress( ui.value/100 );
        }
    }); 

    // updateSlider function + add {onUpdate: updateSlider} to the tl
    function updateSlider() {
      $("#slider").slider("value", tl.progress() *100);
    } 

});
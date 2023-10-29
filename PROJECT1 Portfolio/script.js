const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function firstPageAnim(){
    var t1 = gsap.timeline();

    t1.from("#nav" , {
        y : '-10' ,
        opacity : 0 ,
        duration : 1.5 ,
        ease : Expo.easeInOut
    })
    
    .to(".boundingelem", {
        y: 0,
        ease: Expo.easeInOut,
        duration: 2,
        delay: -1,
        stagger: 0.2,
      })
      
    .from("#herofooter", {
        y: -10,
        opacity : 0 ,
        duration : 1.5,
        delay : -1 ,
        ease : Expo.easeInOut
      })

}

// jab mouse move ho to hum log skew kar paaye aur maximum skew define kar paaye , jab mouse move ho to chapta ki value badhe , aur jab mouse chalna band ho jaaye to chapta hata lo

var timeout
function circleChaptakaro(){

    // Define default sacel value 
    var xscale = 1 ;
    var yscale = 1 ;

    var xprev = 0 ;
    var yprev = 0 ;


    window.addEventListener("mousemove" , function(dets){

        clearTimeout(timeout);

        // Using clamp 
        
        xscale = gsap.utils.clamp(.8,1.2, dets.clientX - xprev);

        yscale = gsap.utils.clamp(.8,1.2,dets.clientX - yprev);

        xprev = dets.clientX ;
        yprev = dets.clientY ;

        circleMouseFollower(xscale , yscale);

       timerout = setTimeout(function(){
            document.querySelector("#minicircle").style.transform = `translate(${dets.clientX}px , ${dets.clientY}px) scale(${1}, ${1})`;

        }, 100)
    });
}

circleChaptakaro(); 

function circleMouseFollower(xscale, yscale){
    window.addEventListener("mousemove",function(dets){
        document.querySelector("#minicircle").style.transform = `translate(${dets.clientX}px , ${dets.clientY}px) scale(${xscale}, ${yscale})`;
    })
}

circleMouseFollower();
firstPageAnim();
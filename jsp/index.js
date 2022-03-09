document.addEventListener("DOMContentLoaded", function(){
    let hiddenNavig = document.querySelector('.hiddenNavig');
    let hamb = document.querySelector('.hamb');
    let slides = document.querySelectorAll('.slide');
    // for(let i = 0; i < slides.length; i++){
        // slides[i].style.width = '750px'
    // }
    hiddenNavig.style.visibility = 'hidden';
    hamb.addEventListener('touchstart', checkVisib);

    function checkVisib(){
        if(hiddenNavig.style.visibility == 'hidden'){
            hiddenNavig.style.visibility = 'visible';
        }
        else{
            hiddenNavig.style.visibility = 'hidden';
        }
    }
    // -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
    let slideCont = document.querySelector(".clidesCont");
        slideCont.style.left = '0px';
    let buttons = document.querySelectorAll(".buttonsCont .button");
    for(let i = 0; i < buttons.length; i++){
        if( i != 0){
            buttons[i].style.backgroundColor = 'rgb(238, 238, 239)';
        }
        else{
            buttons[i].style.backgroundColor = 'rgb(100, 164, 215)';
        }
        buttons[i].style.color='black';
        buttons[i].addEventListener('click', function(){
            slideCont.style.left = (-slides[i].offsetWidth * i) + 'px';
            for(let j = 0; j < buttons.length; j++){
                buttons[j].style.backgroundColor = 'rgb(238, 238, 239)';
            }
            buttons[i].style.backgroundColor = "rgb(100, 164, 215)";
        });
    }
})
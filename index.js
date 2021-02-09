window.addEventListener('scroll', function() {
    console.log(pageYOffset + 'px');
    if(pageYOffset < 684.8/2 && pageYOffset >= 0) {
        var old = document.getElementById('p2');
        old.className="right-menu__item";

        var newElem = document.getElementById('p1');
        newElem.className="right-menu__item right-menu__item_active";        
    }
    else if(pageYOffset >= 684.8 && pageYOffset < 684.8*2) {
        var old = document.getElementById('p1');
        old.className="right-menu__item";

        var newElem = document.getElementById('p2');
        newElem.className="right-menu__item right-menu__item_active";``
    }
});
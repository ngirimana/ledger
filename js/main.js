function initMap() {
    const loc = { lat: -1.970579, lng: 30.104429 };

    const map = new google.maps.Map(document.querySelector('.map'), {
        zoom: 14, center: loc
    });
    const maker = new google.maps.Marker({ position: loc, map: map });
}

window.addEventListener('scroll',function(){
    if(window.scrolly>150){
        document.querrySelector('#navbar').style.opacity=0.9;
    }
    else{
        document.querySelector('navbar').style.opacity=1;
    }
    });

$('#navbar a,.btnn').on('click', function (event) {
    if(this.hash !== ''){
        event.preventDefault();
        const hash = this.hash;
        $('html,body').animate({
            scrollTop: $(hash).offset().top
        },
         800
        );
    }
});
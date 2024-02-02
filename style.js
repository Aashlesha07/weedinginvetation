var dest = new Date("dec 31, 2024 07:00:00").getTime();
var x = setInterval(function() {
var now = new Date().getTime();
var diff = dest - now;
var days = Math.floor(diff/(1000*60*60*24));
console.log(days);
var hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
console.log(hours);
var minutes = Math.floor ((diff % (1000 * 60 * 60)) / (1000 * 60));
console.log(minutes);
var seconds = Math.floor((diff % (1000 * 60)) / 1000);
console.log(seconds);
document.getElementById("countdown")
document.getElementById("days").innerHTML = days
document.getElementById("hours").innerHTML = hours
document.getElementById("minutes").innerHTML = minutes
document.getElementById("seconds").innerHTML = seconds
}, 1000);


$('.loop').owlCarousel({
    center: true,
    items:2,
    loop:true,
    margin:10,
    responsive:{
        600:{
            items:4
        }
    }
});

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:5,
            nav:true,
            loop:false
        }
    }
})
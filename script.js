
// window.onscroll = function() {
//     scrollFunction();
//     };

//     function scrollFunction() {
//     var navbar = document.querySelector('#navbar');
//     if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
//         navbar.classList.add('scrolled');
//     } else {
//         navbar.classList.remove('scrolled');
//     }
//     }

// top-category-card

// search
// document.getElementById('searchIcon').addEventListener('click', function () {
//     var searchForm = document.querySelector('.search-bar');
//     searchForm.classList.toggle('active');
//     var searchBox = document.querySelector('.form-box');
//     if (searchForm.classList.contains('active')) {
//         searchBox.focus();
//     }
// });

alert("all ok");

// carousel
$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 20,
    nav: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 3
        }
    }
})
// sign

// search

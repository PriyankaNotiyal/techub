
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

function displaySearch(){
    console.log("displaysearch");
    let pathname = window.location.pathname;
    alert(pathname);
    let path = pathname.substring(8);
    alert(path);
    localStorage.setItem("path",path)
    window.location.href = "/searchp.html"
    
}
function closeSearch(){
    let path = localStorage.getItem("path")
     alert(pathname);
     alert(path);
    // alert("clicked:"+path)
    window.location.href=  path; 
}

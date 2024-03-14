
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


function showSignIn() {
        document.getElementById('container').classList.remove('right-panel-active');
    }
    function showSignUp() {
        document.getElementById('container').classList.add('right-panel-active');
    }
        const signUpButton = document.getElementById('signUp');
        const signInButton = document.getElementById('signIn');
        const container = document.getElementById('container');
        const user = document.getElementById('user');
    
        user.addEventListener('click', () =>
        container.classList.remove('right-panel-active'));
    
        signUpButton.addEventListener('click', () =>
        container.classList.add('right-panel-active'));
    
        signInButton.addEventListener('click', () =>
        container.classList.remove('right-panel-active'));
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

function displaySearch() {
    // console.log("displaysearch");
    let pathname = window.location.pathname;
    // alert(pathname);
    
    // Extract the file name from the pathname
    let pathParts = pathname.split("/");
    let fileName = pathParts[pathParts.length - 1];
    
    // Check if the fileName is empty or undefined, then set it to "index.html"
    if (!fileName || fileName.trim() === "") {
        fileName = "index.html";
    }
    
    // alert(fileName);
    localStorage.setItem("path", fileName);
    window.location.href = "/searchp.html";
}


function closeSearch(){
    let path = localStorage.getItem("path");
    // alert("clicked:"+path)
    window.location.href=  path; 
}

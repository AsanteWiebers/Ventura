let hamburgerIcon = document.getElementById("hamburger-icon");
let closeIcon = document.getElementById("closeIcon");


hamburgerIcon.addEventListener("click", function(){
   
    if (overlayMenu.style.display === "none") {
        overlayMenu.style.display = "none";
    } else {
        overlayMenu.style.display = "block";
    }

    console.log('clickeddd!!')

})

closeIcon.addEventListener("click", function(){
   
    if (overlayMenu.style.display === "block") {
        overlayMenu.style.display = "none";  
    } else {
        overlayMenu.style.display = "block";  
    }
    console.log("hey!")
})


ScrollReveal({
    reset: true,
    distance: '60px',
    duration: 2500,
    delay: 400
});

// Home page

ScrollReveal().reveal('.hero', {
    delay: 0.1,
    origin: 'right'
});

ScrollReveal().reveal('.featured ', {
    delay: 10,
    origin: 'left'
});

ScrollReveal().reveal('.art_img', {
    delay: 50,
    origin: 'bottom'
});

ScrollReveal().reveal('.collection-bg', {
    delay: 50,
    origin: 'top'
});
ScrollReveal().reveal('.pairs-bg', {
    delay: 50,
    origin: 'top'
});
ScrollReveal().reveal('.plate-bg', {
    delay: 50,
    origin: 'bottom'
});
ScrollReveal().reveal('.classic-bg', {
    delay: 50,
    origin: 'bottom'
});

// Winkel page
ScrollReveal().reveal('.shop_title', {
    delay: 10,
    origin: 'left'
});

// Contact page 

ScrollReveal().reveal('.contact_title', {
    delay: 10,
    origin: 'left'
});

// Over ons page

ScrollReveal().reveal('.about_title', {
    delay: 10,
    origin: 'right'
});

// locaties

ScrollReveal().reveal('.city_title', {
    delay: 10,
    origin: 'right'
});
ScrollReveal().reveal('.city_title_2', {
    delay: 30,
    origin: 'left'
});
ScrollReveal().reveal('.city_title_3', {
    delay: 100,
    origin: 'right'
});




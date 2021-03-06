/*!
* Start Bootstrap - Freelancer v7.0.6 (https://startbootstrap.com/theme/freelancer)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-freelancer/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const elems = document.body.querySelectorAll('a');
        const navbarCollapsible = document.body.querySelector('#mainNav');
        const butDown = document.body.querySelector('#download');

        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {

            navbarCollapsible.classList.add('navbar-shrink')
        }
        if(window.scrollY >= $('#portfolio').position().top){
            [].forEach.call(elems, function(el) {
                el.classList.remove("text-pink");
                el.classList.add("text-dark");
            });
        }else{
            [].forEach.call(elems, function(el) {
            el.classList.add("text-pink");
            el.classList.remove("text-dark");
            });
        }
        if(window.scrollY >= $('#about').position().top && window.scrollY < $('#contact').position().top){
            [].forEach.call(elems, function(el) {
                el.classList.remove("text-dark");
                el.classList.add("text-pink");
            });
           
        }else if(window.scrollY >= $('#contact').position().top){
            [].forEach.call(elems, function(el) {
            el.classList.add("text-dark");
            el.classList.remove("text-pink");
            });
            
        }
    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
   
    if (mainNav) {
         
        
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 72,
        }
        );
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

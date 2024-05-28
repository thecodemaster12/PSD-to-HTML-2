// Progress Bar

const circularProgress = document.querySelectorAll(".circular-progress");

Array.from(circularProgress).forEach((progressBar) => {
  const progressValue = progressBar.querySelector(".percentage");
  const innerCircle = progressBar.querySelector(".inner-circle");
  let startValue = 0,
    endValue = Number(progressBar.getAttribute("data-percentage")),
    speed = 50,
    progressColor = progressBar.getAttribute("data-progress-color");

  const progress = setInterval(() => {
    startValue++;
    progressValue.textContent = `${startValue}%`;
    progressValue.style.color = `${progressColor}`;

    innerCircle.style.backgroundColor = `${progressBar.getAttribute(
      "data-inner-circle-color"
    )}`;

    progressBar.style.background = `conic-gradient(${progressColor} ${
      startValue * 3.6
    }deg,${progressBar.getAttribute("data-bg-color")} 0deg)`;
    if (startValue === endValue) {
      clearInterval(progress);
    }
  }, speed);
});


$(document).ready(function() {
    $('.desktop-menu').slicknav({
        prependTo: '.mobile-menu',
        label: '',
       allowParentLinks: true,
  
      });
});

$('#hero').owlCarousel({
    loop:true,
    margin:0,
    nav:true,
    items: 1,

})

$('#blog-inner-post').owlCarousel({
    loop:true,
    margin:0,
    nav:true,
    items: 1,
    dots: false,
})

$('.blog-post-slider').owlCarousel({
    loop:true,
    margin:0,
    nav:true,
    items: 1,

})

$('#portfolio-inner').owlCarousel({
    loop:true,
    margin:0,
    nav:true,
    items: 1,
})

$('#sub-hero').owlCarousel({
    loop:true,
    margin: 0,
    nav:true,
    dots: false,
    stagePadding: 30,
    // autoWidth: true,
    // center: true,
    responsive:{
      0:{
          items:1
      },
      600:{
          items:2
      },
      700:{
          items:2
      },
      1000:{
          items:3
      },
      1400:{
          items:5
      },
      2000:{
          items:7
      }
  }
})

$('#team').owlCarousel({
    loop:true,
    margin: 10,
    nav:false,
    dots: false,
    // autoWidth: true,
    // center:true,
    responsive:{
      0:{
          items:1
      },
      400:{
          items:2
      },
      700:{
          items:3
      },
      1000:{
          items:4
      },
      1200:{
          items:5
      }
  }
})
$('#feature-products').owlCarousel({
    loop:true,
    margin: 10,
    nav:true,
    dots: false,
    // autoWidth: true,
    center:true,
    stagePadding: 25,
    responsive:{
      0:{
          items:1
      },
      400:{
          items:1
      },
      700:{
          items:3
      },
      1000:{
          items:4
      },
      1200:{
          items:5
      }
  }
})

$('#happy-customers').owlCarousel({
    loop:true,
    margin: 10,
    // nav:true,
    dots: false,
    // autoWidth: true,
    // center:true,
    responsive:{
      0:{
          items:1
      },
      400:{
          items:1
      },
      700:{
          items:3
      },
      1000:{
          items:4
      },
      1200:{
          items:5
      }
  }
})
$('#customers-review').owlCarousel({
    loop:true,
    margin: 10,
    // nav:true,
    dots: false,
    // autoWidth: true,
    center:true,
    items: 1,
})

// Categories List
const showList = document.getElementById('show-list');
const showSubList = document.getElementById('show-sub-list');
const subList = document.getElementById('sub-list');
const subSubList = document.getElementById('sub-sub-list');

showList.addEventListener('click', () => {
  if (subList.style.display === 'none' || subList.style.display === '') {
    subList.style.display = 'block';
    // subList.classList.add('d-block');
    // subList.classList.remove('d-none');
    
  } else {
    subList.style.display = 'none';
    // subList.classList.add('d-none');
    // subList.classList.remove('d-block');
  }
})

showSubList.addEventListener('click', () => {
  if (subSubList.style.display === 'none' || subSubList.style.display === '') {
    subSubList.style.display = 'block';
    // subList.classList.add('d-block');
    // subList.classList.remove('d-none');
  } else {
    subSubList.style.display = 'none';
    // subList.classList.add('d-none');
    // subList.classList.remove('d-block');
  }
})


// Search Function
const searchIcon = document.getElementById('search-btn');
const searchBar = document.getElementById('search-bar')

let isSearchBarVisible = false;

searchIcon.addEventListener('click', function() {
  if (isSearchBarVisible) {
    searchBar.style.display = 'none';
    isSearchBarVisible = false;
  } else {
    searchBar.style.display = 'block';
    isSearchBarVisible = true;
  }
});

document.addEventListener('click', function(event) {
  if (
    event.target !== searchIcon &&
    event.target !== searchBar &&
    isSearchBarVisible
  ) {
    searchBar.style.display = 'none';
    isSearchBarVisible = false;
  }
});


// Mixit Up
var containerEl = document.querySelector('.mixit-up');
var mixer = mixitup(containerEl);

// Mixit Up Filter Buttons
var filterButtons = document.querySelectorAll('.filter-button');
filterButtons.forEach(function (button) {
  button.addEventListener('click', function () {
    var filterValue = button.getAttribute('data-filter');
    mixer.filter(filterValue);
  });
});



// Portfolio Feature card menu items
// Get all the buttons
var buttons = document.querySelectorAll('.menu-item');

const mix = document.querySelectorAll('.mix')

// Add a click event listener to each button
buttons.forEach(function(button) {
  button.addEventListener('click', function() {
    // Remove the active class from all buttons
    buttons.forEach(function(btn) {
      btn.classList.remove('list-active');
    });

    // Add the active class to the clicked button
    this.classList.add('list-active');
  });
});




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
    // autoWidth: true,
    center: false,
    responsive:{
      0:{
          items:1
      },
      600:{
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


// $('.youtube').colorbox({iframe: true, width: 640, height: 390, href:function(){
//     var videoId = new RegExp('[\\?&]v=([^&#]*)').exec(this.href);
//     if (videoId && videoId[1]) {
//       return 'http://youtube.com/embed/'+videoId[1]+'?rel=0&wmode=transparent';
//     }
//   }});

// Colorbox 
  $(".youtube").colorbox({iframe:true, innerWidth:680, innerHeight:382, href:function(){
        var videoId = new RegExp('[\\?&]v=([^&#]*)').exec(this.href);
    if (videoId && videoId[1]) {
      return 'http://youtube.com/embed/'+videoId[1]+'?rel=0&wmode=transparent';
    }
  }});
  $(".group2").colorbox({rel:'group2'});
          
          //Example of preserving a JavaScript event for inline calls.
          $("#click").click(function(){ 
              $('#click').css({"background-color":"#f00", "color":"#fff", "cursor":"inherit"}).text("Open this window again and this message will still be here.");
              return false;
  });

  if($(window).width() < 768){
    $(".youtube").colorbox({iframe:true, innerWidth:480, innerHeight:270});
    $(".group2").colorbox({rel:'group2',innerWidth:480, innerHeight:270});
}
  if($(window).width() < 1024){
    $(".youtube").colorbox({iframe:true, innerWidth:480, innerHeight:270});
    $(".group2").colorbox({rel:'group2',innerWidth:480, innerHeight:270});
}

if($(window).width() < 767){
    $(".youtube").colorbox({iframe:true, innerWidth:320, innerHeight:250});
    $(".group2").colorbox({rel:'group2',innerWidth:320, innerHeight:250});
}


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


// const mixx = document.querySelector('.mix');

// // Add a click event listener to each button
// buttons.forEach(function(button) {
//   button.addEventListener('click', function() {
//     // Remove the active class from all buttons
//     buttons.forEach(function(btn) {
//       btn.classList.remove('list-active');
//     });

//     // Add the active class to the clicked button
//     this.classList.add('list-active');


//     const cards = document.querySelectorAll('.mix');

// cards.forEach(card => {
//   card.addEventListener('change', ()=> {

//     const style = card.getAttribute('style');
//     const parentElement = card.parentElement;
  
//     if ( style.includes('display: none')) {
//       parentElement.style.display = 'none';
//       // parentElement.classList.add = 'd-none';
//       // parentElement.classList.remove = 'd-block';
//     }
//   })
//   // else if (style && style.includes(' ')) {
//   //   parentElement.style.display = 'block';
//   //   // parentElement.classList.add = 'd-none';
//   //   // parentElement.classList.remove = 'd-block';
//   // }
//   // else {
//   //   parentElement.style.display = 'block';
//   // }
// });

    // // const parentElement = mix.parentNode;
    // mixx.addEventListener('change', (el)=>{
    //   const styleAttributeValue = el.getAttribute('style');
  
    //   if (styleAttributeValue === '') {
    //     // parentElement.classList.add('d-block');
    //     // parentElement.style
    //     console.log('The class "mix" has a style attribute with no value.');
    //   } else {
    //     console.log('The class "mix" does not have a style attribute with no value.');
    //     // parentElement.classList.add('d-none');
    //   }
    // })

// const element = document.querySelectorAll('.mix');
// const styleAttributeValue = element.getAttribute('style');
// const parentElement = element.parentElement;

// element.addEventListener(()=> {

// })

// if (styleAttributeValue === '') {
//   console.log('The class "mix" has a style attribute with no value.');
//   // parentElement.style.display = "none"
// } else {
//   console.log('The class "mix" does not have a style attribute with no value.');
//   // parentElement.style.display = "block"
// }

    


// // Get all the parent elements
// const parents = document.querySelectorAll('.owl-item');

// // Loop through each parent element
// parents.forEach(parent => {
//   // Get the child element
//   const child = parent.querySelector('.mix');

//   // Check if the child element has inline style display: none
//   if (child && child.style.display === 'none') {
//     // Apply display: none to the parent element
//     parent.style.display = 'none';
//   } 
//   // else if (child && !child.style === '') {
//   //   // Apply display: none to the parent element
//   //   parent.style.display = 'block';
//   // }
// });


// // Run this code whenever the DOM is ready
// $(document).ready(function() {
//   // Select all elements with the 'mix' class
//   $('.mix').each(function() {
//     // Store a reference to the current 'mix' element
//     var mixElement = $(this);

//     // Create an observer to watch for changes to the 'style' attribute
//     var observer = new MutationObserver(function(mutations) {
//       mutations.forEach(function(mutation) {
//         if (mutation.attributeName === 'style') {
//           // Get the 'display' property of the 'mix' element

//           if( mixElement.css('display') === 'none') {
//             mixElement.closest('.owl-item').css('display', 'none');
//           }
//           else 
//             mixElement.closest('.owl-item').css('display', 'block');

//           // var displayProperty = mixElement.css('display');

//           // Apply the same 'display' property to the parent 'owl-item' element
//         }
//       });
//     });

//     // Start observing the 'mix' element for changes to its 'style' attribute
//     observer.observe(mixElement[0], { attributes: true });
//   });
// });

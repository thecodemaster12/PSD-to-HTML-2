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
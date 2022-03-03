let screenHeight = $(window).height();

$(window).scroll(function(){
    let currentHeight = $(this).scrollTop();
    
    if(currentHeight > screenHeight - 100){
        $(".navigation-bar").addClass("navigation-bar-scroll")
    }else{
        $(".navigation-bar").removeClass("navigation-bar-scroll");
        setActive("home");
    }
})

$(".navbar-toggler").click(function () {
    $(".menu-icon").toggleClass("fa-times");
});

function setActive(current){
  $('.nav-link').removeClass("current-section");
  $(`.nav-link[href='#${current}']`).addClass("current-section");
}

function scrollNav(){
  let currentSection = $("section[id]");

  currentSection.waypoint(function(direction){
    let currentSectionId = $(this.element).attr('id');

    if(direction=="down"){
      console.log(currentSectionId);

      setActive(currentSectionId);
    }
  }, {offset: '150px'});

  currentSection.waypoint(function(direction){
    let currentSectionId = $(this.element).attr('id');

    if(direction=="up"){
      console.log(currentSectionId);

      setActive(currentSectionId);
    }
  }, {offset: '-20px'});
}

scrollNav();

wow = new WOW(
  {
  boxClass:     'wow',      // default
  animateClass: 'animate__animated', // default
  offset:       0,          // default
  mobile:       true,       // default
  live:         true        // default
}
)
wow.init();
feather.replace();

$('.slick-carousel').slick({
dots: true,
arrows: false,
slidesToShow: 3,
slidesToScroll: 3,
focusOnSelect: true,
  responsive: [
  {
  breakpoint: 800,
  settings: {
  slidesToShow: 3,
  slidesToScroll: 3,
  // centerMode: true
  },
  },
  {
  breakpoint: 757,
  settings: {
  slidesToShow:1,
  centerMode: true,
  centerPadding: '40px',
  }
  },
  ]
});

$(window).on("load", function(){
  $(".loader-container").fadeOut(500,function(){
    $(this).remove();
  });
});
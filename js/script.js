(function() {
  var slides = document.querySelectorAll("img"),
    links = document.querySelectorAll("span"),
    n = 0,
    autoSlideShow = setInterval(function() {
      slide(1);
    }, 3000);
  show(n);

  function show(x) {
    for(var i = 0;i < slides.length; i++) {
      slides[i].style.display = "none";
      links[i].style.backgroundColor = "transparent";
    }
    slides[x].style.display = "";
    links[x].style.backgroundColor = "yellow";
  }
  function slide(x) {
    n += x;
    if(n === slides.length) {
      n = 0;
    }else if(n === -1) {
      n = slides.length - 1;
    }
    show(n);
  }

  function stopAutoSlidingAndSlide(x) {
    slide(x);
    clearInterval(autoSlideShow);
    autoSlideShow = setInterval(function() {
      slide(1);
    }, 3000);
  }

  document.querySelector("#previous").onclick = function() {
    stopAutoSlidingAndSlide(-1);
  };
  document.querySelector("#next").onclick = function() {
    stopAutoSlidingAndSlide(1);
  };
  document.querySelector("#imagesLinks").onclick = function(e) {
    if(e.target.nodeName === "SPAN") {
      show(n = Array.prototype.indexOf.call(this.children,e.target));
      stopAutoSlidingAndSlide(0);
    }
  };
}());
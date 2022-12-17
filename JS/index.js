document.querySelector('#show-bt').addEventListener('click', showBtn); 

function showBtn() {
  var x = document.getElementById("demo");
  var myImg = document.getElementById("show-bt");
  var my_url = "images/icon-close.svg";
  var my_url2 = "images/icon-hamburger.svg";
  if (x.style.display === "none") {
    x.style.display = "block";
    myImg.src = my_url;
  } else {
    x.style.display = "none";
    myImg.src = my_url2;
  }
  
}


let tabs = document.querySelectorAll(" ul li");
let tabsArray = Array.from(tabs);
tabsArray.forEach((ele) => {
  ele.addEventListener("click", function (e) {

    tabsArray.forEach((ele) => {
      ele.classList.remove("line-active");
      ele.classList.remove("act");

    });
    e.currentTarget.classList.add("line-active");
    e.currentTarget.classList.add("act");
  
  });
});

//scroll to id
var $root = $('html, body');
$('a[href^="#"]').click(function () {
    var href = $.attr(this, 'href');
    $root.animate({
        scrollTop: $(href).offset().top()
    }, 1000, function () {
        window.location.hash = href;
       
    });

    return false;
});

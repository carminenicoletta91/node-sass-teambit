// alert("HEllo world");
$ = require('jquery');

function init() {
  var navbar=$(".header-top");
  console.log(navbar);
  $(".cookie p span a[value='close-cookies']").click(closecookie);
  $(".menu-drop-box").mouseover(showmenu);
  $(".menu-drop-box >div").mouseleave(hidemenu);
  $(window).on("scroll",function(event){
    console.log(event);
    if (window.pageYOffset > 300) {
    navbar.addClass("f-navbar");
  } else {
    navbar.removeClass("f-navbar");
  }
  })

}

$(document).ready(init);

function closecookie(){
  var cookie=$(".cookie");
  console.log(cookie);
  cookie.hide();
}
function showmenu(){
  var menu=$(".menu-drop-box-items");
  menu.show();
}
function hidemenu(){
  var menu=$(".menu-drop-box-items");
  menu.hide();
}

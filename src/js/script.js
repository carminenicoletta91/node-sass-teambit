// alert("HEllo world");
$ = require('jquery');

function init() {

  $(".cookie p span a[value='close-cookies']").click(closecookie);
  $(".menu-drop-box").mouseover(showmenu);
  $(".menu-drop-box >div").mouseleave(hidemenu);
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

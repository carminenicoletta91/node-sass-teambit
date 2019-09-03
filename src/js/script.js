// alert("HEllo world");
$ = require('jquery');

function init() {
  $(".cookie p span a[value='close-cookies']").click(closecookie);
  console.log("JQuery Hello World");
}

$(document).ready(init);
function closecookie(){
  var cookie=$(".cookie");
  console.log(cookie);
  cookie.hide();
}

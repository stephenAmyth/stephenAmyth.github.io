var Cookies =0;

var oven = document.getElementById('YumYumClick');
var CookieCounter= document.getElementById('CookieCounter')

oven.onclick=function() {
  Cookies +=12;
  CookieCounter.innerHTML= cookies;
}

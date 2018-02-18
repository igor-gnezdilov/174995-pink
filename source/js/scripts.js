var mainNavWrapperToggle = document.querySelector(".main-nav__wrapper-nav");
var pageHeadernojs = document.querySelector(".page-header_nojs");
var pageHeader = document.querySelector(".page-header__wrapper");

pageHeadernojs.classList.remove("page-header_nojs");
pageHeadernojs.classList.add("page-header_js");
pageHeader.classList.add("page-header__wrapper_closed");

mainNavWrapperToggle.addEventListener("click", function(event) {
  if(event.target.tagName.toLowerCase() === "button") {
    event.preventDefault();
    pageHeader.classList.toggle("page-header__wrapper_opened");
    pageHeader.classList.toggle("page-header__wrapper_closed");
  }
});

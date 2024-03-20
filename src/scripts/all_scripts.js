import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, [pathname]);

  return null;
}

function scrollButton() {
   
  window.scrollTo({top: 0, left: 0, behavior: 'smooth'});     

}
// START OF MENU DROPDOWN
function menuDropClose() {
    var x = document.getElementById("menuDrpdown");
    if (x.className.indexOf("w3-show") === -1) {
      x.className += " w3-show";
    } else { 
      x.className = x.className.replace(" w3-show", "");
    }
  }
  // END OF MENU DROPDOWN
  

  function accordion() {
        
    var acc = document.getElementsByClassName("accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function() {
        this.classList.toggle("activeAccordion");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
          panel.style.maxHeight = null;
        } else {
          panel.style.maxHeight = panel.scrollHeight + "px";
        } 
      });
    }
}

  // END OF ACCORDION
  
export  {menuDropClose, scrollButton, ScrollToTop, accordion};
import { NavComponent } from "../components/nav.js";
import { FooterComponent } from "../components/footer.js";

// Loader
document.onreadystatechange = function () {
  if (document.readyState !== "complete") {
    document.querySelector("body").style.visibility = "hidden";
    document.querySelector("#loader").style.visibility = "visible";
  } else {
    document.querySelector("#loader").style.display = "none";
    document.querySelector("body").style.visibility = "visible";
  }
};

// Adding nav
const navRoot = document.getElementById("nav-root");
navRoot.innerHTML = NavComponent;

// Adding footer
const footerRoot = document.getElementById("footer-root");
footerRoot.innerHTML = FooterComponent;

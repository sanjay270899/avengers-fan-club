import { NavComponent } from "../components/nav.js";
import { FooterComponent } from "../components/footer.js";

// Adding nav
const navRoot = document.getElementById("nav-root");
navRoot.innerHTML = NavComponent;

// Adding footer
const footerRoot = document.getElementById("footer-root");
footerRoot.innerHTML = FooterComponent;

import { homePageLoad } from "./homepageload.js";
import { contentRemove } from "./contentremove.js";
import { setActive, removeActive } from "./setActive.js";
import { menuLoad } from "./menupageload.js";
import { aboutLoad } from "./aboutpageload.js";

//SET PATH=C:\Program Files\Nodejs;%PATH%

const homeTab = document.getElementById("home");
homeTab.addEventListener("click", (e) => {
  contentRemove();
  removeActive(homeTab, menuTab, aboutTab);
  setActive(e.target);
  homePageLoad();
});

const menuTab = document.getElementById("menu");
menuTab.addEventListener("click", (e) => {
  contentRemove();
  removeActive(homeTab, menuTab, aboutTab);
  setActive(e.target);
  menuLoad();
});

const aboutTab = document.getElementById("about");
aboutTab.addEventListener("click", (e) => {
  contentRemove();
  removeActive(homeTab, menuTab, aboutTab);
  setActive(e.target);
  aboutLoad();
});

homePageLoad();
setActive(homeTab);

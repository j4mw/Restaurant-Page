const content = document.getElementById("content");

const title = document.createElement("h3");
title.textContent = "Lizard Pasta";
const pageDescription = document.createElement("p");
pageDescription.textContent =
  "selling the best and freshest pasta on the reptile coast \
   (much better than snakes pasta).";
const image = document.createElement("img");
image.src = "./images/pizza.jpg";

export const homePageLoad = () => {
  content.append(title, pageDescription, image);
};

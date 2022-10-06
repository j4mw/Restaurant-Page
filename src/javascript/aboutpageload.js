const content = document.getElementById("content");

const address = document.createElement("p");
address.setAttribute("style", "white-space:pre");
address.classList.add("address");
address.textContent =
  "44 Lizard Lane\nReptile Coast\nKomodo Island\nTel: 014-586-665-79\nEmail: lizardpasta@fakemail.com";

const openingTimes = document.createElement("p");

openingTimes.setAttribute("style", "white-space:pre");
openingTimes.classList.add("openingTimes");
openingTimes.textContent =
  "Mon: 9am - 10pm\nTue: 9am - 10pm\nWed: Closed\nThu: 9am - 10pm\nFri: 9am - 10pm\nSat: 9am - 10pm\nSun: Closed\n";

export const aboutLoad = () => {
  content.append(address, openingTimes);
};

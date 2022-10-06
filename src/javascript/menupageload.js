const content = document.getElementById("content");

const menu = document.createElement("ul");

const createMenuItem = (title, price) => {
  const menuItem = document.createElement("li");
  const menuItemTitle = document.createElement("h2");
  const menuItemPrice = document.createElement("h2");

  menuItemTitle.textContent = title;
  menuItemPrice.textContent = price;

  menuItem.append(menuItemTitle, menuItemPrice);
  return menuItem;
};

menu.appendChild(createMenuItem("Classic Ragù", "£11.95"));
menu.appendChild(createMenuItem("Carbonara", "£10.95"));
menu.appendChild(createMenuItem("Calcio e Pepe", "£9.45"));
menu.appendChild(createMenuItem("Lasagne", "£13.95"));
menu.appendChild(createMenuItem("Gnocchi", "£8.45"));
menu.appendChild(createMenuItem("Ravioli", "£10.95"));
menu.appendChild(createMenuItem("Aglio e Olio", "£8.95"));

export const menuLoad = () => {
  content.append(menu);
};

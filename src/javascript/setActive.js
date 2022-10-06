export const setActive = (r) => {
  r.classList.add("active");
};

export const removeActive = (tab1, tab2, tab3) => {
  tab1.classList.remove("active");
  tab2.classList.remove("active");
  tab3.classList.remove("active");
};

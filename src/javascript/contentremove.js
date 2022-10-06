const content = document.getElementById("content");

export const contentRemove = () => {
  while (content.children.length > 1) {
    content.children[1].remove();
  }
};

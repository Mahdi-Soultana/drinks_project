import getEl from "./getElement.js";
let container = getEl(".container");
let loaderContainer = getEl(".loader_container");
const displayDrinks = (drinks) => {
  console.log("updated");
  container.innerHTML = "";
  loaderContainer.classList.add("active");
  if (drinks) {
    drinks.forEach((drinkObj) => {
      let { idDrink: id, strDrink: name, strDrinkThumb: src } = drinkObj;
      let a = document.createElement("a");
      a.setAttribute("href", "singleDrink.html");
      a.setAttribute("id", id);
      a.setAttribute("title", name);
      a.innerHTML = `
    <article class="drink" id="${id}">
        <img
        src="${src}"
        alt=""
        />
        <h2>${name}</h2>
        </article>
        `;

      container.appendChild(a);
    });
    loaderContainer.classList.remove("active");
  }
};
export default displayDrinks;

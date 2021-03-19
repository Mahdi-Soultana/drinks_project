import fetchDrinks from "./utils/fetchDrinks.js";
import getEl from "./utils/getElement.js";
let id = localStorage.getItem("drink");
let URL = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;
let loaderContainer = getEl(".loader_container");
let imgHtml = getEl(".img_holder img");
let nameHtml = getEl(".details h1");
let inst = getEl(".details p");
let ol = getEl(".details ol");

async function showDrinks(url) {
  const data = await fetchDrinks(url);

  let {
    drinks: [{ strGlass: name, strDrinkThumb: img, strInstructions, ...rest }],
  } = data;
  nameHtml.innerText = name;
  inst.innerText = strInstructions;
  imgHtml.src = img;

  let ingridient = [];
  for (const key in rest) {
    if (Object.hasOwnProperty.call(rest, key)) {
      if (key.includes("strIngredient")) {
        ingridient.push(rest[key]);
      }
    }
  }
  ingridient = ingridient
    .filter((ing) => ing)
    .map((ing) => `<li>${ing}</li>`)
    .join("");
  ol.innerHTML = ingridient;
  console.log(name, img, ingridient);
  loaderContainer.classList.remove("active");
}
showDrinks(URL);

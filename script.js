import "./utils/search.js";
import fetchDrinks from "./utils/fetchDrinks.js";
import displayDrink from "./utils/displayDrink.js";
import getEl from "./utils/getElement.js";
let query = "a";
const URL = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=`;

let contianer = getEl(".container");
let loaderContainer = getEl(".loader_container");

async function showDrinks(url) {
  loaderContainer.classList.add("active");
  const data = await fetchDrinks(url);
  console.log(data);
  if (!data.drinks) {
    contianer.innerHTML = "<h3>Sorry You Have No Drink With Your Search</h3>";
  } else {
    let { drinks } = data;
    displayDrink(drinks);
  }
}

let form = getEl("form");

form.addEventListener("keyup", async (e) => {
  let input = e.target;
  let value = input.value;
  query = value;

  showDrinks(URL + query);
});
contianer.addEventListener("click", async (e) => {
  let id = e.target.parentElement.id;
  localStorage.setItem("drink", id);
});

showDrinks(URL + query);

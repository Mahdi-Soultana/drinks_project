const getElement = (selection) => {
  const el = document.querySelector(selection);
  if (el) return el;
  throw Error(`Please Try To RESELECT Your Element "${selection}"`);
};
export default getElement;

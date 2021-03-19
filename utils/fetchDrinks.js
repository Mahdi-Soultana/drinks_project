const fetchDrinks = async (URL) => {
  try {
    const data = await fetch(URL).then((data) => data.json());
    return data;
  } catch (e) {
    console.log("Data Not Fetch CORRECTLY ", e.message);
    return null;
  }
};
export default fetchDrinks;

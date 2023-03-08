export function filterData(resName, restaurants) {
  if (resName === "") {
    return restaurants;
  } else {
    let filterData = restaurants.filter((restaurant) =>
      restaurant.data.name.toLowerCase().includes(resName.toLowerCase())
    );
    return resName.length >= 3 ? filterData : "no"
  }
}



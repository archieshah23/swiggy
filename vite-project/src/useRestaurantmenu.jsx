import { useEffect, useState } from "react";

export const useRestaurantmenu = (id) => {
  const [resInfo, setResinfo] = useState(null);

  useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=23.022505&lng=72.5713621&restaurantId=" +
        id
    );
    const json = await data.json();
    setResinfo(json.data);
  };
  return resInfo;
};

// useEffect(() => {
//   fetchmenu();
// }, []);
// const fetchmenu = async () => {
//   try {
//     const data = await fetch(
//       "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=23.022505&lng=72.5713621&restaurantId=" +
//         id
//     );

//     const json = await data.json();
//     setResinfo(json.data);
//   } catch (err) {
//     console.error("Failed to fetch menu:", err);
//   }
// };

import { useEffect, useState } from "react";
import resList from "../db/data";
import "./body.css";
import { Restaurantcards } from "./RestaurantCard";
import { Shimmer } from "./Shimmer";
export const Body = () => {
  const [listofRestaurant, setListofRestaurant] = useState(resList);

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    setListofRestaurant(json.data.cards[7].card.card);
  };

  if (listofRestaurant.length === 0) {
    return <Shimmer />;
  }
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const topRated = listofRestaurant.filter(
              (res) => res.info.avgRating > 4.5
            );
            setListofRestaurant(topRated);
          }}
        >
          Top rated restaurants
        </button>
      </div>
      <div className="res-container">
        {/* {listofRestaurant.map((restaurant) => (
          <Restaurantcards key={restaurant.info.id} resData={restaurant} />
        ))} */}

        {Array.isArray(listofRestaurant) &&
          listofRestaurant.map((restaurant) => (
            <Restaurantcards key={restaurant.info.id} resData={restaurant} />
          ))}
      </div>
    </div>
  );
};

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./body.css";
import { Restaurantcards } from "./RestaurantCard";
import { Shimmer } from "./Shimmer";
export const Body = () => {
  const [listofRestaurant, setListofRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchtext, setSearchtext] = useState("");

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.022505&lng=72.5713621&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    // https://corsproxy.io/?url=https://example.com
    const json = await data.json();
    console.log(json);
    setListofRestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  if (listofRestaurant.length === 0) {
    return <Shimmer />;
  }
  return (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchtext}
            onChange={(e) => {
              setSearchtext(e.target.value);
            }}
          />
          <button
            onClick={() => {
              const filteredRestaurant = listofRestaurant.filter((res) =>
                res.info.name.toLowerCase().includes(searchtext.toLowerCase())
              );
              setFilteredRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const topRated = listofRestaurant.filter(
              (res) => res.info.avgRating >= 4.5
            );
            setFilteredRestaurant(topRated);
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
          filteredRestaurant.map((restaurant) => (
            <Link
              className="nav-link"
              key={restaurant.info.id}
              to={"/restaurants/" + restaurant.info.id}
            >
              <Restaurantcards resData={restaurant} />
            </Link>
          ))}
      </div>
    </div>
  );
};

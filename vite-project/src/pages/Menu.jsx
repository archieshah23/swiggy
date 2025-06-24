import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Shimmer } from "./Shimmer";

export const Menu = () => {
  const [resInfo, setResinfo] = useState("");
  const { id } = useParams();
  useEffect(() => {
    fetchmenu();
  }, []);
  const fetchmenu = async () => {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=23.022505&lng=72.5713621&restaurantId=" +
          id
      );

      const json = await data.json();
      setResinfo(json.data);
    } catch (err) {
      console.error("Failed to fetch menu:", err);
    }
  };
  if (
    !resInfo?.cards ||
    resInfo.cards.length < 5 ||
    !resInfo.cards[2]?.card?.card?.info ||
    !resInfo.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
      ?.itemCards
  ) {
    return <Shimmer />;
  }
  const { name, avgRatingString, costForTwoMessage, cuisines, areaName } =
    resInfo.cards[2].card.card.info;

  const { itemCards } =
    resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card;
  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>
        {avgRatingString} - {costForTwoMessage}
      </p>
      <h3>{cuisines.join(", ")}</h3>
      <h3>{areaName}</h3>
      <hr></hr>
      <h2>Menu</h2>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} - Rs.
            {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

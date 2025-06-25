import { useParams } from "react-router-dom";
import { useRestaurantmenu } from "../useRestaurantmenu";
import { Shimmer } from "./Shimmer";
import "./mrnu.css";
export const Menu = () => {
  // const [resInfo, setResinfo] = useState("");
  const { id } = useParams();
  const resInfo = useRestaurantmenu(id);

  if (!resInfo?.cards || resInfo.cards.length < 1) {
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
        {itemCards?.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} - Rs.
            {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

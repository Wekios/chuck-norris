import { useSelector } from "react-redux";
import { RandomFact } from "./RandomFact";
import { Card } from "components/Card/Card";

export function FactBoard() {
  const { previousSearches: list } = useSelector((state) => state.factBoard);
  const content = !!list.length ? (
    list.map((item) => (
      <Card as="li" key={item.id} image={{ imageUrl: item.icon_url, imageAlt: "avatar" }} text={item.value} />
    ))
  ) : (
    <RandomFact />
  );
  return (
    <ul>
      <h2>List of achievements: </h2>
      {content}
    </ul>
  );
}

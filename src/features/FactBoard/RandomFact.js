import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { factBoardActions } from "./factBoardSlice";
import { Card } from "components/Card/Card";

export function RandomFact() {
  const dispatch = useDispatch();
  const { isLoading, randomFact, error } = useSelector((state) => state.factBoard);

  useEffect(() => {
    if (!randomFact) dispatch(factBoardActions.getRandomFact());
    return () => {};
  }, [dispatch, randomFact]);

  if (isLoading) return <p>loading...</p>;
  else if (error) return <p>{error}</p>;

  return (
    randomFact && <Card as="li" image={{ imageUrl: randomFact.icon_url, imageAlt: "avatar" }} text={randomFact.value} />
  );
}

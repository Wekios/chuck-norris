import styles from "./SingleFact.module.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container } from "components/Layout/Container";
import { factActions } from "./singleFactSlice";
import { Card } from "components/Card/Card";

export function SingleFact({ id }) {
  const dispatch = useDispatch();

  const { isLoading, data, error } = useSelector((state) => state.fact);

  useEffect(() => {
    dispatch(factActions.fetchById(id));
  }, [dispatch, id]);

  let content;

  if (isLoading) content = <p className={styles.info}>Loading...</p>;
  else if (error) content = <p className={styles.info}>{error}</p>;
  else content = <Card image={{ imageUrl: data.icon_url, imageAlt: "chuck" }} text={data.value} />;

  return (
    <Container className={styles.container} width="narrow">
      {content}
    </Container>
  );
}

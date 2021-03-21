import styles from "./SingleFact.module.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container } from "components/Layout/Container";
import { factActions } from "./singleFactSlice";

export function SingleFact({ id }) {
  const dispatch = useDispatch();

  const { isLoading, data, error } = useSelector((state) => state.fact);

  useEffect(() => {
    dispatch(factActions.fetchById(id));
  }, [dispatch, id]);

  let content;

  if (isLoading) content = <p>Loading...</p>;
  else if (error) content = <p>{error}</p>;
  else
    content = (
      <blockquote className={styles.quote}>
        <span className={styles.text}>{data.value}</span>
      </blockquote>
    );

  return <Container width="narrow">{content}</Container>;
}

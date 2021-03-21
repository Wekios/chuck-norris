import styles from "./index.module.css";
import { Container } from "../../components/Layout/Container";
import { FactSearch } from "features/FactSearch/FactSearch";

export function LandingPage() {
  return (
    <>
      <Container className={styles.chuck} width="narrow">
        <FactSearch />
      </Container>
      <section>Previous searches or random fact</section>
    </>
  );
}

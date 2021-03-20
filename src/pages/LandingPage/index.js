import { Autosuggest } from "features/Autosuggest/Autosuggest";
import { API_CHUCK_POINT, chuckSearchData } from "services/chuck-quote";
import { Container } from "../../components/Layout/Container";
import styles from "./index.module.css";

export function LandingPage() {
  return (
    <>
      <Container className={styles.chuck} width="narrow">
        <Autosuggest
          id="chucked"
          endpoint={API_CHUCK_POINT}
          transformSearchData={chuckSearchData}
          label="search for a quote"
        />
      </Container>
      <section>Previous searches or random fact</section>
    </>
  );
}

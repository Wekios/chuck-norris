import styles from "./FactSearch.module.css";
import { useHistory } from "react-router";
import { searchActions } from "features/FactSearch";
import { useDispatch, useSelector } from "react-redux";
import { Autosuggest } from "components/Autosuggest/Autosuggest";
import { Container } from "components/Layout/Container";
import { factBoardActions } from "features/FactBoard";

export function FactSearch() {
  const dispatch = useDispatch();
  const { previousSearches, ...searchData } = useSelector((state) => state.search);
  const history = useHistory();

  const handleSearch = (value) => {
    dispatch(searchActions.search(value));
  };

  const handleSelect = (selection) => {
    dispatch(factBoardActions.selectFact(selection));
    history.push("/details/" + selection.id);
  };

  return (
    <Container className={styles.chuck} width="narrow">
      <Autosuggest
        request={searchData}
        id="chuck"
        label="search for a quote"
        onSearch={handleSearch}
        onSelect={handleSelect}
        minLength={3}
      />
    </Container>
  );
}

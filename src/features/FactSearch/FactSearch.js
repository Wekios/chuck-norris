import { useHistory } from "react-router";
import { searchActions } from "store/search";
import { useDispatch, useSelector } from "react-redux";
import { Autosuggest } from "components/Autosuggest/Autosuggest";

export function FactSearch() {
  const dispatch = useDispatch();
  const search = useSelector((state) => state.search);
  const history = useHistory();

  const handleSearch = (value) => {
    dispatch(searchActions.search(value));
  };

  const handleSelect = (e) => {
    const path = e.currentTarget.id;
    history.push("/details/" + path);
  };

  return (
    <Autosuggest
      request={search}
      id="chuck"
      label="search for a quote"
      onSearch={handleSearch}
      onSelect={handleSelect}
      minLength={3}
    />
  );
}

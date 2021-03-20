import styles from "./Autosuggest.module.css";
import { Link } from "react-router-dom";
import { useAsync } from "hooks/useAsync";

// TODO: Because of the time constraint, and to avoid over-engineering, this component is not as generic nor modular as it should be
// e.g. endpoint only works if the query is at the end, transformSearchData could be reworked, input requests are not debounced...
export function Autosuggest({ id, endpoint, transformSearchData, label }) {
  const [{ isLoading, isError, data }, setUrl] = useAsync(null, [], transformSearchData);

  const handleSearch = (e) => {
    const value = e.target.value;
    if (value.length >= 3) setUrl(`${endpoint}${value}`);
  };

  if (isError) return <p>Something went wrong...</p>;

  const containsData = data.length > 0 && !isLoading;

  return (
    <div className={styles.autosuggest}>
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>
      <div className={styles.comboBox} role="combobox" aria-expanded={containsData} aria-controls={`listbox-${id}`}>
        <input
          id={id}
          className={styles.input}
          onChange={handleSearch}
          type="text"
          placeholder="Try typing more than 2 characters"
        />
        {isLoading && <p>Loading...</p>}
        {containsData && (
          <AutosuggestList
            id={`listbox-${id}`}
            options={data}
            className={styles.list}
            optionsClassName={styles.listItem}
          />
        )}
      </div>
    </div>
  );
}

// TODO: the option elements are really reliant on a certain data shape and would break if it changed.

export function AutosuggestList({ id: rootId, className, options, optionsClassName }) {
  return (
    <ul id={rootId} className={className} role="listbox">
      {options.map(({ id, value }) => (
        <li key={id} className={optionsClassName}>
          <Link to={`/details/${id}`}>{value}</Link>
          {/* <span></span> */}
        </li>
      ))}
    </ul>
  );
}

import { useState } from "react";
import styles from "./Autosuggest.module.css";

export function Autosuggest({ id, onSearch, onSelect, label, request, minLength = 0 }) {
  const { isLoading, data, error } = request;
  const [value, setValue] = useState("");

  const handleOnChange = (e) => {
    const value = e.target.value;
    setValue(value);
    if (value.length >= minLength) {
      onSearch(value);
    }
  };

  const containsData = data.length > 0 && !isLoading;

  let content;

  if (isLoading) content = <p>Loading...</p>;
  else if (error) content = <p>{error}</p>;
  else if (value.length >= minLength)
    content = <AutosuggestList id={`listbox-${id}`} onSelect={onSelect} options={data} />;

  return (
    <div className={styles.autosuggest}>
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>
      <div className={styles.comboBox} role="combobox" aria-expanded={containsData} aria-controls={`listbox-${id}`}>
        <input
          id={id}
          className={styles.input}
          onChange={handleOnChange}
          type="search"
          placeholder="Try typing more than 2 characters"
          minLength={minLength}
        />
        {content}
      </div>
    </div>
  );
}

export function AutosuggestList({ id, onSelect, options }) {
  return (
    <ul id={id} className={styles.list} role="listbox">
      {options.map((option) => (
        <li key={option.id} className={styles.listItem}>
          <button className={styles.listButton} onClick={() => onSelect(option)}>
            <span className={styles.listText}>{option.value}</span>
          </button>
        </li>
      ))}
    </ul>
  );
}

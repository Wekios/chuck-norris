import styles from "./Autosuggest.module.css";

export function Autosuggest({ id, onChange, onSelect, label, request }) {
  const { isLoading, data, error } = request;

  const containsData = data.length > 0 && !isLoading;

  let content;

  if (isLoading) content = <p>Loading...</p>;
  else if (error) content = <p>{error}</p>;
  else content = <AutosuggestList id={`listbox-${id}`} onSelect={onSelect} options={data} />;

  return (
    <div className={styles.autosuggest}>
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>
      <div className={styles.comboBox} role="combobox" aria-expanded={containsData} aria-controls={`listbox-${id}`}>
        <input
          id={id}
          className={styles.input}
          onChange={onChange}
          type="search"
          placeholder="Try typing more than 2 characters"
        />
        {content}
      </div>
    </div>
  );
}

export function AutosuggestList({ id: rootId, onSelect, options }) {
  return (
    <ul id={rootId} className={styles.list} role="listbox">
      {options.map(({ id, value }) => (
        <li key={id} className={styles.listItem}>
          <button className={styles.listButton} onClick={onSelect} id={id}>
            <span className={styles.listText}>{value}</span>
          </button>
        </li>
      ))}
    </ul>
  );
}

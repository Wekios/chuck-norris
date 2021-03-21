export function setIntoStorage(key, data) {
  localStorage.setItem(key, data);
}

export function getFromStorage(key, fallback) {
  const items = localStorage.getItem(key);
  return items ? items : fallback;
}

export function removeFromStorage(key) {
  localStorage.removeItem(key);
}

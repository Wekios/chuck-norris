export const API_CHUCK_POINT = "https://api.chucknorris.io/jokes/search?query=";

// Bad pun for naming
export function chuckSearchData(data) {
  return data.result.slice(0, 6);
}

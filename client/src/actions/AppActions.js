export function saveMovies(movies) {
  return { type: "SAVE_MOVIES", payload: movies };
}

export function saveList(list) {
  return { type: "SAVE_LIST", payload: list };
}

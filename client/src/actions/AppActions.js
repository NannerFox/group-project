export function saveMovies(movies) {
  return { type: "SAVE_MOVIES", payload: movies };
}

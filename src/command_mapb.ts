import type { State } from "./state.js";

export async function commandMapBack(state: State): Promise<void> {
  if (!state.prevLocationsURL) {
    console.log("you're on the first page");
    return;
  }

  const data = await state.pokeAPI.fetchLocations(state.prevLocationsURL);

  for (const area of data.results) {
    console.log(area.name);
  }

  state.nextLocationsURL = data.next;
  state.prevLocationsURL = data.previous;
}
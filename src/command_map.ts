import type { State } from "./state.js";

export async function commandMap(state: State): Promise<void> {
  const data = await state.pokeAPI.fetchLocations(state.nextLocationsURL ?? undefined);

  for (const area of data.results) {
    console.log(area.name);
  }

  state.nextLocationsURL = data.next;
  state.prevLocationsURL = data.previous;
}
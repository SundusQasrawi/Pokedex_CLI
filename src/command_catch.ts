import type { State } from "./state.js";

export async function commandCatch(state: State, pokemonName: string): Promise<void> {
  if (!pokemonName) {
    console.log("Please provide a pokemon name.");
    return;
  }

  const name = pokemonName.toLowerCase();
  console.log(`Throwing a Pokeball at ${name}...`);

  const pokemon = await state.pokeAPI.fetchPokemon(name);

  // Higher base_experience => harder to catch
  // This formula keeps it "reasonable" to catch.
  const maxBaseExp = 400;
  const difficulty = Math.min(pokemon.base_experience, maxBaseExp) / maxBaseExp; // 0..1
  const catchChance = 0.6 - difficulty * 0.5; // from ~0.6 down to ~0.1
  const roll = Math.random();

  if (roll < catchChance) {
    state.pokedex[pokemon.name] = pokemon;
    console.log(`${pokemon.name} was caught!`);
  } else {
    console.log(`${pokemon.name} escaped!`);
  }
}
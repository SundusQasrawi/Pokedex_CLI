import { createInterface, type Interface } from "node:readline";
import { PokeAPI } from "./pokeapi.js";
import { Cache } from "./pokecache.js";
import type { Pokemon } from "./pokeapi.js";

export type CLICommand = {
  name: string;
  description: string;
callback: (state: State, ...args: string[]) => Promise<void>;};

export type State = {
  rl: Interface;
  commands: Record<string, CLICommand>;
  pokeAPI: PokeAPI;
  cache: Cache;
  nextLocationsURL: string | null;
  prevLocationsURL: string | null;
  pokedex: Record<string, Pokemon>;
};

import { getCommands } from "./commands.js";

export function initState(): State {
  const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: "Pokedex > ",
  });

  const commands = getCommands();

  const cache = new Cache(5 * 60 * 1000); // 5 minutes
  const pokeAPI = new PokeAPI(cache);

  return {
    rl,
    commands,
    cache,
    pokeAPI,
    nextLocationsURL: null,
    prevLocationsURL: null,
    pokedex: {},
  };
}
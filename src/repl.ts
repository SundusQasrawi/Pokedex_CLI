import type { State } from "./state.js";

export function cleanInput(input: string): string[] {
  return input.trim().toLowerCase().split(/\s+/).filter(Boolean);
}

export function startREPL(state: State) {
  state.rl.prompt();

  state.rl.on("line",async (line) => {
    const words = cleanInput(line);

    if (words.length === 0) {
      state.rl.prompt();
      return;
    }

    const commandName = words[0];
    const command = state.commands[commandName];

    if (!command) {
      console.log("Unknown command.");
      state.rl.prompt();
      return;
    }

    try {
      await command.callback(state, ...words.slice(1));    } catch (err) {
      console.log(err);
    }

    state.rl.prompt();
  });
}
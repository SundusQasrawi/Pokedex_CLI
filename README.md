# CLI Pokédex (TypeScript)

A command-line Pokédex application built with TypeScript that allows users to explore Pokémon locations, catch Pokémon, and manage a personal Pokédex using data from the PokéAPI.

---

## 📌 Overview

This project is a **terminal-based interactive application (REPL)** where users can:

* Browse Pokémon world locations
* Explore areas to discover Pokémon
* Catch Pokémon with randomized mechanics
* Store caught Pokémon in a local Pokédex
* Inspect detailed Pokémon stats

The application fetches real-time data from a public REST API (PokéAPI) and adds custom logic on top.

---

## 🚀 Features

* Interactive CLI using a REPL loop
* Integration with PokéAPI for live Pokémon data
* Pagination through location areas
* Explore areas to find Pokémon
* Catch Pokémon using probability-based logic
* Inspect Pokémon stats (height, weight, stats, types)
* Local in-memory Pokédex system
* In-memory caching to reduce API calls
* Unit testing with Vitest

---

## 🛠️ Tech Stack

* TypeScript
* Node.js
* PokéAPI (REST API)
* Vitest (testing)

---

## 📦 Installation & Running

```bash
npm install
npm run dev
```

---

## 🧠 How It Works

The app runs as a REPL (Read-Eval-Print Loop):

1. User types a command
2. Input is cleaned and parsed
3. Command is matched
4. Command function executes
5. Output is printed
6. Program waits for next input

---

## ⌨️ Commands

### `help`

Displays all available commands.

### `exit`

Closes the application.

### `map`

Displays the next 20 Pokémon location areas.

### `mapb`

Displays the previous 20 location areas.

### `explore <area>`

Shows Pokémon found in a given location.

Example:

```bash
explore pastoria-city-area
```

---

### `catch <pokemon>`

Attempts to catch a Pokémon.

* Uses Pokémon data from the API
* Higher base experience = harder to catch
* Adds Pokémon to Pokédex if successful

---

### `inspect <pokemon>`

Displays details of a caught Pokémon:

* Name
* Height
* Weight
* Stats
* Types

---

### `pokedex`

Lists all Pokémon you have caught.

---

## 🌐 API Usage

The application uses the PokéAPI to fetch:

* Location areas (`/location-area`)
* Pokémon in areas (`/location-area/{name}`)
* Pokémon details (`/pokemon/{name}`)

---

## ⚡ Caching

The app includes an in-memory cache:

* Stores API responses
* Reduces repeated network calls
* Automatically clears old entries after a set interval


---

## 🧪 Testing

Run tests with:

```bash
npm run test
```
---

## 🎯 Example Usage

```bash
Pokedex > map
Pokedex > explore pastoria-city-area
Pokedex > catch pikachu
Pokedex > inspect pikachu
Pokedex > pokedex
```

---

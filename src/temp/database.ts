const allCards = [
  "Alakazam",
  "Blastoise",
  "Chansey",
  "Charizard",
  "Clefairy",
  "Gyarados",
  "Hitmonchan",
  "Machamp",
  "Magneton",
  "Mewtwo",
  "Nidoking",
  "Ninetales",
  "Poliwrath",
  "Raichu",
  "Venusaur",
  "Zapdos",
  "Beedrill",
  "Dragonair",
  "Dugtrio",
  "Electabuzz",
  "Electrode",
  "Pidgeotto",
  "Arcanine",
  "Charmeleon",
  "Dewgong",
  "Dratini",
  "Farfetch'd",
  "Growlithe",
  "Haunter",
  "Ivysaur",
  "Jynx",
  "Kadabra",
  "Kakuna",
  "Machoke",
  "Magikarp",
  "Magmar",
  "Nidorino",
  "Poliwhirl",
  "Porygon",
  "Raticate",
  "Seel",
  "Wartortle",
  "Abra",
  "Bulbasaur",
  "Caterpie",
  "Charmander",
  "Diglett",
  "Doduo",
  "Drowzee",
  "Gastly",
  "Koffing",
  "Machop",
  "Magnemite",
  "Metapod",
  "Nidoran♂",
  "Onix",
  "Pidgey",
  "Pikachu",
  "Poliwag",
  "Ponyta",
  "Rattata",
  "Sandshrew",
  "Squirtle",
  "Starmie",
  "Staryu",
  "Tangela",
  "Voltorb",
  "Vulpix",
  "Weedle",
  "Professor Oak",
  "Bill",
  "Energy Removal",
  "Gust of Wind",
  "Potion",
  "Super Potion",
  "Switch",
  "Full Heal",
  "Revive",
  "Computer Search",
  "Devolution Spray",
  "Item Finder",
  "Lass",
  "Pokémon Breeder",
  "Pokémon Trader",
  "Defender",
  "PlusPower",
  "Pokédex",
  "Maintenance",
  "Double Colorless Energy",
  "Fighting Energy",
  "Fire Energy",
  "Grass Energy",
  "Lightning Energy",
  "Psychic Energy",
  "Water Energy"
]

export const getRandomCard = (): string => {
  const cardIndex = Math.floor(Math.random() * allCards.length)
  return allCards[cardIndex]
}

export const getRandomCards = (amount: number): string[] => {
  const cards: string[] = []

  for (let i = 0; i < amount; i++) {
    cards.push(getRandomCard())
  }

  return cards
}
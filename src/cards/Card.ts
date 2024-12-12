export type Rarity = "Common" | "Uncommon" | "Rare" | "Holo Rare"
export type CardType = "Pokémon" | "Trainer" | "Energy"

export type Card = {
  name: string
  rarity: Rarity
}

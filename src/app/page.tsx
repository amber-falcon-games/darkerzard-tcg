"use client"

import { memo, useState } from "react"
import { getRandomCards } from "@/temp/database"
import { Card } from "@/cards/Card"
import CardView from "@/cards/CardView"

type CollectionProps = {
  cards: Card[]
}

const Collection = ({ cards }: CollectionProps) => {

  if (cards.length === 0) {
    return <p>Your collection is empty. Open a pack to start collecting!</p>
  }

  return (
    <div className="flex flex-nowrap">
      {cards.map((card) => <CardView key={card.name} card={card} />)}
    </div>
  )
}

const Home = () => {
  const [cards, setCards] = useState<Card[]>([])
  const [openingPack, setOpeningPack] = useState(false)

  const openPack = () => {
    setOpeningPack(true)

    const newCards = getRandomCards(11)
    setCards([...cards, ...newCards])

    setOpeningPack(false)
  }

  return (
    <>
      <div>Welcome!</div>

      <button onClick={openPack} disabled={openingPack}>
        Open pack
      </button>

      <h1>Collection</h1>
      <Collection cards={cards} />
    </>
  )
}

export default memo(Home)

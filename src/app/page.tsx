"use client"

import { getRandomCards } from "@/temp/database"
import { memo, useState } from "react"

type CardProps = {
  name: string
}

const Card = ({ name }: CardProps) => (
  <p>{name}</p>
)

type CollectionProps = {
  cards: string[]
}

const Collection = ({ cards }: CollectionProps) => {

  if (cards.length === 0) {
    return <p>Your collection is empty. Open a pack to start collecting!</p>
  }

  return (
    <>
      {cards.map((cardName) => <Card key={cardName} name={cardName} />)}
    </>
  )
}

const Home = () => {
  const [cards, setCards] = useState<string[]>([])
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

"use client"

import { memo, useState } from "react"
import { getRandomCards } from "@/temp/database"
import { Card } from "@/cards/Card"
import Collection from "@/components/Collection"

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

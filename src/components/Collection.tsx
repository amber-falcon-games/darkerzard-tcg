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

export default Collection

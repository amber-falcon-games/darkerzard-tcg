import { memo } from "react"
import { Card } from "./Card"
import CardComponent from "@/components/Card"

type Props = {
  card: Card
}

const CardView = ({ card }: Props) => (
  <CardComponent
    header={card.name}
    tags={[
      card.rarity,
      card.type
    ]}
  />
)

export default memo(CardView)

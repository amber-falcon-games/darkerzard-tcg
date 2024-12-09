type Props = {
  header: string
  tags: string[]
}

const Card = ({ header, tags }: Props) => (
  <div className="max-w-sm rounded overflow-hidden shadow-lg">
    {/* <img className="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains" /> */}
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2">{header}</div>
      {/* <p className="text-gray-700 text-base">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
      </p> */}
    </div>
    <div className="px-6 pt-4 pb-2">
      {tags.map((tag, index) => (
        <span
          key={`${tag}-${index}`}
          className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
        >
          {tag}
        </span>
      ))}
    </div>
  </div>
)

export default Card

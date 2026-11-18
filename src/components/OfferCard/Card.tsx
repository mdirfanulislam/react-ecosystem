import { CircleCheck } from "lucide-react";

interface card {
  name: string;
  price?: number;
  currency?: string;
  billing: string;
  forWhom: string;
  features: string[];
  buttonText: string;
  highlighted: boolean;
  badge?: string;
  Recommend?: string;
}

interface cardProps {
  card: card;
}

const Card = ({ card }: cardProps) => {
  return (
    <div
      className={`bg-white text-rose-400 p-6 shadow-2xl rounded-4xl font-semibold flex flex-col gap-4 ${card.highlighted && "border-6 border-rose-300"} hover:scale-105 transition-all duration-500`}
    >
      {card.highlighted && (
        <div className="sm:flex text-gray-50 font-mono gap-2">
          <span className="sm:flex-1 justify-center bg-yellow-400 p-2 text-xl rounded-3xl hover:scale-105 transition-all duration-500 flex items-center mb-3 sm:mb-0">
            {card.badge}
          </span>
          <span className="sm:flex-1 justify-center bg-green-400 p-2 text-xl rounded-3xl hover:scale-105 transition-all duration-500 flex items-center">
            {card.Recommend}
          </span>
        </div>
      )}
      <h3 className="font-serif font-bold text-gray-700 text-4xl">
        {card.name}
      </h3>
      <p className="font-mono text-xl text-gray-400">{card.forWhom}</p>
      <div className="sm:flex font-serif font-bold text-5xl">
        <div>
          {card.currency}
          {card.price}
        </div>
        {card.billing}
      </div>
      <ul className="flex flex-1 flex-col gap-4 font-mono bg-rose-400 p-4 rounded-2xl text-white">
        {card.features.map((feature, index) => (
          <li key={index} className="flex gap-4">
            <CircleCheck strokeWidth={3} />
            {feature}
          </li>
        ))}
      </ul>
      <button className="mt-2 px-4 py-2 bg-gray-700 text-white text-2xl w-full rounded-3xl cursor-pointer hover:scale-102 transition-all duration-500">
        {card.buttonText}
      </button>
    </div>
  );
};

export default Card;

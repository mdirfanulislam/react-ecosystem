import Card from "./Card";
import cardData from "./OfferCard.json";

const OfferCard = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 m-10">
      {cardData.map((card) => (
        <Card key={card.id} card={card} />
      ))}
    </section>
  );
};

export default OfferCard;

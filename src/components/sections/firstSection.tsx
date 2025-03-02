import { component$ } from "@builder.io/qwik";
import { CardOne } from "../cards/cardOne";

interface CardProps {
  cardImageSrc: string;
  cardImageAlt: string;
  cardStatement: string;
  cardTitle: string;
  cardDescription: string;
  layout?: "normal" | "reverse";
}

interface SectionProps {
  cards: CardProps[];
}

export const FirstSection = component$<SectionProps>(({ cards }) => {
  return (
    <>
      <section class="m-auto flex flex-col gap-16 px-6 py-20 lg:max-w-screen-lg">
        {cards.map((card, index) => (
          <CardOne
            key={index}
            imageSrc={card.cardImageSrc}
            imageAlt={card.cardImageAlt}
            statement={card.cardStatement}
            title={card.cardTitle}
            description={card.cardDescription}
            layout={card.layout}
          />
        ))}
      </section>
    </>
  );
});

import { component$ } from "@builder.io/qwik";
import { CardTwo } from "../cards/cardTwo";

interface CardDrilledProps {
  cardImageSrc: string;
  cardImageAlt: string;
  cardTitle: string;
  cardDescription: string;
}

interface SecondSectionProps {
  cards: CardDrilledProps[];
}

export const SecondSection = component$<SecondSectionProps>(({ cards }) => {
  return (
    <>
      <section class="bg-accent-base flex">
        <div class="m-auto flex flex-col gap-8 px-6 py-20 lg:grid lg:max-w-screen-lg lg:grid-cols-3 lg:flex-row">
          {cards.map((card, index) => (
            <CardTwo
              key={index}
              imageSrc={card.cardImageSrc}
              imageAlt={card.cardImageAlt}
              title={card.cardTitle}
              description={card.cardDescription}
            />
          ))}
        </div>
      </section>
    </>
  );
});

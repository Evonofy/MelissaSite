import { component$ } from "@builder.io/qwik";
import { CardThree } from "../cards/cardThree";

interface CardDrilledProps {
  cardTitle: string;
  cardValue: string;
  cardButtonText: string;
  cardButtonLink: string;
}

interface SectionWithImageAndCards {
  imageSrc: string;
  imageAlt: string;
  cards: CardDrilledProps[];
}

interface FourthSectionProps {
  sections: SectionWithImageAndCards[];
}

export const FourthSection = component$<FourthSectionProps>(({ sections }) => {
  return (
    <>
      {sections.map((section, sectionIndex) => (
        <section key={sectionIndex}>
          <div class="m-auto flex h-full flex-col items-center gap-16 py-6 py-8 lg:max-w-screen-lg lg:flex-row lg:items-stretch lg:justify-between">
            <img
              class="max-h-[551px] object-contain lg:w-full"
              width="342"
              height="338"
              alt={section.imageAlt}
              src={section.imageSrc}
            />
            <div class="flex w-full items-center justify-center">
              {section.cards.map((card, cardIndex) => (
                <CardThree
                  key={cardIndex}
                  title={card.cardTitle}
                  value={card.cardValue}
                  buttonText={card.cardButtonText}
                  buttonLink={card.cardButtonLink}
                />
              ))}
            </div>
          </div>
        </section>
      ))}
    </>
  );
});

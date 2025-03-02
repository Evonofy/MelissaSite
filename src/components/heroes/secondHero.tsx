import { component$ } from "@builder.io/qwik";
import { Button } from "../button/button";

interface SummaryHeroProp {
  summary: string;
}

interface DescriptionHeroProp {
  description: string;
  summaries: SummaryHeroProp[];
}

interface SecondHeroProps {
  descriptions: DescriptionHeroProp[];
  comboSrc: string;
  comboAlt: string;
  bonusSrc: string;
  bonusAlt: string;
  statement: string;
  title: string;
  buttonText: string;
  buttonLink: string;
  buttonWebhookUrl?: string;
}

export const SecondHero = component$<SecondHeroProps>(
  ({
    descriptions,
    comboSrc,
    comboAlt,
    bonusSrc,
    bonusAlt,
    statement,
    title,
    buttonText,
    buttonLink,
  }) => {
    return (
      <section class="bg-accent-base">
        <div class="m-auto flex flex-col gap-8 px-6 py-20 lg:max-w-screen-lg lg:gap-16 lg:py-26">
          <div class="flex flex-col items-center gap-8 lg:gap-16">
            <div class="flex flex-col items-center gap-4">
              <p class="!text-accent-light">{statement}</p>
              <h1 class="!text-dark-title text-center">{title}</h1>
            </div>

            <div class="flex flex-col gap-6 lg:gap-8">
              {descriptions.map((descObj, descIndex) => (
                <div key={descIndex} class="flex flex-col gap-2">
                  <p class="!text-dark-paragraph text-center lg:text-left">
                    {descObj.description}
                  </p>

                  <div class="flex flex-col gap-1">
                    {descObj.summaries.map((summObj, summIndex) => (
                      <p key={summIndex} class="!text-dark-paragraph">
                        {summObj.summary}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <img width="700" height="400" alt={comboAlt} src={comboSrc} />
            <Button text={buttonText} link={buttonLink} />
          </div>

          <div class="flex flex-col items-center gap-8">
            <div class="flex flex-col items-center gap-4">
              <h3 class="!text-lime-400">Com Um Bônus:</h3>
              <small class="!text-dark-paragraph text-center">
                Volte às Suas Raízes: Reconecte-Se Consigo Mesmo Naturalmente E
                Inicie Sua Cura Emocional
              </small>
              <img width="500" height="300" alt={bonusAlt} src={bonusSrc} />
            </div>
          </div>
        </div>
      </section>
    );
  },
);

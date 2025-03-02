import { component$ } from "@builder.io/qwik";
import { Button } from "../button/button";

interface HeroProps {
  bgImage: string;
  logoSrc: string;
  logoAlt: string;
  title: string;
  firstDescription: string;
  secondDescription: string;
  videoSrc: string;
  buttonText: string;
  buttonLink: string;
  buttonWebhookUrl?: string;
}

export const Hero = component$<HeroProps>(
  ({
    bgImage,
    logoSrc,
    logoAlt,
    title,
    firstDescription,
    secondDescription,
    videoSrc,
    buttonText,
    buttonLink,
    buttonWebhookUrl,
  }) => {
    return (
      <>
        <section
          style={{ backgroundImage: `url(${bgImage})` }}
          class="relative bg-cover bg-center"
        >
          <div class="absolute inset-0 bg-black opacity-50"></div>

          <div class="relative z-10 m-auto flex flex-col items-center gap-12 py-20 lg:max-w-screen-lg">
            <img
              class="lg:hidden"
              width="121"
              height="80"
              alt={logoAlt}
              src={logoSrc}
            />
            <img
              class="hidden lg:block"
              width="293"
              height="82"
              alt={logoAlt}
              src={logoSrc}
            />
            <div class="lg:grid-areas-['header', 'video', 'content'] flex flex-col items-center gap-16 lg:grid lg:grid-cols-2 lg:grid-rows-[auto,auto]">
              <div class="flex flex-col gap-3 px-6 lg:col-span-1 lg:row-start-1 lg:row-end-1 lg:h-full lg:justify-between">
                <h1 class="!text-dark-title text-center lg:text-left">
                  {title}
                </h1>
                <p class="!text-dark-paragraph text-center lg:text-left">
                  {firstDescription}
                </p>
              </div>
              <div class="relative w-full pb-[75%] lg:col-span-2 lg:row-start-2 lg:row-end-2 lg:h-auto lg:pb-[56.25%]">
                <iframe
                  class="absolute top-0 left-0 h-full w-full"
                  src={videoSrc}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullscreen
                ></iframe>
              </div>

              <div class="flex flex-col items-center justify-center gap-6 px-6 lg:col-start-2 lg:row-start-1 lg:row-end-2 lg:h-auto">
                <p class="!text-dark-paragraph flex flex-col text-center lg:text-left">
                  {secondDescription}
                </p>
                <Button
                  text={buttonText}
                  link={buttonLink}
                  webhookUrl={buttonWebhookUrl}
                />
              </div>
            </div>
          </div>
        </section>
      </>
    );
  },
);

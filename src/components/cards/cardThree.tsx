import { component$ } from "@builder.io/qwik";
import { Button } from "../button/button";

interface CardThreeProps {
  title: string;
  value: string;
  buttonText: string;
  buttonLink: string;
  buttonWebhookUrl?: string;
}

export const CardThree = component$<CardThreeProps>(
  ({ title, value, buttonText, buttonLink }) => {
    return (
      <div class="bg-primary-light border-primary-darker flex h-full w-full max-w-[342px] flex-col items-center justify-between gap-6 rounded-2xl border-2 pb-12">
        <div class="flex w-full items-center justify-center gap-2 border-b-2 py-6">
          <img
            width="24"
            height="24"
            alt="Um pequeno escudo"
            src="CardThree/Shield.svg"
          />
          <p class="font-bold">Compra Segura</p>
        </div>
        <div class="flex flex-col items-center gap-3 px-20">
          <h2 class="text-center">{title}</h2>
          <h3 class="text-center">{value}</h3>
        </div>
        <Button text={buttonText} link={buttonLink} />
      </div>
    );
  },
);

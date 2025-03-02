import { component$ } from "@builder.io/qwik";

interface CardTwoProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
}

export const CardTwo = component$<CardTwoProps>(
  ({ imageSrc, imageAlt, title, description }) => {
    return (
      <div class="bg-primary-light flex flex-1 flex-col items-center gap-8 rounded-tl-lg rounded-br-lg p-6 lg:items-start">
        <img width="64" height="64" alt={imageAlt} src={imageSrc} />
        <div class="flex flex-col gap-6">
          <h3 class="text-center break-all hyphens-auto lg:text-left">
            {title}
          </h3>
          <p class="text-center break-words hyphens-auto lg:text-left">
            {description}
          </p>
        </div>
      </div>
    );
  },
);

import { component$ } from "@builder.io/qwik";

interface CardProps {
  imageSrc: string;
  imageAlt: string;
  statement: string;
  title: string;
  description: string;
  layout?: "normal" | "reverse";
}

export const CardOne = component$<CardProps>(
  ({
    imageSrc,
    imageAlt,
    statement,
    title,
    description,
    layout = "normal",
  }) => {
    return (
      <div
        class={`flex flex-col gap-8 lg:flex-row lg:items-center lg:gap-20 ${layout === "reverse" ? "flex-col-reverse lg:flex-row-reverse" : ""}`}
      >
        <img
          width="342"
          height="300"
          class="w-full rounded-2xl lg:w-max"
          alt={imageAlt}
          src={imageSrc}
        />
        <div class="flex flex-col gap-2 lg:w-full">
          <div class="flex flex-col gap-2 lg:w-full">
            <p class="!text-primary-base font-bold">{statement}</p>
            <h2>{title}</h2>
          </div>
          <p>{description}</p>
        </div>
      </div>
    );
  },
);

import { component$ } from "@builder.io/qwik";

interface ThirdSectionProps {
  imageSrc: string;
  imageAlt: string;
  statement: string;
  title: string;
  description: string[];
}

export const ThirdSection = component$<ThirdSectionProps>(
  ({ imageSrc, imageAlt, statement, title, description }) => {
    return (
      <section>
        <div class="m-auto flex flex-col items-center gap-16 px-6 py-20 lg:max-w-screen-lg">
          <img
            class="h-[342px] rounded-full object-cover"
            width="342"
            height="342"
            alt={imageAlt}
            src={imageSrc}
          />
          <div class="flex flex-col gap-4 lg:items-center">
            <div class="flex flex-col gap-2">
              <p class="!text-accent-base font-bold lg:text-center">
                {statement}
              </p>
              <h2 class="lg:text-center">{title}</h2>
            </div>
            {description.map((desc, index) => (
              <p key={index}>{desc}</p>
            ))}
          </div>
        </div>
      </section>
    );
  },
);

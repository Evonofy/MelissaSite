import { component$, $, useSignal } from "@builder.io/qwik";

interface ButtonProps {
  text: string;
  link: string;
  webhookUrl?: string;
}

export const Button = component$<ButtonProps>(({ text, link, webhookUrl }) => {
  const isSubmitting = useSignal(false);

  const handleClick = $(async (event: Event) => {
    event.preventDefault(); // Prevent immediate navigation

    if (webhookUrl) {
      isSubmitting.value = true;
      try {
        await fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            text,
            link,
            timestamp: new Date().toISOString(),
          }),
        });
      } catch (error) {
        console.error("Webhook error:", error);
      } finally {
        isSubmitting.value = false;
        window.location.href = link; // Manually navigate after request
      }
    } else {
      window.location.href = link; // If no webhook, navigate normally
    }
  });

  return (
    <button
      class="flex w-max items-center bg-accent-dark px-6 py-3 font-bold text-black transition duration-300 hover:bg-accent-dark disabled:opacity-50"
      onClick$={handleClick}
      disabled={isSubmitting.value}
    >
      {isSubmitting.value ? "Processing..." : text}
    </button>
  );
});

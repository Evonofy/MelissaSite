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
      class="hover:bg-accent-dark text-dark-title flex w-max items-center rounded-lg bg-linear-to-r from-[#8D5A3D] to-[#D1AA94] px-6 py-3 font-bold transition duration-300 disabled:opacity-50"
      onClick$={handleClick}
      disabled={isSubmitting.value}
    >
      {isSubmitting.value ? "Processing..." : text}
    </button>
  );
});

import { Options } from "$fresh/plugins/twind.ts";

export default {
  selfURL: import.meta.url,
  theme: {
    extend: {
      fontFamily: {
        sans: "Inter, sans",
      },
    },
  },
  preflight: {
    // Import external stylesheet
    "@import":
      `url('<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@xz/fonts@1/serve/inter.min.css"> ')`,
    // Declare font face
  },
} as Options;

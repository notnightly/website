import { Options } from "$fresh/plugins/twind.ts";

export default {
  selfURL: import.meta.url,
  theme: {
    extend: {
      fontFamily: {
        dirtyLine: "Dirtyline",
      },
      animation: {
        text: "text 5s ease infinite",
      },
      keyframes: {
        text: {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
      },
    },
  },
  preflight: {
    // Import external stylesheet
    "@font-face": [
      {
        fontFamily: "Dirtyline",
        src: "url('/font.ttf')",
      },
    ],
  },
} as Options;

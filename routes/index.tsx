import { asset, Head } from "$fresh/runtime.ts";
import Hero from "../components/Hero.tsx";
import Letter from "../components/Letter.tsx";
import Button from "../islands/Button.tsx";

// SVGs
const vinylSvg = asset("/vinyl.svg");
const spotifySvg = asset("/spotify.svg");

export default function Home() {
  return (
    <>
      <Head>
        <title>Nightly</title>
        <link rel="stylesheet" href={asset("/global.css")} />
      </Head>
      <body class="bg-black scroll-smooth">
        <Hero>
          <h2 class="loki text-6xl sm:text-[220px] font-bold fade-in font-serif">
            <Letter number={1}>N</Letter>
            <Letter number={2}>y</Letter>
            <Letter number={1}>t</Letter>
            <Letter number={2}>l</Letter>
            <Letter number={1}></Letter>
          </h2>
          <div class="mt-10">
            <a
              href="#wip"
              class="text-[#EEEEEE] text-sm sm:text2xl font-dirtyLine opacity-5 fade-in-scroll"
            >
              Scroll down :)
            </a>
          </div>
        </Hero>

        <Hero background="#EEEEEE">
          <h1 class="text-6xl sm:text-[200px] font-dirtyLine font-bold bg-gradient-to-tr from-green-200 to-red-500 bg-clip-text text-transparent animate-text">
            Adrenaline
          </h1>
          <div class="flex justify-center gap-3 ">
            <Button audio>
              <div class="flex">
                <div class="pr-2">
                  <img src={vinylSvg} class="w-5 h-5 sm:w-7 sm:h-7" />
                </div>
                <p class="text-sm sm:text-xl">preview</p>
              </div>
            </Button>
            <Button href="https://open.spotify.com/track/7M7VbBUVoOk627l8EoMCfl?si=c0a61f04bac54f61">
              <div class="flex">
                <div class="pr-2">
                  <img src={spotifySvg} class="w-5 h-5 sm:w-7 sm:h-7" />
                </div>
                <p class="text-sm sm:text-xl">spotify</p>
              </div>
            </Button>
          </div>
        </Hero>
        <Hero>
          <h1 class="text-6xl sm:text-[200px] font-dirtyLine font-bold bg-gradient-to-tr from-blue-200 to-indigo-500 bg-clip-text text-transparent animate-text">
            W.I.P
          </h1>
        </Hero>
      </body>
    </>
  );
}

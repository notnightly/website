import { asset, Head } from "$fresh/runtime.ts";
import AudioMusic from "../islands/AudioMusic.tsx";
const vinylSvg = asset("/vinyl.svg");
const spotifySvg = asset("/spotify.svg");
export default function Home() {
  return (
    <>
      <Head>
        <title>Nightly</title>
        <link rel="stylesheet" href={asset("/global.css")} />
      </Head>
      <body class="bg-black scroll-smooth ">
        {/* play audio file in background autoplayed */}

        {/**Make a hero section */}
        <div
          class="bg-black flex items-center justify-center h-screen"
          id="hero"
        >
          <div class=" text-center">
            {/**Make typerwrite class  */}
            <div>
              <div class="container">
                <h2 class="loki text-6xl sm:text-[230px] font-dirtyLine font-bold  fade-in">
                  <p class="letter1 bg-gradient-to-tr from-green-200 to-indigo-200 bg-clip-text text-transparent animate-text">
                    N
                  </p>
                  <p class="letter2 bg-gradient-to-tr from-indigo-100 to-indigo-200 bg-clip-text text-transparent animate-text">
                    i
                  </p>
                  <p class="letter3 bg-gradient-to-tr from-indigo-100 to-indigo-200 bg-clip-text text-transparent animate-text">
                    g
                  </p>
                  <p class="letter4 bg-gradient-to-tr from-indigo-100 to-indigo-200 bg-clip-text text-transparent animate-text">
                    h
                  </p>
                  <p class="letter5 bg-gradient-to-tr from-indigo-100 to-indigo-200 bg-clip-text text-transparent animate-text">
                    t
                  </p>
                  <p class="letter6 bg-gradient-to-tr from-indigo-100 to-indigo-200 bg-clip-text text-transparent animate-text">
                    l
                  </p>
                  <p class="letter7 bg-gradient-to-tr from-indigo-100 to-indigo-300 bg-clip-text text-transparent animate-text">
                    y
                  </p>
                </h2>
                <div class="mt-10">
                  <a
                    href="#wip"
                    class="text-[#EEEEEE] text-sm sm:text2xl font-dirtyLine fade-in-scroll"
                  >
                    Scroll down :)
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          class="bg-[#EEEEEE] flex items-center justify-center h-screen"
          id="wip"
        >
          <div
            class="text-[#EEEEEE]
          text-center"
            id="vid"
          >
            <h1 class="text-6xl sm:text-[200px] font-dirtyLine font-bold bg-gradient-to-tr from-green-200 to-red-500 bg-clip-text text-transparent animate-text">
              Adrenaline
            </h1>
            <div class="flex justify-center gap-3 ">
              <AudioMusic>
                <div class="flex">
                  <div class="pr-2">
                    <img src={vinylSvg} class="w-5 h-5 sm:w-7 sm:h-7" />
                  </div>
                  <p class="text-sm sm:text-2xl">preview</p>
                </div>
              </AudioMusic>
              <a
                href="https://open.spotify.com/track/7M7VbBUVoOk627l8EoMCfl?si=c0a61f04bac54f61"
                class="font-dirtyLine text-[#181818] text-sm sm:text2xl border-2 border-[#181818] rounded-lg p-2 mt-5 "
              >
                <div class="flex">
                  <div class="pr-2">
                    <img src={spotifySvg} class="w-5 h-5 sm:w-7 sm:h-7" />
                  </div>
                  <p class="text-sm sm:text-2xl">spotify</p>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div class="bg-black flex items-center justify-center h-screen">
          <h1 class="text-2xl sm:text-[30px] font-dirtyLine font-bold bg-gradient-to-tr from-gray-200 to-gray-400 bg-clip-text text-transparent wip">
            Work in progress
          </h1>
        </div>
      </body>
    </>
  );
}

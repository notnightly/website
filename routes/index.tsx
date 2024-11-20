import { asset, Head } from "$fresh/runtime.ts";

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
            <div class="typewriter">
              <h1 class=" text-5xl sm:text-[300px] font-dirtyLine font-bold bg-gradient-to-tr from-green-200 to-indigo-200 bg-clip-text text-transparent animate-text fade-in">
                Nightly
              </h1>
            </div>
            <div class="mt-10">
              <a
                href="#wip"
                class="text-[#EEEEEE] text-sm sm:text2xl font-dirtyLine fade-in-scroll"
              >
                Scroll down
              </a>
            </div>
          </div>
        </div>
        <div
          class="bg-black flex items-center justify-center h-screen"
          id="wip"
        >
          <div class="text-[#EEEEEE]
          text-center">
            <audio autoPlay>
              <source src={asset("/adrenaline.mp3")} type="audio/mpeg" />
            </audio>
            <h1 class="text-3xl font-dirtyLine font-bold">WOrk In ProgrEss</h1>
          </div>
        </div>
      </body>
    </>
  );
}

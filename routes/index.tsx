import { asset, Head } from "$fresh/runtime.ts";

export default function Home() {
  return (
    <>
      <Head>
        <title>Nightly</title>
        <link rel="stylesheet" href={asset("/global.css")} />
      </Head>
      <body class="bg-black ">
        <div class="element  w-screen h-auto">
          <section class="">
            <div class="justify-center items-center text-white flex white">
              <div class="typewriter">
                <p
                  class="text-5xl md:text-7xl font-semibold text-gray-200 typed-out"
                  id="typewriter"
                >
                  Hi, I'm Nightly.
                </p>
              </div>
            </div>
            <p class="text-xl md:text-3xl font-semibold pt-14 bg-gradient-to-tr from-indigo-400 to-indigo-900 inline-block text-transparent bg-clip-text">
              W.I.P~
            </p>
          </section>
        </div>
      </body>
    </>
  );
}

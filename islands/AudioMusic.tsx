import { asset } from "$fresh/runtime.ts";

export default function AudioMusic(props: any) {
  const playAudio = (url: string) => {
    new Audio(url).play();
  };
  return (
    <div>
      <button
        onClick={() => playAudio(asset("/adrenaline.mp3"))}
        class="font-dirtyLine text-[#181818] text-sm sm:text2xl border-2 border-[#181818] rounded-lg p-2 mt-5 "
      >
        {props.children}
      </button>
    </div>
  );
}

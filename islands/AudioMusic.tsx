import { asset } from "$fresh/runtime.ts";

export default function AudioMusic(props: { text: string }) {
  const playAudio = (url: string) => {
    new Audio(url).play();
  };

  return (
    <div>
      <button
        onClick={() => playAudio(asset("/adrenaline.mp3"))}
        class="font-dirtyLine text-[#EEEEEE] text-sm sm:text2xl border-2 border-[#EEEEEE] rounded-lg p-2 mt-5 "
      >
        {props.text}
      </button>
    </div>
  );
}

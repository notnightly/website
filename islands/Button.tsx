// create component button
import { asset } from "$fresh/runtime.ts";
export default function Button(
  // deno-lint-ignore no-explicit-any
  props: { children: any; href?: string; audio?: boolean },
) {
  const buttonClass =
    "font-dirtyLine text-[#181818] text-sm sm:text-xl border-2 border-[#181818] rounded-lg p-2 mt-3";
  const playAudio = (url: string) => {
    new Audio(url).play();
  };
  {
    if (props.audio) {
      return (
        <button
          onClick={() => playAudio(asset("/adrenaline.mp3"))}
          href={props.href}
          className={buttonClass}
        >
          {props.children}
        </button>
      );
    } else {
      return (
        <a
          href={props.href}
          className={buttonClass}
        >
          {props.children}
        </a>
      );
    }
  }
}

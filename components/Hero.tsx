// deno-lint-ignore no-explicit-any
export default function Hero(props: { children: any; background?: string }) {
  return (
    <div
      class={`${
        props.background ? `bg-[${props.background}]` : "bg-black"
      } flex items-center justify-center h-screen`}
      id="hero"
    >
      <div class="text-center">
        <div class="container">
          {props.children}
        </div>
      </div>
    </div>
  );
}

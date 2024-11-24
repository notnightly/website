export default function Letter(props: { number: number; children: string }) {
  let gradient;
  if (props.number == 1) {
    gradient = "from-green-200 to-indigo-200";
  } else {
    gradient = "from-indigo-100 to-indigo-200";
  }
  return (
    <>
      <p
        class={`letter${props.number} bg-gradient-to-tr ${gradient} bg-clip-text text-transparent animate-text`}
      >
        {props.children}
      </p>
    </>
  );
}

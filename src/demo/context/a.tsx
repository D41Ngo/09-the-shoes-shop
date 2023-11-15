import { useCountContext } from ".";
import B from "./b";

function A() {
  const [count, setCount] = useCountContext();

  return (
    <div>
      <button
        onClick={() => {
          setCount((c) => c + 1);
        }}
      >
        +
      </button>
      <h1>Count A: {count}</h1>
      <B />
    </div>
  );
}

export default A;

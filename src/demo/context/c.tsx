import { useCountContext } from ".";

function C() {
  const [count] = useCountContext();
  return <div>C: {count}</div>;
}

export default C;

import React, {
  useState,
  useRef,
  useImperativeHandle,
  forwardRef,
} from "react";

function RefComponent() {
  const ref = useRef<{ increase: () => void }>();

  const increase = () => {
    ref.current?.increase();
  };

  return (
    <div>
      <button onClick={increase}>+</button>
      <Counter ref={ref} />
    </div>
  );
}
// khoông thể lấy ref thông qua props được.
// forwardRef: component muốn nhan ref từ bên ngoài
const Counter = forwardRef(function Counter(props: any, ref: any) {
  const [count, setCount] = useState(0);

  useImperativeHandle(
    ref,
    () => {
      // ref.current = { abc: 10 };
      return {
        abc: 10,
        increase,
        descrease,
      };
    },
    [],
  );

  const increase = () => {
    setCount((c) => c + 1);
  };
  const descrease = () => {
    setCount((c) => c - 1);
  };

  return <h1>{count}</h1>;
});

export default RefComponent;

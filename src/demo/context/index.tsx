import { createContext, useState, useContext } from "react";
import type { PropsWithChildren } from "react";
import A from "./a";

// giá trị default cho những component chưa bọc bởi CountProvider
type TCountContext = Readonly<
  [number, React.Dispatch<React.SetStateAction<number>>]
>;
export const CountContext = createContext<TCountContext>(
  null as unknown as TCountContext,
);

export const useCountContext = () => {
  const store = useContext(CountContext);
  if (!store) {
    throw Error("Phải bọc CountProvider");
  }
  return store;
};

export function CountProvider(props: PropsWithChildren) {
  // tạo state
  const [count, setCount] = useState(0);

  // tạo store
  const value = [count, setCount] as const;

  return (
    <CountContext.Provider value={value}>
      {props.children}
    </CountContext.Provider>
  );
}

export function DemoContext() {
  const store = useContext(CountContext);
  console.log({ store });
  return (
    <CountProvider>
      <A />
    </CountProvider>
  );
}

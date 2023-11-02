import { ListCard } from "src/components/list-card";
import { Slider } from "./slider";
// import RefComponent from "./ref-component";
import * as GS from "src/components/style";

function Home() {
  return (
    <div>
      <Slider />
      {/* <RefComponent /> */}

      <GS.Title>Product Feature</GS.Title>

      <div
        style={{
          margin: "4rem",
        }}
      >
        <ListCard />
      </div>
    </div>
  );
}

export default Home;

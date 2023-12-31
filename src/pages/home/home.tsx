import { ListCard } from "src/components/list-card";
import { Slider } from "./slider";
// import RefComponent from "./ref-component";
import { useEffect, useState } from "react";
import * as GS from "src/components/style";
import { getAllProduct } from "src/services";
import { IIFE } from "src/utils";
import { TProductAPI, convert } from "./convert";
import { TCard } from "src/components/list-card/card";
import { useScrollToTop } from "src/hooks/use-scroll-to-top";

function Home() {
  /**
   * - Call api get list product khi người dùng vào trang Home
   *
   */
  const [listProduct, setListProduct] = useState<TCard[]>([]);

  useEffect(() => {
    // IIFE:(()=>{})()
    IIFE(async () => {
      const resp = await getAllProduct();
      setListProduct(convert(resp));
    });
  }, []);

  // useEffect(() => {
  //   getAllProduct(
  //     (resp: any) => {
  //       setListProduct(convert(resp));
  //     },
  //     (err) => {
  //       // xu ly error
  //     },
  //   );
  // }, []);

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
        <ListCard products={listProduct} />
      </div>
    </div>
  );
}

export default Home;
